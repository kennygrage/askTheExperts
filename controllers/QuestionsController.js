questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, $stateParams, UsersFactory, UtilitiesFactory) {
  $scope.user = UtilitiesFactory.findById(UsersFactory.users, $stateParams.userId);
  $scope.addQuestion = function() {
    $scope.user.questions.push({ name: $scope.questionName });
    $scope.questionName = null;
  }
});