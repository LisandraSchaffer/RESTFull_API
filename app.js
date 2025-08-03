const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Almacenamiento en memoria
let usuarios = [];
let nextUsuarioId = 1;

/* === USUARIOS === */

// GET /usuarios
app.get('/usuarios', function (req, res) {
  res.json(usuarios);
});

// GET /usuarios/:id
app.get('/usuarios/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find(function (u) { return u.id === id; });
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(usuario);
});

// POST /usuarios
app.post('/usuarios', function (req, res) {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan nombre o email' });
  const nuevo = { id: nextUsuarioId++, nombre: nombre, email: email };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /usuarios/:id
app.put('/usuarios/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find(function (u) { return u.id === id; });
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  const { nombre, email } = req.body;
  if (nombre !== undefined) usuario.nombre = nombre;
  if (email !== undefined) usuario.email = email;
  res.json(usuario);
});

// DELETE /usuarios/:id
app.delete('/usuarios/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  const idx = usuarios.findIndex(function (u) { return u.id === id; });
  if (idx === -1) return res.status(404).json({ error: 'Usuario no encontrado' });
  usuarios.splice(idx, 1);
  res.status(204).send();
});

/* === RUTA DE PRUEBA === */
app.get('/', function (req, res) {
  res.send('API funcionando');
});

app.listen(PORT, function () {
  console.log('Servidor escuchando en http://localhost:' + PORT);
});
