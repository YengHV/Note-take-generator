// var fs = require("fs");
// require the db.json file
const data = require("../db/db.json");

console.log(data);

module.exports = function(app) {
 
  
    app.get("/api/notes", function(req, res) {
      res.json("/   ");
    });
  
   
  
    app.post("/api/notes", function(req, res) {
      // ????.push(req.body);

      
    
      res.json({ message: "You've created a new note!" });
  
      
    });
  };
  