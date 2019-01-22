// Set page title
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.getElementById('pageTitle').innerHTML;
    pageTitle ? document.title = pageTitle + ' - Quill' : false;
}, false);