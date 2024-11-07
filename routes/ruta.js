const express = require('express');
const router = express.Router();

// Ruta para manejar las solicitudes GET en /api/v1/tasks
router.route('/').get((req, res) => {
    res.send('all items');
});

module.exports = router;


