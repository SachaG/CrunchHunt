Meteor.startup(function () {

  Template[getTemplate('customPostShares')].helpers({

    sharesClass: function () {
      var s = this.shares;
      // var array = [300, 500, 1000, 2000, 4000]
      if (s < 300) {
        return 'shares-1';
      } else if (s < 500) {
        return 'shares-2';
      } else if (s < 1000) {
        return 'shares-3';
      } else if (s < 2000) {
        return 'shares-4';
      } else if (s < 4000) {
        return 'shares-5';
      } else if (s < 8000) {
        return 'shares-6';
      } else {
        return 'shares-7';
      }
    }
  });

  Template[getTemplate('customPostAvatars')].helpers({
    firstFourCommenters: function () {
      // limit to 4 commenters in case there's more
      return _.first(this.commenters, 4);
    }
  });

  Template[getTemplate('tagline')].helpers({
    isHome: function () {
      return Router.current().location.get().path == '/';
    }
  });

});
