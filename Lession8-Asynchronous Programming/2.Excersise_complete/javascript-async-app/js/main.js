(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function getData(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data) {
        resolve(data);
      });
    });
  }

  function getPostById(id) {
    return getData(POST_API + '?userId=' + id);
  }

  function getCommentByPostId(postId) {
    return getData(COMMENT_API + '?postId=' + postId);
  }

  const USER_API = 'https://jsonplaceholder.typicode.com/users';
  const POST_API = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENT_API = 'https://jsonplaceholder.typicode.com/comments';

  function DemoController($scope) {
    let myUsers;

    // [user1, user2 ,... user10]
    // [id1, .... id10] => map getPostById
    // [P(id1), .... P(id10)] => P => P.then(a); [P, ..].map(then)
    // Promise.all([P(id1), ...P(id10)]).then([id1, ...id10])
    // [ [post1, post2], ... [post10, post11] ]
    // [ [P(post1), P(post2)...]... [P(post10), P(post11)] ]
    // [ P(c1), ... P(c10) ]
    // [ [], [], [] ]

    getData(USER_API)
      .then(function (users) {
        myUsers = users;
        return Promise.all(users.map(user => user.id).map(getPostById)); // [1, 2, 3, 4, ... 10] => [P(1), ...P(10)]
      })
      .then(posts => {
        return posts.map((post, index) => {
          myUsers[index].posts = posts;
          return post.map(post => getCommentByPostId(post.id));
        });
      })
      .then(arrayOfComments => arrayOfComments.map(a => Promise.all(a)))
      .then(arr => Promise.all(arr))
      .then(comments => {
        comments.forEach((comment, index1) => {
          comment.forEach((c, index2) => {
            myUsers[index1].posts[index2].comments = c;
          });
        });

        $scope.$apply(function () {
          $scope.users = myUsers;
        });
      });
  }
})();

