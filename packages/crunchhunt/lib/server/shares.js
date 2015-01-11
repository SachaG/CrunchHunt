// https://www.kimonolabs.com/api/2i8phbko?apikey=4udcxJD3BEQyD25sOZ9QXN0Sb6Q4OMrr&kimpath1=2015&kimpath2=01&kimpath3=09&kimpath4=pew-facebook-user-growth-slowed-as-others-gained-but-still-has-most-engaged-users

getShares = function (getAll) {

  var getAll = typeof getAll == 'undefined' ?  false: getAll; // default to getAll = false

  // get all posts, or else just the posts from the last 3 days
  var posts = getAll ? Posts.find() : Posts.find({
    postedAt: {
      $gte: moment().subtract(3, 'days').toDate() 
    }
  });

  console.log('// Getting share counts for '+posts.count()+' posts…')

  // define a function to do the updating and rate-limit it
  var updatePost = function (postId, shares) {
    Posts.update(postId, {$set: {shares: shares}})
  }
  var updatePostLimited = rateLimit(updatePost, 5000); 

  // loop over posts and update their share count
  posts.forEach(function (post) {

    var url = post.url;
    var urlArray = url.split("/");
    var year = urlArray[3];
    var month = urlArray[4];
    var day = urlArray[5];
    var slug = urlArray[6];
    var apiUrl = "https://www.kimonolabs.com/api/2i8phbko?apikey=4udcxJD3BEQyD25sOZ9QXN0Sb6Q4OMrr&kimpath1="+year+"&kimpath2="+month+"&kimpath3="+day+"&kimpath4="+slug
    
    var result = HTTP.get(apiUrl);

    console.log(result.data.url);    
    console.log(result.data.results.collection1[0].shares);

    var shares = parseInt(result.data.results.collection1[0].shares.replace(',',''));

    updatePostLimited(post._id, shares);

  });

}

Meteor.methods({
  getShares: function () {
    if (isAdmin(Meteor.user()))
      getShares();
  },
  getAllShares: function () {
    if (isAdmin(Meteor.user()))
      getShares(true);
  }
});