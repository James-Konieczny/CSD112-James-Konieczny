/**
 * navigation.js - Dynamic Navigation Generator
 * 
 * This script dynamically generates the site navigation menu to replace static HTML.
 * 
 * Features:
 * - Centralized menu configuration in a JavaScript array
 * - Automatic generation of navigation HTML
 * - Easy maintenance when adding/removing pages
 * - Consistent navigation across all pages
 */

// Array of navigation items
const navItems = [
    { text: 'Home', url: 'index.html' },
    { text: 'Links', url: 'links.html' },
    { text: 'Glossary', url: 'glossary.html' }
];

/**
 * Creates the navigation menu and inserts it into the page
 * 
 * This function:
 * 1. Gets the navigation container element
 * 2. Generates an unordered list of navigation items
 * 3. Sets the innerHTML of the navigation container
 * 
 * The generated HTML structure:
 * <ul>
 *   <li><a href="url">text</a></li>
 *   ...
 * </ul>
 */
function createNavigation() {
    const nav = document.getElementById('main-nav');
    let html = '<ul>';
    
    /**
     * Loop through each navigation item and generate list items
     * 
     * For each item in the navItems array:
     * - Create a list item <li>
     * - Inside it, create an anchor <a> with:
     *   - href: The URL from the navItems array
     *   - text: The display text from the navItems array
     */
    navItems.forEach(item => {
        html += `<li><a href="${item.url}">${item.text}</a></li>`;
    });
    
    html += '</ul>';
    nav.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', createNavigation);