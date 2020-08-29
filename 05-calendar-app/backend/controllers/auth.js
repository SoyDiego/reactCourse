const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const crearUsuario = async (req, res = response) => {
	const { email, password } = req.body;
	try {
		//Validamos que el correo del usuario a registrar, no exista.
		let usuario = await Usuario.findOne({ email });
		if (usuario) {
			return res.status(400).json({
				ok: false,
				msg: "Un usuario ya existe con ese correo",
			});
		}

		// Si no existe, reamos una instancia de nuestro SCHEMA con la información y la guardamos.
		usuario = new Usuario(req.body);

		//Encriptar password
		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Por favor hable con el Administrador",
		});
	}
};

const loginUsuario = (req, res = response) => {
	const { email, password } = req.body;

	res.json({
		ok: true,
		msg: "login",
		email,
		password,
	});
};

const revalidarToken = (req, res = response) => {
	res.json({
		ok: true,
		msg: "renew",
	});
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
