const express = require("express");
const app = express();
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3000, function(){
  console.log("Listening at http://0.0.0.0:3000")
})

app.get("/", function(req, res){
  res.render("index")
})

app.post("/processFetch", function(req, res){

  console.log("Body parser added name to req.body")
  console.log("req.body.name", req.body.name)

  res.json({
    name: req.body.name
  })
})
