const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nodeuser',
  password: 'nodepass123',
  database: 'CLINICA',   
  port: 3306             
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
    return;
  }
  console.log('✅ Conectado a la base de datos CLINICA.');
});

module.exports = connection;