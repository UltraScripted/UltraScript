// assets/js/docs.js
(() => {
// active link highlighting
const links = document.querySelectorAll('.sidebar a');
links.forEach(l => {
if (location.pathname.endsWith(l.getAttribute('href'))) {
l.style.color = 'var(--accent)';
}
});


// copy buttons for code blocks
document.querySelectorAll('pre').forEach(pre => {
const btn = document.createElement('button');
btn.textContent = 'Copy';
btn.style.cssText = 'position:absolute;top:8px;right:8px;font-size:12px;';
btn.onclick = () => navigator.clipboard.writeText(pre.innerText);
pre.style.position = 'relative';
pre.appendChild(btn);
});
})();
