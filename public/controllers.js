angular.module('app').controller('BoardController', function ($scope, $state, $rootScope) {
    $scope.posts = [];
    $scope.open = false;
    $.get({
        url: '/postits',
        success: function (res) {
            $scope.posts = res;
	    console.log($scope.posts);
            $scope.$apply;
        }
    })
    $rootScope.socket.on('update_board', function (data) {
	$scope.posts = data;
	});

    $scope.create = function () {
	}

    $scope.update = function (index){ };
    

    $scope.remove = function (index) {

    }
})
