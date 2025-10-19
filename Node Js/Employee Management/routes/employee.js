const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

router.get('/', employeeController.getEmployee);
router.post('/', employeeController.addEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.get('/:id', employeeController.getEmployeeById);

module.exports = router;