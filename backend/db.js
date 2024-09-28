const mongoose = require('mongoose');

async function connect(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000 // Aumenta el tiempo de espera a 10 segundos
    });
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Salir del proceso en caso de error de conexión
  }
}

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = connect;
