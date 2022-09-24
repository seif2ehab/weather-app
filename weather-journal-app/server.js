let projectData;

// Required setup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static('website'));

// Setup the port server
const port = 3000;
const server = app.listen(3000, createServer);

function createServer() {
  console.log("SERVER IS RUNING AT PORT : " + port + ".");

}
// setup post and get

app.post('/send', function(req, res) {
  res.send(projectData);

})

app.get('/receive', function(req, res) {
  res.send(projectData);
})

