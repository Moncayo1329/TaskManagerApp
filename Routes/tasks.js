const express = require('express'); // Correcto, importa express
const router = express.Router(); // Correcto, crea una nueva instancia de router

const { getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks'); // Asegúrate de que el archivo y la ruta al controlador sean correctos

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) // Define una ruta GET para el endpoint raíz ('/')

module.exports = router; // Exporta el router para poder usarlo en otro archivo
