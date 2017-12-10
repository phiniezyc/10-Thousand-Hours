const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");



const app = express();

const PORT = process.env.PORT || 3000;

// const db = require("/.models");


app.use(express.static("public")); //remember to start path starting from public folder level

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


//Need to sync sequelize here:
app.listen(PORT, function (){
    console.log(`APP LISTENING ON PORT ${PORT}`);
});