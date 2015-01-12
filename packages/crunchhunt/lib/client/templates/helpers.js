Meteor.startup(function () {

  Template[getTemplate('customPostShares')].helpers({
    oneBasedRank: function(){
      if(typeof this.rank !== 'undefined')
        return this.rank + 1;
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
