const express = require("express");
const app = express();

//set EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(require("./routes/products"));




app.listen(5500, () => console.log("Servidor en puerto 5500"));