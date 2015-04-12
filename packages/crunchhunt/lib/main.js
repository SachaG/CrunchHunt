// remove views menu
primaryNav = _.reject(primaryNav, function (item){
  return item.template == "viewsMenu";
});

// remove post button
secondaryNav = _.reject(secondaryNav, function (item){
  return item.template == "submitButton";
});

// remove upvote post module
postModules = _.reject(postModules, function (item){
  return item.template == "postUpvote";
});

// add postShares post module
postModules.push({
  template: 'customPostShares',
  order: 1
});

// remove post author
postMeta = _.reject(postMeta, function (item){
  return item.template == "postAuthor";
});

// custom templates overrides
templates["postInfo"] = "customPostInfo";
templates["postAvatars"] = "customPostAvatars";

// custom "shares" property
var sharesProperty = {
  propertyName: 'shares',
  propertySchema: {
    type: Number,                      // property type
    label: 'shares',                   // key string used for internationalization
    optional: true,                    // make this property optional
    autoform: {
      editable: false,                 // make this property editable by users
      omit: true                       // set to true to omit field from form entirely
    }
  }
}
addToPostSchema.push(sharesProperty);

// override single day view to rank by shares instead of score
viewParameters.singleday = function (terms) {
  return {
    find: {
      postedAt: {
        $gte: terms.after, 
        $lt: terms.before
      }
    },
    options: {
      sort: {shares: -1}
    }
  };
}