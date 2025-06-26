const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const login = require("../src/routes/loginrouters")
const teacher = require("../src/routes/teacher.routes")


app.use(cors());

// Ruta base para utilizar el servicio
app.get("/api", function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SERVIDOR SISTEMA');
});

app.use("/api/login", login);
app.use("/api/teacher", teacher);



module.exports = app;