questionList.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory, QuestionsCtrl){
  $scope.user = UtilitiesFactory.findById(UsersFactory.users, $stateParams.userId);
}