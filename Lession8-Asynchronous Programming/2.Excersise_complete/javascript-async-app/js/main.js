(function() {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    // 1. Get 10 user
    $.get('https://jsonplaceholder.typicode.com/users', function(users) {
  		// if we are here, which means the data is retrieved from the API
  		console.log(users);
	});
	// 2. get posts
	/*$.get('https://jsonplaceholder.typicode.com/posts?userId=2', function(users) {
  		// if we are here, which means the data is retrieved from the API
  		console.log(users);
	});*/
  // 3 Get comment from blog
  /*$.get('https://jsonplaceholder.typicode.com/comments?postId=1', function(users) {
      // if we are here, which means the data is retrieved from the API
      console.log(users);
      for (var i = 0; i < users.length; i++) {
        console.log(`This is comment number ${i} :`+ users[i]["body"]);
      }
  });*/



  }
})();
