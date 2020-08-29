const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Creamos el servidor de express.
const app = express();

//Base de datos
dbConnection();

// Directorio Público.
app.use(express.static("public"));

//Lectura y parseo del body

app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
// CRUD: Eventos

//Escuchar peticiones.
app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en Puerto ${process.env.PORT}`);
});
