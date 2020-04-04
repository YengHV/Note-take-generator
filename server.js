// require express packages
var express = require("express");
// varible to call express
var app = express();
// acess to port server
var PORT = process.env.PORT || 8080;
// uses express and formats the objects to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// not really sure what this does, but I assume it gave me access to styling.
app.use(express.static("public"));
// Access to apiRoutes using express
require("./routes/apiRoutes")(app);
// Access to htmlRoutes using express
require("./routes/htmlRoutes")(app);
// Listing on port server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    
});