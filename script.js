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
            <a href="contact.html">Contact</a>
        </nav>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    var head = document.head;
    
    // Create meta tags
    var metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");
    var metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    
    // Create title tag
    var title = document.createElement("title");
    title.textContent = "Evangelista Lab";
    
    // Create stylesheet link
    var styles = document.createElement("link");
    styles.setAttribute("rel", "stylesheet");
    styles.setAttribute("href", "styles.css");
    
    // Create preconnect links
    var preconnect1 = document.createElement("link");
    preconnect1.setAttribute("rel", "preconnect");
    preconnect1.setAttribute("href", "https://fonts.googleapis.com");
    var preconnect2 = document.createElement("link");
    preconnect2.setAttribute("rel", "preconnect");
    preconnect2.setAttribute("href", "https://fonts.gstatic.com");
    preconnect2.setAttribute("crossorigin", "");
    
    // Create font stylesheet link
    var fontLink = document.createElement("link");
    fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
    fontLink.setAttribute("rel", "stylesheet");
    
    // Append elements to head
    head.appendChild(metaCharset);
    head.appendChild(metaViewport);
    head.appendChild(title);
    head.appendChild(styles);
    head.appendChild(preconnect1);
    head.appendChild(preconnect2);
    head.appendChild(fontLink);
});