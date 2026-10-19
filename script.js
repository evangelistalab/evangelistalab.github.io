document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.innerHTML = createNavBar() + createHeader('The <strong>Evangelista</strong> Lab');
});

function createHeader(title) {
    return `<h1>The <strong>Evangelista</strong> Lab</h1>`;
}

function createNavBar() {
    return `
        <nav id="main-nav">
            <a href="index.html">Home</a>
            <a href="people.html">People</a>
            <a href="research.html">Research</a>
            <a href="talks.html">Talks</a>
            <a href="publications.html">Publications</a>
            <a href="software.html">Software</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;
}

