var express = require('express');
var handlebars = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8080;
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Serve static content for the app from the "public" directory in the application directory.
// this avoids err: "MIME type ('text/html') is not a supported stylesheet MIME type"
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");