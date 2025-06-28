const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const login = require("./src/routes/loginrouters")
const teacher = require("./src/routes/teacher.routes")

//const allowedOrigins = ['http://localhost:5173', 'http://localhost:5175'];
const allowedOrigins = [
  "https://proyecto-languajes-vercel-sheysonn44s-projects.vercel.app","https://localhost:5173" // tu frontend en Vercel
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};
app.options("*", cors(corsOptions)); // Responde a preflight

app.use(cors(corsOptions));
// Ruta base para utilizar el servicio
app.get("/api", function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('SERVIDOR SISTEMA');
});

app.use("/api/login", login);
app.use("/api/teacher", teacher);

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
