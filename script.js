document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.innerHTML = createHeader('Evangelista Lab') + createNavBar();
});

function createHeader(title) {
    return `<h1>${title}</h1>`;
}

function createNavBar() {
    return `
        <nav id="main-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    `;
}