// require the db.json file
const data = require("../db/db.json");
// require file system
const fs = require("fs");
// gives access with path
const path = require('path');
// export file with access to expess
module.exports = function(app) {
// express method to receive requests
// response with JSON data
    app.get("/api/notes", function(req, res) {
      res.json(data);
    });
// express method to post requests
// req.body contains requests object(s)
// req.body will be pushed into data
    app.post("/api/notes", function(req, res) {

      req.body.id = data.length;

      data.push(req.body);
// will write file into directory
// JSON data will then be stringify
// function err with then begin
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {
        // if there is an error, return an error
        if (err) {
          return console.log(err);
        }
        // else console.log success
        console.log("Success!");
      
      });
      // response with "you've created a new note"
      res.json({ message: "You've created a new note!" });
  
      
    });
    // express method to delete when api/notes/:id is called/pinged
    // the function will splice data/ delete
    app.delete("/api/notes/:id", function(req, res) {

      data.splice(req.params.id, 1);
      // for loop to increment ID
      for (var i = 0; i < data.length; i++) {
        data[i].id = i;
        
      }
      // will write file into directory
      // JSON data will then be stringify
      // function err with then begin
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {
          // if there is an error, return an error
        if (err) {
          return console.log(err);
        }
        // else console.log success
        console.log("Success!");
      
      });
      // response with "you've deleted new note"
      res.json({ message: "You've deleted note!"});
      
    })
};