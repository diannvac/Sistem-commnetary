// controllers/user.controller.js
const firebase = require('firebase-admin');
const firebaseConfig = require('../config/firebase.config');

// Inicializar Firebase Admin
firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig),
  databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
});

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Crear usuario en Firebase Authentication
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Iniciar sesión de usuario en Firebase Authentication
    await firebase.auth().signInWithEmailAndPassword(email, password);

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
