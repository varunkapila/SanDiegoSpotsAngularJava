
    myApp = angular.module('myApp', []);
//controller
myApp.controller('SpotsCtrl', function($scope, $http){
//gets data from json    
    
    $http.get('SdSpots.json').then(function (response) 
    {

        $scope.spots = response.data.topspots;    
    });
});

