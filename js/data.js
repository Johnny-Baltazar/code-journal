/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('formData');

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);

  this.localStorage.setItem('data-object', dataJSON);
});

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
