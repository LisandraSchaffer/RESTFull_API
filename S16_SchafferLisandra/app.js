const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// === USUARIOS ===
let usuarios = [];
let nextUsuarioId = 1;

app.get('/usuarios', (req, res) => res.json(usuarios));
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(usuario);
});
app.post('/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan nombre o email' });
  const nuevo = { id: nextUsuarioId++, nombre, email };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  const { nombre, email } = req.body;
  if (nombre !== undefined) usuario.nombre = nombre;
  if (email !== undefined) usuario.email = email;
  res.json(usuario);
});
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = usuarios.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Usuario no encontrado' });
  usuarios.splice(idx, 1);
  res.status(204).send();
});

// === LIBROS ===
let libros = [];
let nextLibroId = 1;

app.get('/libros', (req, res) => res.json(libros));
app.get('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const libro = libros.find(l => l.id === id);
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(libro);
});
app.post('/libros', (req, res) => {
  const { titulo, autor, existencia = 0 } = req.body;
  if (!titulo || !autor) return res.status(400).json({ error: 'Faltan titulo o autor' });
  const nuevo = { id: nextLibroId++, titulo, autor, existencia };
  libros.push(nuevo);
  res.status(201).json(nuevo);
});
app.put('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const libro = libros.find(l => l.id === id);
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  const { titulo, autor } = req.body;
  if (titulo !== undefined) libro.titulo = titulo;
  if (autor !== undefined) libro.autor = autor;
  res.json(libro);
});
app.put('/libros/:id/existencia', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const libro = libros.find(l => l.id === id);
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  const { existencia } = req.body;
  if (existencia === undefined || typeof existencia !== 'number') {
    return res.status(400).json({ error: 'Se requiere un número para existencia' });
  }
  libro.existencia = existencia;
  res.json(libro);
});
app.delete('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = libros.findIndex(l => l.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Libro no encontrado' });
  libros.splice(idx, 1);
  res.status(204).send();
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:' + PORT);
});
