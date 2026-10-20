// The header and nav are written into each page's HTML (so they show up
// immediately); this script adds the shared footer and the scroll behavior.
// To add a page, copy the <header> block from an existing page and move
// class="active" aria-current="page" onto the new page's link.

document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', createFooter());

    // Slim the sticky header down once the page has scrolled
    const header = document.getElementById('main-header');
    const update = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', update, { passive: true });
    update();
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
