/*---- Service ----*/

myApp.service('GithubAPI', function($http) {
  var sv = this;

  // function to get GitHub profile
  sv.githubProfile = function(){
    console.log('in getProfile function');
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
    console.log('in githubRepos function');
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
