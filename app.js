// index.js o app.js
const express = require('express');
const app = express();
const tasks = require('./routes/tasks'); // Asegúrate de que esta ruta sea correcta

app.use(express.json());

// Ruta de prueba
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// Rutas para las tareas
app.use('/api/v1/tasks', tasks);


// server 

const port = 1234;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
