// Publications page: papers listed newest first, with a git-style graph on the
// left. Each research theme is a colored branch line that runs from its first
// to its latest paper; each paper is a dot on its main theme's branch, and
// papers that also belong to other themes get a merge curve from those branches.

import { THEMES, PUBLICATIONS } from './publications-data.js';

const LANE_GAP = 14;        // horizontal spacing between branch lines (px)
const LANE_PAD = 10;        // left padding before the first branch
const DOT_OFFSET = 15;      // vertical position of a dot within its row (px)
const SVG_NS = 'http://www.w3.org/2000/svg';

const themeById = Object.fromEntries(THEMES.map(t => [t.id, t]));
const chips = document.getElementById('pub-themes');
const description = document.getElementById('pub-theme-description');
const graph = document.getElementById('pub-graph');
const list = graph.querySelector('.pub-list');
const svg = graph.querySelector('.pub-lanes');

let activeTheme = null;     // null shows every paper

function el(tag, attrs = {}, text) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (text !== undefined) node.textContent = text;
    return node;
}

function svgEl(tag, attrs) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    return node;
}

// Theme chips: "All" plus one per theme, in branch order
function renderChips() {
    chips.replaceChildren();
    const make = (id, label, color) => {
        const chip = el('button', { type: 'button', class: 'pub-chip' }, label);
        if (color) chip.style.setProperty('--chip-color', color);
        chip.setAttribute('aria-pressed', String(activeTheme === id));
        chip.addEventListener('click', () => {
            activeTheme = activeTheme === id ? null : id;
            render();
        });
        chips.append(chip);
    };
    make(null, 'All themes');
    for (const t of THEMES) make(t.id, t.name, t.color);
    description.textContent = activeTheme
        ? themeById[activeTheme].description
        : `${PUBLICATIONS.length} papers across ${THEMES.length} research themes.`;
}

// Long author lists (large software papers) are shortened to the first few
// authors, Francesco, and the last author
function shortenAuthors(authors) {
    const names = authors.split(', ');
    if (names.length <= 12) return authors;
    const me = names.findIndex(n => /Evangelista$/.test(n));
    const keep = names.slice(0, 3);
    if (me >= 3 && me < names.length - 1) keep.push('…', names[me]);
    keep.push('…', names[names.length - 1]);
    return `${keep.join(', ')} (${names.length} authors)`;
}

function authorsWithEmphasis(authors) {
    const span = el('span', { class: 'pub-authors' });
    const parts = shortenAuthors(authors).split(/(F\. A\. Evangelista|F\. Evangelista)/);
    for (const part of parts) {
        if (/Evangelista$/.test(part)) span.append(el('strong', {}, part));
        else span.append(document.createTextNode(part));
    }
    return span;
}

function renderList(papers) {
    list.replaceChildren();
    let year = null;
    for (const p of papers) {
        if (p.year !== year) {
            year = p.year;
            list.append(el('li', { class: 'pub-year' }, String(year)));
        }
        const item = el('li', { class: 'pub' });
        item.dataset.themes = p.themes.join(' ');
        const title = el('a', { class: 'pub-title', href: `https://doi.org/${p.doi}`, target: '_blank', rel: 'noreferrer noopener' }, p.title);
        const venue = el('span', { class: 'pub-venue' }, `${p.venue}${p.preprint ? ' (preprint)' : ''}, ${p.year}`);
        const tags = el('span', { class: 'pub-tags' });
        for (const id of p.themes) {
            const tag = el('span', { class: 'pub-tag' }, themeById[id].name);
            tag.style.setProperty('--chip-color', themeById[id].color);
            tags.append(tag);
        }
        item.append(title, el('br'), authorsWithEmphasis(p.authors), el('br'), venue, tags);
        list.append(item);
    }
}

// Draw branches, dots, and merge curves from the rendered row positions
function drawGraph(papers) {
    const lanes = THEMES.filter(t => papers.some(p => p.themes.includes(t.id)));
    const laneX = Object.fromEntries(lanes.map((t, i) => [t.id, LANE_PAD + i * LANE_GAP]));
    const width = LANE_PAD * 2 + Math.max(0, lanes.length - 1) * LANE_GAP;
    graph.style.setProperty('--lanes-width', `${width}px`);

    const rows = [...list.querySelectorAll('.pub')];
    const ys = rows.map(row => row.offsetTop + DOT_OFFSET);
    svg.setAttribute('width', width);
    svg.setAttribute('height', list.offsetHeight);
    svg.replaceChildren();

    // Branch lines: from the newest to the oldest paper touching each theme
    for (const t of lanes) {
        const touching = ys.filter((y, i) => papers[i].themes.includes(t.id));
        svg.append(svgEl('line', {
            x1: laneX[t.id], x2: laneX[t.id], y1: touching[0], y2: touching[touching.length - 1],
            stroke: t.color, 'stroke-width': 2.5, 'stroke-linecap': 'round', opacity: 0.85,
        }));
    }

    papers.forEach((p, i) => {
        const y = ys[i];
        const main = p.themes[0];
        // Merges: a curve from each secondary branch into the paper's dot
        for (const other of p.themes.slice(1)) {
            const xs = laneX[other], xp = laneX[main];
            svg.append(svgEl('path', {
                d: `M ${xs} ${y - 16} C ${xs} ${y - 4}, ${xp} ${y - 8}, ${xp} ${y}`,
                fill: 'none', stroke: themeById[other].color, 'stroke-width': 2,
            }));
            svg.append(svgEl('circle', { cx: xs, cy: y - 16, r: 3, fill: '#ffffff', stroke: themeById[other].color, 'stroke-width': 2 }));
        }
        const dot = svgEl('circle', { cx: laneX[main], cy: y, r: 5.5, fill: themeById[main].color, stroke: '#ffffff', 'stroke-width': 2 });
        dot.append(svgEl('title', {}));
        dot.firstChild.textContent = themeById[main].name;
        svg.append(dot);
    });
}

let visible = PUBLICATIONS;

function render() {
    visible = activeTheme ? PUBLICATIONS.filter(p => p.themes.includes(activeTheme)) : PUBLICATIONS;
    renderChips();
    renderList(visible);
    drawGraph(visible);
}

// Rows reflow when the window resizes, so redraw the graph to match
new ResizeObserver(() => drawGraph(visible)).observe(list);
render();
