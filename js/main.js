/* global data */
/* exported data */
var $input = document.querySelector('.url-input');
var $img = document.querySelector('.image-update');

$input.addEventListener('input', inputUrl);

function inputUrl(event) {
  $img.setAttribute('src', $input.value);
}
