/*---- Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);
var vm = this;

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController as pc'
  }).when('/repos', {
    templateUrl: 'views/repos.html',
    controller: 'ReposController as rc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});

myApp.controller('ProfileController', function(GithubAPI) {
  console.log('in getProfile');
  vm.profile = [];
  vm.getProfile = function() {
    GithubAPI.githubProfile().then(function(data) {
      console.log('Profile data', data);
      vm.profile = data;
    });
  };
  vm.getProfile();
}); // end getProfile function

myApp.controller('ReposController', function(GithubAPI) {
  var vm = this;
  vm.repos = [];
  vm.getRepos = function() {
    GithubAPI.githubRepos().then(function(data) {
      console.log('Repo data', data);
      vm.repos = data;
    });
  };
  vm.getRepos();
});
