const router = require("express").Router();
const fs = require("fs");
const obj = require("../Develop/db/db.json");
const uuid = require("uuid/v4");


  router.get("/notes", (request, response, next) => {
    if (!obj) {
    response
      .status(404)
      .send("notes not found")
    }
    else {
      response.json(obj)
      console.log(obj)
    }
  })

  router.post("/notes", inputValidation, (request, response) => {
    const generateId = uuid();  
    const noteData = {
        title: request.body.title,
        text: request.body.text,
        id: generateId};
    fs.readFile("./Develop/db/db.json", "utf8", (error, data) => {
      if (error) throw error;
      const storedNotes = JSON.parse(data);
      storedNotes.push(noteData)
    fs.writeFile("./Develop/db/db.json", JSON.stringify(storedNotes, null, 2), error => {
      if (error) throw error;
      response
        .send(obj)
      console.log(noteData)
    });
    });
  });

  router.delete(`/notes/:id`, (request, response, next) => {
      const generateId = request.params.id;
      fs.readFile("./Develop/db/db.json", "utf8", (error, data) => {
        if (error) throw error;
      const storedNotes = JSON.parse(data);
      const updatedStoredNotes = storedNotes.filter(note => note.id != generateId)
      fs.writeFile("./Develop/db/db.json", JSON.stringify(updatedStoredNotes, null, 2), error => {
        if (error) throw error;
        response.send(obj);
        console.log(`Note Deleted Successfully!`)
        })
      })
  });

  //error handling
  //if text or title are missing in a post call, an error indicates whether one or both are missing
  function inputValidation(request, response, next) {
    const {title, text} = request.body;
    const missingFields = [];
    if (!title) {
      missingFields.push("title")
    }
    if (!text) {
      missingFields.push("text")
    }
    if (missingFields.length) {
      response
        //status 400 for bad request
        .status(400)
        .send(`The following fields are missing: ${missingFields.join(", ")}`)
    }
    else {
      next();
    }
  }
  module.exports = router;