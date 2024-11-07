const express = require('express');
const app = express();
const tasks = require('./routes/ruta'); // Asegúrate de que la ruta esté correctamente escrita

// Middleware para analizar cuerpos JSON
app.use(express.json());

// Ruta de prueba
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// Usa el router para las rutas /api/v1/tasks
app.use('/api/v1/tasks', tasks);

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
