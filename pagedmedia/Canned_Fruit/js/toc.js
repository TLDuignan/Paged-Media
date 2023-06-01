makeBookmarks('#wrapper > section h1', 'header');

function makeBookmarks(chapterTitles, putBookmarksHere){
  var CHTITLES = document.querySelectorAll(chapterTitles);
  var OL = document.createElement('ol');

  for(i=0; i < CHTITLES.length; i++){
    var newId = 'ch' + (i+1);
    CHTITLES[i].setAttribute('id', newId);
    var linkHref = '#' + CHTITLES[i].getAttribute('id');
    var linkText = CHTITLES[i].textContent;

    var LI = document.createElement('li');
    var A = document.createElement('a');
    A.setAttribute('href', linkHref);
    A.textContent = linkText;
    LI.appendChild(A);
    OL.appendChild(LI);
  }

  var SECTION = document.createElement('section');
  SECTION.setAttribute('id', 'toc');
  var H1 = document.createElement('h1');
  H1.textContent = 'Table of Contents';

  var HEADER = document.querySelector(putBookmarksHere);
  var WRAPPER = document.querySelector('#wrapper');

  SECTION.appendChild(H1);
  SECTION.appendChild(OL);
  WRAPPER.insertBefore(SECTION, HEADER.nextSibling);
}