/*
    Event Routes
    /api/events

*/

const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
} = require("../controllers/events");
const {isDate} = require("../helpers/isDate");

//Todas tienen que pasar por la validación del TOKEN, al hacer esto no hace falta repetir en las rutas esto. SE APLICA A TODAS.
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//Crear nuevo evento
router.post(
	"/",
	[
		check("title", "El titulo es obligatorio").not().isEmpty(),
		check("start", "Fecha de inicio es obligatoria").custom(isDate),
		check("end", "Fecha de finalización es obligatoria").custom(isDate),
		validarCampos,
	],
	crearEvento
);

//Actualizar eventos
router.put("/:id", actualizarEvento);

//Borrar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
