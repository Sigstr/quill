'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var pageTitle = document.getElementById('pageTitle').innerHTML;
  pageTitle ? document.title = pageTitle + ' - Quill' : false;
}, false);
