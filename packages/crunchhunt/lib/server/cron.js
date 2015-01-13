SyncedCron.options = {
  log: false,
  collectionName: 'cronHistory',
  utc: false, 
  collectionTTL: 172800
}

var addJob = function () {
  SyncedCron.add({
    name: 'Get article shares',
    schedule: function(parser) {
      return parser.text('every 10 minutes');
    }, 
    job: function() {
      getLast3DaysPostsShares();
    }
  });
}

Meteor.startup(function () {
  addJob();
});
