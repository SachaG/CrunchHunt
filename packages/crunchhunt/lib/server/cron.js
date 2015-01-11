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
      return parser.text('every 1 minutes');
    }, 
    job: function() {
      getShares();
    }
  });
}

Meteor.startup(function () {
  // addJob();
});
