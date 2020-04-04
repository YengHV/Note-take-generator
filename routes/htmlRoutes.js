// Give node package to have a path
var path = require("path");
// Exports function with access to express
module.exports = function(app) {
// receive request through the server
// send a directory to "../public/notes.html"
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
// receive  request and send a directory to "../public/notes.html"
    app.get("*", function(req, res) { res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
  };
  