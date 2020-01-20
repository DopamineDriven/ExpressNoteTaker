//required for correct path to HTML files
const router = require("express").Router();
const path = require("path");


  // HTML GET Requests

  router.get("/notes", function(request, respond) {
    respond.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If matching route not found default to index (home)
  router.get("/*", function(request, respond) {
    respond.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = router;

 