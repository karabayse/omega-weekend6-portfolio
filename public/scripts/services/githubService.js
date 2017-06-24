/*---- Service ----*/

myApp.service('GithubAPI', function($http) {
  var sv = this;

  // GitHub personal access token and username
  var oauthToken = 'fa0e6e6aab5c00bc413d36940c88d4e3e33957ea';
  var username = 'karabayse';

  // function to get GitHub profile
  sv.githubProfile = function(){
    console.log('in getProfile');
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }).then(function(response){
      console.log('back from server with response:', response.data);
      return response.data;
    }); // end $http
  }; // end getProfile function

  // function to get list of repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }).then(function(response) {
      console.log('server side repo data', response.data);
      return response.data;
    });
  };

}); // end service
