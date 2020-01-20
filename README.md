# ExpressNoteTakingApp

# User overview

This app allows users to read stored notes, write and store new notes, and delete previously stored notes as desired. This app is device responsive and deployed on heroku, a cloud-based PaaS, so user notes can be retrieved from any device. This app is perfect for users that work with large amounts of information as it provides a convenient method for logging and retrieving information.

# Technical Overview

## Heroku Deployed App
https://express-note-taking-app.herokuapp.com/notes

This app was deployed using Heroku. Heroku is a PaaS (Platform as a Service); apps are deployed from the cloud. Locally, this app runs on PORT = 4040 (https://localhost:4040). The following code is necessary for deploying a cloud-based app: `const PORT = process.env.PORT || 4040`. Why? if PORT was simpy equal to 4040, it would only run locally but would not run on a PaaS such as Heroku or Amazon AWS. `process.env.PORT || 4040` implies that PORT will run on whatever is in the environment OR 4040 if no other environmental variable PORT exists. Heroku provides an env variable PORT, foe example.  

## Use JSON db to store notes

User input data is stored in a json file. The fs npm (file-system) is required to read stored notes and write new notes. It is also required to delete notes. That said, deleting notes requires an additional variable; id. Id generation is executed via the utilization of a universally unique identifier (uuid) npm. Interestingly, UUIDs are of a fixed size at 128 bits. The uuid npm generates RFC4122 UUIDs. Notes are stored in the db.json file as follows:
  {
    "title": "This is my first live note",
    "text": "This is the first live note",
    "id": "0c599cd3-edc3-47bf-9c1a-2edd17956c79"
  }

## Input Validation Error Handling

The incorporation of an inputValidation function acts as error handling middleware in this program. It prevents users from storing incomplete data. It is called as a paramter in the function for posting a new note. Essentially, it prevents the user from saving null or incomplete data. This is achieved in the launched app by disallowing saving until both title and text fields are not blank. The save icon does not appear until aforementioned requirements are met. 


## Nodemon

Nodemon npm is a tool for node.js app development. It automatically restarts the node application (and in doing so refreshes the server) upon detecting file changes in the directory. To start nodemon, navigate to the terminal and type "npm start". Nodemon must also be called in the package.json file as follows:

"scripts": {
    "start": "nodemon server.js"
  }, 

This method is exceedingly more efficient than manually restarting the server after each file modification throughout the development process.  

## npm dependencies
- nodemon https://www.npmjs.com/package/nodemon
- express https://www.npmjs.com/package/express
- body-parser https://www.npmjs.com/package/body-parser
- fs https://www.npmjs.com/package/fs
- uuid https://www.npmjs.com/package/uuid
- path https://www.npmjs.com/package/path
- fontawesome https://www.npmjs.com/package/fontawesome