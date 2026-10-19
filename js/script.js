document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.innerHTML = createNavBar() + createHeader('The <strong>Evangelista</strong> Lab');
    document.body.insertAdjacentHTML('beforeend', createFooter());
});

function createFooter() {
    const year = new Date().getFullYear();
    return `
        <footer>
            <p>Evangelista Lab · Department of Chemistry, Emory University<br>
                1515 Dickey Dr. NE, Atlanta, GA 30322</p>
            <p>© ${year} Evangelista Lab</p>
        </footer>
    `;
}

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
        ['teaching.html', 'Teaching'],
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

