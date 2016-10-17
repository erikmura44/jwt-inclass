angular.module('angularJWT')
.controller('login', function ($scope, $http){
   $scope.create = function(){
      const user = {
         username: $scope.username,
         password: $scope.password
      }
      $http.post('/users/create', user)
         .then(function(result){
            console.log(result)
         })
         .catch(function(err){
            console.error('There was an error', err)
         })
   }
})
