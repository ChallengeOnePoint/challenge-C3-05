angular.module('app').controller('ListController', function ($scope, $state) {
    $scope.images = [];
    $.get({
        url: 'kittenIdentity.json',
        success: function (res) {
            $scope.images = res;
            $scope.$apply;
        }
    })
    
    $scope.remove = function (index) {
        $scope.images.splice(index, 1);
    }
})