document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.innerHTML = createNavBar() + createHeader('The <strong>Evangelista</strong> Lab');
});

function createHeader(title) {
    return `<h1>The <strong>Evangelista</strong> Lab</h1>`;
}

function createNavBar() {
    const pages = [
        ['index.html', 'Home'],
        ['people.html', 'People'],
        ['alumni.html', 'Alumni'],
        ['research.html', 'Research'],
        ['talks.html', 'Talks'],
        ['publications.html', 'Publications'],
        ['software.html', 'Software'],
        ['contact.html', 'Contact'],
    ];

    // Highlight the current page; "/" is the home page
    const current = window.location.pathname.split('/').pop() || 'index.html';

    const links = pages.map(([href, label]) =>
        href === current
            ? `<a href="${href}" class="active" aria-current="page">${label}</a>`
            : `<a href="${href}">${label}</a>`
    ).join('\n            ');

    return `
        <nav id="main-nav">
            ${links}
        </nav>
    `;
}

