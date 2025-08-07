const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

//USUARIOS
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

//LIBROS
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

//PRÉSTAMOS
let prestamos = [];
let nextPrestamoId = 1;

app.get('/prestamos', (req, res) => {
  res.json(prestamos);
});

app.get('/prestamos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const prestamo = prestamos.find(p => p.id === id);
  if (!prestamo) return res.status(404).json({ error: 'Préstamo no encontrado' });
  res.json(prestamo);
});

app.post('/prestamos', (req, res) => {
  const { id_usuario, id_libro, fecha_prestamo, fecha_devolucion } = req.body;
  if (!id_usuario || !id_libro || !fecha_prestamo) {
    return res.status(400).json({ error: 'Faltan datos obligatorios (usuario, libro o fecha_prestamo)' });
  }
  const nuevo = {
    id: nextPrestamoId++,
    id_usuario,
    id_libro,
    fecha_prestamo,
    fecha_devolucion: fecha_devolucion || null
  };
  prestamos.push(nuevo);
  res.status(201).json(nuevo);
});

app.put('/prestamos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const prestamo = prestamos.find(p => p.id === id);
  if (!prestamo) return res.status(404).json({ error: 'Préstamo no encontrado' });

  const { id_usuario, id_libro, fecha_prestamo, fecha_devolucion } = req.body;
  if (id_usuario !== undefined) prestamo.id_usuario = id_usuario;
  if (id_libro !== undefined) prestamo.id_libro = id_libro;
  if (fecha_prestamo !== undefined) prestamo.fecha_prestamo = fecha_prestamo;
  if (fecha_devolucion !== undefined) prestamo.fecha_devolucion = fecha_devolucion;

  res.json(prestamo);
});

app.delete('/prestamos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = prestamos.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Préstamo no encontrado' });
  prestamos.splice(idx, 1);
  res.status(204).send();
});

//RESEÑAS
let resenias = [];
let nextReseniaId = 1;

app.get('/resenias', (req, res) => {
  res.json(resenias);
});

app.get('/resenias/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const resenia = resenias.find(r => r.id === id);
  if (!resenia) return res.status(404).json({ error: 'Reseña no encontrada' });
  res.json(resenia);
});

app.get('/resenias/libro/:id_libro', (req, res) => {
  const id_libro = parseInt(req.params.id_libro, 10);
  const reseniasLibro = resenias.filter(r => r.id_libro === id_libro);
  res.json(reseniasLibro);
});

app.post('/resenias', (req, res) => {
  const { id_libro, id_usuario, contenido, puntuacion } = req.body;
  if (!id_libro || !id_usuario || !contenido) {
    return res.status(400).json({ error: 'Faltan datos obligatorios (libro, usuario o contenido)' });
  }
  const nueva = {
    id: nextReseniaId++,
    id_libro,
    id_usuario,
    contenido,
    puntuacion: puntuacion || null
  };
  res.status(201).json(nueva);
  resenias.push(nueva);
});

app.put('/resenias/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const resenia = resenias.find(r => r.id === id);
  if (!resenia) return res.status(404).json({ error: 'Reseña no encontrada' });

  const { contenido, puntuacion } = req.body;
  if (contenido !== undefined) resenia.contenido = contenido;
  if (puntuacion !== undefined) resenia.puntuacion = puntuacion;

  res.json(resenia);
});

app.delete('/resenias/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = resenias.findIndex(r => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Reseña no encontrada' });
  resenias.splice(idx, 1);
  res.status(204).send();
});

//LÓGICAS

// Libros disponibles (existencia > 0)
app.get('/libros/disponibles', (req, res) => {
  const disponibles = libros.filter(libro => libro.existencia > 0);
  res.json(disponibles);
});

// Préstamos por usuario
app.get('/prestamos/usuario/:id_usuario', (req, res) => {
  const id_usuario = parseInt(req.params.id_usuario, 10);
  const prestamosUsuario = prestamos.filter(p => p.id_usuario === id_usuario);
  res.json(prestamosUsuario);
});

// Préstamos por libro
app.get('/prestamos/libro/:id_libro', (req, res) => {
  const id_libro = parseInt(req.params.id_libro, 10);
  const prestamosLibro = prestamos.filter(p => p.id_libro === id_libro);
  res.json(prestamosLibro);
});

