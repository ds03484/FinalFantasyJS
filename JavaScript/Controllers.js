/**
 * Created by ds034_000 on 11/17/2015.
 */

app.controller('HomeController', ['$scope', 'characters', function($scope, characters) {
    characters.success(function(data) {
        $scope.characters = data;
    });
}]);

app.controller('CharController', ['$scope', 'characters', '$routeParams', function($scope, characters, $routeParams){
    characters.success(function(data){
       $scope.character = data[$routeParams.id];
    });
}]);