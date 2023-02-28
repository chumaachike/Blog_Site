const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

let items = []

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"))

app.get("/", (req, res) => {
  const today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-us", options);
  res.render("List", {  day, items })
});

app.post("/", (req, res)=>{
  const item = req.body.newItem
  if(item){
    items.push(item)
    res.redirect("/");
  }else{
    
  } 
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})