document.addEventListener('DOMContentLoaded', function() {
    var pageTitle = document.getElementById('pageTitle').innerHTML;
    pageTitle ? document.title = 'Quill - ' + pageTitle : false;
    
}, false);