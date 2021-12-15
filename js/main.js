/* global data */
/* exported data */

var $input = document.querySelector('.url-input');
var $img = document.querySelector('.image-update');
var $form = document.querySelector('#form');

$input.addEventListener('input', inputUrl);
$form.addEventListener('submit', handleSubmit);

function inputUrl(event) {
  $img.setAttribute('src', $input.value);
}

function handleSubmit(event) {
  event.preventDefault();

  var title = $form.elements.title.value;
  var url = $form.elements.url.value;
  var notes = $form.elements.notes.value;

  var formData = {
    title: title,
    url: url,
    notes: notes
  };

  formData.nextEntryId = data.nextEntryId++;

  data.entries.unshift(formData);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

var entries = data.entries;
var dataViewEntries = document.querySelector('.data-entries');

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < entries.length; i++) {
    var entriesRow = renderData(entries[i]);
    dataViewEntries.appendChild(entriesRow);
  }
});

function renderData(entries) {

  var entriesRow = document.createElement('div');
  entriesRow.setAttribute('class', 'row entries-row');

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

  var divUl = document.createElement('ul');
  divUl.setAttribute('class', 'no-bullets lovelace-ul');
  divColumnHalfTwo.appendChild(divUl);

  var divUlLi = document.createElement('li');
  divUl.appendChild(divUlLi);

  var pOne = document.createElement('p');
  var pNotes = document.createTextNode(entries.notes);
  pOne.appendChild(pNotes);
  divUlLi.appendChild(pOne);

  return entriesRow;
}
