var app = angular.module("RedditClone", []);

app.controller("NavBar", function($scope) {
  // console.log('in nav bar');
  $scope.newPostBool = false;

  var newD = new Date();

  $scope.posts = [{
    title: "Some Title",
    author: "Some Author",
    imageURL: "http://i.imgur.com/TcmVKyPb.jpg",
    description: "Some Description",
    votes: 0,
    date: newD,
    comments: [{
      commentAuthor: "Some Other Comment Author",
      commentText:"some other comments are here"
    }],
    newCommentBool: false
  },
  {
    title: "Some Other Title",
    author: "Some Other Author",
    imageURL: "http://i.imgur.com/KiyCMMTb.jpg",
    description: "Some Other Description",
    votes: 0,
    date: newD,
    comments: [{
      commentAuthor: "Some Other Comment Author",
      commentText:"some other comments are here"
    }],
    newCommentBool: false
  }];

  $scope.showNewPostForm = function() {
    console.log('in');
    $scope.newPostBool = true;
  };

  $scope.postIt = function(newPost) {
    var postDate = new Date();

    $scope.newPostBool = false;
    $scope.posts.push({
      title: newPost.title,
      author: newPost.author,
      imageURL: newPost.imageURL,
      description: newPost.description,
      votes: 0,
      date: postDate,
      comments:[],
      newCommentBool: false
    });
  };

  $scope.sortPostsBy = function(str) {
    if(str === '-value') {
      $scope.sortPostsByWhat = 'value';
    } else {
      $scope.sortPostsByWhat = str;
    }
  };

  $scope.changeVotes = function(bool, post) {
    if(bool === 'down') {
      post.votes -= 1;
    } else {
      post.votes += 1;
    }
  };

  $scope.addNewComment = function(post) {
    post.newCommentBool = true;
  };

  $scope.postNewComment = function(post, newComment) {
    post.newCommentBool = false;
    post.comments.push({commentAuthor: newComment.author, commentText: newComment.text});
  };

});

app.controller("Posts", function($scope) {
  console.log($scope.newPostBool);

});
