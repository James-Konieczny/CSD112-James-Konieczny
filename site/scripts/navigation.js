const navItems = [
    { text: 'Home', url: 'index.html' },
    { text: 'Links', url: 'links.html' },
    { text: 'Glossary', url: 'glossary.html' }
];

// Function to generate navigation HTML
function createNavigation() {
    const nav = document.getElementById('main-nav');
    let html = '<ul>';
    
    navItems.forEach(item => {
        html += `<li><a href="${item.url}">${item.text}</a></li>`;
    });
    
    html += '</ul>';
    nav.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', createNavigation);