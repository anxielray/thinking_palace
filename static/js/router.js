// // router.js

// const routes = {
//     '/thinking_palace': 'index.html',
//     '/thinking_palace/articles': 'pages/explore.html',
//     '/thinking_palace/about': 'pages/about.html',
//     '/thinking_palace/contact': 'pages/contact.html'
// };

// // Mount point
// const app = document.getElementById('app');

// // Load a file into the app container
// async function loadPage(filePath) {
//     try {
//         const response = await fetch(filePath);
//         if (!response.ok) throw new Error('Page not found');
//         const html = await response.text();
//         app.innerHTML = html;
//     } catch (err) {
//         app.innerHTML = `<div class="text-red-400 p-8 text-center">404 - Not Found</div>`;
//     }
// }

// // Main routing function
// function navigateTo(path) {
//     const filePath = routes[path];
//     if (!filePath) return loadPage('pages/404.html');
//     window.history.pushState({}, '', path);
//     loadPage(filePath);
// }

// // Handle browser back/forward
// window.onpopstate = () => {
//     loadPage(routes[window.location.pathname] || 'pages/404.html');
// };

// // Initial load
// document.addEventListener('DOMContentLoaded', () => {
//     loadPage(routes[window.location.pathname] || 'pages/404.html');
// });



const thoughts = [
    "prime spirals", "Pascal's triangle", "quantum foam",
    "Euler's identity", "non-Euclidean space", "Turing machines"
];
let idx = 0, char = 0, deleting = false;

function typeNerd() {
    const el = document.getElementById('nerd-type');
    if (!el) return;

    const word = thoughts[idx];
    el.textContent = deleting ? word.substring(0, char--) : word.substring(0, char++);

    if (!deleting && char === word.length + 1) {
        deleting = true;
        setTimeout(typeNerd, 1000);
    } else if (deleting && char === 0) {
        deleting = false;
        idx = (idx + 1) % thoughts.length;
        setTimeout(typeNerd, 400);
    } else {
        setTimeout(typeNerd, deleting ? 40 : 70);
    }
}

typeNerd();


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.feature-tab');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('border-blue-500', 'bg-gray-800'));
            tab.classList.add('border-blue-500', 'bg-gray-800');
        });
    });
});
