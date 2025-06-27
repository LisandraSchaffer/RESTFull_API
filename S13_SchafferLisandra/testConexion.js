console.log(' Iniciando prueba de conexión...');

const db = require('./db');

db.query('SELECT 1 + 1 AS resultado', (err, results) => {
  if (err) {
    console.error('Error al hacer la consulta:', err);
  } else {
    console.log('Resultado de la prueba:', results[0].resultado);
  }

  db.end();
});
