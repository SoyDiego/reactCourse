const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

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

		// Si no existe, creamos una instancia de nuestro SCHEMA con la información y la guardamos.
		usuario = new Usuario(req.body);

		//Encriptar password
		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();

		//Generar JWT
		const token = await generarJWT(usuario.id, usuario.name);

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Por favor hable con el Administrador",
		});
	}
};

const loginUsuario = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		//Validamos que el correo del usuario a loguear, exista
		const usuario = await Usuario.findOne({ email });

		if (!usuario) {
			return res.status(400).json({
				ok: false,
				msg: "El usuario no existe con ese email",
			});
		}

		//Confirmamos los passwords
		const validPassword = bcrypt.compareSync(password, usuario.password);

		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: "Password incorrecto",
			});
		}

		//Generar nuestro JWT
		const token = await generarJWT(usuario.id, usuario.name);

		res.json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Por favor hable con el Administrador",
		});
	}
};

const revalidarToken = async (req, res = response) => {
	const { uid, name } = req;

	//Generar un nuevo JWT y retornarlo.
	const token = await generarJWT(uid, name);

	res.json({
		ok: true,
		uid,
		name,
		token,
	});
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
