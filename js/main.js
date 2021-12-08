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
