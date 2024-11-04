const express = require('express');
const router = express.Router();

// Example route handler for tasks
router.get('/', (req, res) => {
    res.send('List of tasks');
});

// You can add other task routes here
router.post('/', (req, res) => {
    res.send('Create a new task');
});

module.exports = router;


