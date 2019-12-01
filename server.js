var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});