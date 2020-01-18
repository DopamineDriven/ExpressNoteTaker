const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4040;
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


//parses any json body passed in the app
app.use(bodyParser.json());
//takes parameter for extended; extends capability of body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
//placing app.use('path') beneath bodyParser gives all paths body-parser features
app.use('/api', apiRoutes)
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
