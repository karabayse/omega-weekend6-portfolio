// require express --> express is a package: a framework for node that
// provides a set of features for web and mobile applications
var express = require('express');

// require path --> we are requiring an html file, so we need this
var path = require('path');

// code for deployment to Heroku
var port = process.env.PORT || 3004;

// searched my notes for this, but do not know what it accomplishes;
// know that it is necessary in order for the 'app.use' and 'app.get',
// etc., but not certain how express functions within node
var app = express();

// we need an app.use for any routes that are required
// allows all files in public folder to be served to a client (browser)
// serves back HTML
app.use(express.static('public'));

// part of express application routing; is intended for matching and
// handling the path to the HTML file
// res.sendFile sends the HTML file to the DOM to be viewed
// path is required above --> path.join take care of unnecessary
// delimiters that my occur if the given paths come from unknown sources
// _dirname is the directory in which the currently executing script
// resides
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// server will listen on port 3004
// if deploying on Heroku, need to change the port so it is not hard coded
app.listen(port, function() {
  console.log('server up and listening');
});
