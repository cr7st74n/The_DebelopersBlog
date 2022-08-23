const express = require('express');
const path = require("path")
const db = require('./config/connection');
// TODO: Add a comment describing the functionality of the code below
//const api_routes = require("./routes/api_router"); 

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join("web")));

db.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
})
