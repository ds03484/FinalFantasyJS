/**
 * Created by ds034_000 on 11/16/2015.
 */

app.factory('characters', ['$http', function($http){
    return $http.get('/FinalFantasyJS/FinalFantasy.json').success(function(data){
        return data;
    })
        .error(function(data){
            return data;
        });
}]);