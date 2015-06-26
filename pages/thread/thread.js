angular.module('rtfmApp')
.controller('threadPageController', function($scope, $location, $routeParams, threadService, userService){
    var threadId = parseInt($routeParams.threadId);

    $scope.newComment = '';
    var thread = threadService.getThread(threadId)

    thread.$bindTo($scope, 'thread') // creates $scope.thread with 3-way binding

    $scope.addComment= function(fb){
        if(!$scope.newComment){
            return false; //Don't do anything if the text box is empty
        }

        var currentUser = userService.getLoggedInUser();

        var newComment = {
            text: $scope.newComment,
            username: currentUser.name
        };
console.log('here')
console.log(fb)
console.log('here2')
        $scope.threads.comments.push(newComment);

        $scope.newComment = ''; //Clear the input box
    }


});
