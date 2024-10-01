// routes/tasks.js
const express = require('express');
const router = express.Router();
const { getAllTasks } = require('../controllers/tasks');

// Define la ruta GET para obtener todas las tareas
router.route('/').get(getAllTasks);

module.exports = router;

