/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

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
  var formInputs = {
    title: title,
    url: url,
    notes: notes
  };

  formInputs.nextEntryId = data.nextEntryId;
  formInputs.nextEntryId++;

  data.entries.unshift(formInputs);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}
