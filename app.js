var questionList = angular.module('QuestionList', ['ui.router']);

questionList.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('users', {
    url: "/users",
    templateUrl: "partials/users.html",
    controller: 'UsersCtrl'
  });

  $stateProvider.state('users.questions', {
    url: "/:questionId",
    templateUrl: "partials/users.questions.html",
    controller: 'QuestionsCtrl'
  });
});