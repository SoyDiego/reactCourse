/*
    Event Routes
    /api/events

*/

const { Router } = require("express");

const router = Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
} = require("../controllers/events");

//Todas tienen que pasar por la validación del TOKEN, al hacer esto no hace falta repetir en las rutas esto. SE APLICA A TODAS.
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//Crear nuevo evento
router.post("/", crearEvento);

//Actualizar eventos
router.put("/:id", actualizarEvento);

//Borrar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
