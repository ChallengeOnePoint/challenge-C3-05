angular.module('app').controller('BoardController', function ($scope, $state, $rootScope) {
$scope.posts = [];
    $scope.new = {};
	function getPosts() {
    $.get({
        url: '/postits',
        success: function (res) {
            $scope.posts = JSON.parse(res);
	    console.log($scope.posts);
            $scope.$apply;
        }
    });
}
getPosts();
	$rootScope.socket.on('update_board', function (data) {
console.log("B");
console.log(data);
$scope.posts = data;
});
   
   $scope.create = function () {
	console.log($scope.new);
	$rootScope.socket.emit('new_post', $scope.new);
	$scope.new = {};
	$rootScope.open = false;
	}

    $scope.update = function (index){ };
    

    $scope.remove = function (index) {

    }
})
