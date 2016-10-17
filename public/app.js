angular.module('angularJWT', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
   $routeProvider
      .when('/', {
         templateUrl: '/login/login.template.html', //not the actual route, helps naming convention, goes to folder, login
         controller: 'login'
      })
      .when('/dashboard', {
         // templateUrl: '/login/login.template.html', //not the actual route, helps naming convention, goes to folder, login
         // controller: 'login'
         template: '<h1>Hey hey hey</h1>'
      })
})
