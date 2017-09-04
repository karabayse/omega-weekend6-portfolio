/*---- Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as hc'
  }).when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController as pc'
  }).when('/repos', {
    templateUrl: 'views/repos.html',
    controller: 'ReposController as rc'
  }).otherwise({
    redirectTo: 'views/home.html',
  });
  $locationProvider.html5Mode(true);
});

myApp.controller('ProfileController', function(GithubAPI) {
  console.log('in getProfile');
  var vm = this;
  vm.getProfile = function() {
    GithubAPI.githubProfile().then(function(data) {
      console.log('Profile data', data);
      vm.profile = data;
      vm.name = data.name;
      vm.email = data.email;
      vm.bio = data.bio;
      vm.photo = data.avatar_url;
    });
  };
  vm.getProfile();
  console.log(vm.profile);
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
