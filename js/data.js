/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('entries');

window.addEventListener('beforeunload', function (event) {
  var entriesJSON = JSON.stringify(data.entries);

  this.localStorage.setItem('entries', entriesJSON);
});

if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}
