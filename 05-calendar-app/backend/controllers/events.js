const { response } = require("express");

const getEventos = async (req, res = response) => {
	res.status(200).json({
		ok: true,
		msg: "getEventos",
	});
};
const crearEvento = async (req, res = response) => {
	//Verificar que tenga el EVENTO
	console.log(req.body);

	res.status(200).json({
		ok: true,
		msg: "crearEvento",
	});
};
const actualizarEvento = async (req, res = response) => {
	res.status(200).json({
		ok: true,
		msg: "actualizarEvento",
	});
};
const eliminarEvento = async (req, res = response) => {
	res.status(200).json({
		ok: true,
		msg: "eliminarEvento",
	});
};

module.exports = {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
};
