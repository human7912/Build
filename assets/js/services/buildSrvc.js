
angular.module('buildApp', []).service('buildSrvc', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/byApp').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
