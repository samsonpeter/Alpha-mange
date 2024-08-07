"use strict";

var content = document.getElementById('content');
var nav = document.getElementById('nav');
var manage = document.getElementById('manage');
nav.addEventListener('click', function () {
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    content.classList.add('block');
  } else {
    content.classList.remove('block');
    content.classList.add('hidden');
  }

  while (content.classList.add('block')) {
    style.content.classList.toggle('transition 0.5s ease-in-out duration-300 translate-y-10');
  }
});