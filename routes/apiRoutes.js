// require the db.json file
const data = require("../db/db.json");


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
      res.json(data);
    });

    app.post("/api/notes", function(req, res) {
      data.push(req.body);

      res.json({ message: "You've created a new note!" });
  
      
    });
  };
  