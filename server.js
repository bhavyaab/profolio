// Let's build a server!
var express = require('express'),

//PROXY request
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

//proxy
var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  console.log(request);
  console.log(response);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN}
  }))(request, response);
};
app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
