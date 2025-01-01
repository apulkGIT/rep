const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname, "files")));

app.get("/",(req,res) => {
  //res.sendFile(path.join(__dirname,'.',"index.html")); 
  res.send("<H1>Welcome again!What up?</H1>");
});

const PORT = 8080;

app.listen(PORT,() => {
  console.log(`Listen port ${PORT}`);
});

console.log("workking");
