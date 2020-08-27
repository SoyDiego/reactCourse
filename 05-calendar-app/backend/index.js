const express = require("express");
require("dotenv").config();

//Creamos el servidor de express.
const app = express();

// Directorio Público.
app.use(express.static("public"));

//Rutas
app.use('/api/auth', require('./routes/auth'))
// CRUD: Eventos

//Escuchar peticiones.
app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en Puerto ${process.env.PORT}`);
});
