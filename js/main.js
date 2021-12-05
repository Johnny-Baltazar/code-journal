/* global data */
/* exported data */

var $input = document.querySelector('.url-input');
var $img = document.querySelector('.image-update');
var $form = document.querySelector('#form');
var formInputs = {};

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

  formInputs = {
    title: title,
    url: url,
    notes: notes
  };

  formInputs.nextEntryId = data.nextEntryId++;

  data.entries.unshift(formInputs);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);

  this.localStorage.setItem('data-model', dataJSON);
});
