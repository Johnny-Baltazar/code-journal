/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('data');

window.addEventListener('beforeunload', function (event) {

  var dataJSON = JSON.stringify(data);

  this.localStorage.setItem('data', dataJSON);
});

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
