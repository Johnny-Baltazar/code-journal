/* global data */
/* exported data */

var $input = document.querySelector('.url-input');
var $img = document.querySelector('.image-update');
var $form = document.querySelector('#form');
var $entriesA = document.querySelector('.entries-a');
var $newButton = document.querySelector('.new-button');
var $dataViewEntries = document.querySelector('.data-entries');
var $dataEntry = document.querySelector('.entry-row');
var $noEntries = document.querySelector('.no-entries');
var $container = document.querySelector('.container');
// var $editEntry;

$input.addEventListener('input', inputUrl);

function inputUrl(event) {
  $img.setAttribute('src', $input.value);
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var title = $form.elements.title.value;
  var url = $form.elements.url.value;
  var notes = $form.elements.notes.value;

  var entries = {
    title: title,
    url: url,
    notes: notes
  };
  data.entries.unshift(entries);
  $dataEntry.prepend(renderData(entries));
  entries.nextEntryId = data.nextEntryId++;

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

  $dataViewEntries.classList.remove('hidden');
  $form.className = 'hidden';

  data.view = 'entries';
  $container.setAttribute('class', 'container height-auto ');
});

document.addEventListener('DOMContentLoaded', function (event) {

  for (var i = 0; i < data.entries.length; i++) {
    var entriesRow = renderData(data.entries[i]);
    $dataViewEntries.appendChild(entriesRow);
  }

  if (data.view === 'entries') {
    $form.className = 'hidden';
    $dataViewEntries.classList.remove('hidden');
  }

  var $editEntry = document.querySelectorAll('.edit-entry');
  for (var j = 0; j < $editEntry.length; j++) {
    $editEntry[j].addEventListener('click', function (event) {
      // console.log('clicked');
    });
  }
});

function renderData(entries) {

  var entriesRow = document.createElement('div');
  entriesRow.setAttribute('class', 'row entries-row font-os');

  var divColumnHalfone = document.createElement('div');
  divColumnHalfone.setAttribute('class', 'column-half align-end');
  entriesRow.appendChild(divColumnHalfone);

  var divUrlImg = document.createElement('img');
  divUrlImg.setAttribute('src', entries.url);
  divUrlImg.setAttribute('alt', 'Entries Image');
  divUrlImg.setAttribute('class', 'entries-img lovelace-img');
  divColumnHalfone.appendChild(divUrlImg);

  var divColumnHalfTwo = document.createElement('div');
  divColumnHalfTwo.setAttribute('class', 'column-half');
  entriesRow.append(divColumnHalfTwo);

  var h3Entries = document.createElement('h3');
  h3Entries.setAttribute('class', 'h3-entries entries-title');
  var entryTitle = document.createTextNode(entries.title);
  h3Entries.appendChild(entryTitle);
  divColumnHalfTwo.appendChild(h3Entries);

  var iTag = document.createElement('i');
  iTag.setAttribute('class', 'fas fa-pencil-alt');
  iTag.setAttribute('data-entry-id', entries.nextEntryId);
  h3Entries.append(iTag);

  var divUl = document.createElement('ul');
  divUl.setAttribute('class', 'no-bullets lovelace-ul edit-entry');
  divColumnHalfTwo.append(divUl);

  var divUlLi = document.createElement('li');
  divUl.append(divUlLi);

  var pOne = document.createElement('p');
  var pNotes = document.createTextNode(entries.notes);
  pOne.appendChild(pNotes);
  divUlLi.appendChild(pOne);

  $noEntries.remove();

  return entriesRow;
}

$entriesA.addEventListener('click', function (event) {
  event.preventDefault();

  $dataViewEntries.classList.remove('hidden');
  $form.className = 'hidden';

  data.view = 'entries';
});

$newButton.addEventListener('click', function (event) {
  event.preventDefault();
  $dataViewEntries.className = 'hidden';
  $form.classList.remove('hidden');
  // $container.setAttribute('class', 'height-auto');
  data.view = 'entry-form';
});

// $editEntry = document.querySelectorAll('.edit-entry');
// console.log(document.querySelectorAll('.edit-entry'));
// document.querySelectorAll('.edit-entry').addEventListener('click');
