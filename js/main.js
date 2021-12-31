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
var $titleInput = document.querySelector('input');
var $notesInput = document.querySelector('.notes-input');

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
  entries.dataEntryId = data.nextEntryId++;

  if (data.editing !== null) {
    $dataEntry.replaceWith(renderData(entries));
  }

  data.editing = null;

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

  $dataViewEntries.classList.remove('hidden');
  $form.className = 'hidden';

  data.view = 'entries';
  $container.setAttribute('class', 'container height-auto ');
});

document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();

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
      var dataEntryIdValue = event.target.getAttribute('data-entry-id');
      var parsedDataEntryIdValue = parseInt(dataEntryIdValue);

      $dataViewEntries.className = 'hidden';
      $form.classList.remove('hidden');
      for (var h = 0; h < data.entries.length; h++) {
        if (parsedDataEntryIdValue === data.entries[h].dataEntryId) {
          data.editing = data.entries[h];
          $titleInput.value = data.entries[h].title;
          $input.value = data.entries[h].url;
          $notesInput.value = data.entries[h].notes;
          $img.setAttribute('src', $input.value);
        }
      }
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

  var divUl = document.createElement('ul');
  divUl.setAttribute('class', 'no-bullets lovelace-ul edit-entry');
  divColumnHalfTwo.append(divUl);

  var divIlOne = document.createElement('li');
  divUl.append(divIlOne);

  var h3Entries = document.createElement('h3');
  var entryTitle = document.createTextNode(entries.title);
  h3Entries.appendChild(entryTitle);
  h3Entries.setAttribute('class', 'h3-entries entries-title');
  divIlOne.append(h3Entries);

  var liTwo = document.createElement('li');
  var iTag = document.createElement('i');
  iTag.setAttribute('data-entry-id', entries.dataEntryId);
  iTag.setAttribute('class', 'fas fa-pencil-alt');
  liTwo.append(iTag);
  divUl.append(liTwo);

  var pOne = document.createElement('p');
  var pNotes = document.createTextNode(entries.notes);
  var liThree = document.createElement('li');
  pOne.appendChild(pNotes);
  liThree.append(pOne);
  divUl.append(liThree);

  $noEntries.remove();

  return entriesRow;
}

$entriesA.addEventListener('click', function (event) {
  event.preventDefault();

  $dataViewEntries.classList.remove('hidden');
  $form.className = 'hidden';

  data.view = 'entries';
  data.editing = null;
});

$newButton.addEventListener('click', function (event) {
  event.preventDefault();
  $dataViewEntries.className = 'hidden';
  $form.classList.remove('hidden');

  data.view = 'entry-form';
});
