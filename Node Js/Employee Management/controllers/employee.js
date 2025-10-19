// const Employee = require('../models/employee');

// // Get all employees
// exports.getEmployee = async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (err) {
//     res.status(500).json({ message: 'Something went wrong while getting employees.' });
//   }
// };

// // Add a new employee
// exports.addEmployee = async (req, res) => {
//   try {
//     const employee = new Employee(req.body);
//     const saved = await employee.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: 'Could not add employee', error: err.message });
//   }
// };

// // Update an employee
// exports.updateEmployee = async (req, res) => {
//   try {
//     const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });

//     if (!updated) {
//       return res.status(404).json({ message: 'Employee not found.' });

//     }

//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: 'Could not update the employee.', error: err.message });
//   }
// };

// // Delete an employee
// exports.deleteEmployee = async (req, res) => {
//   try {
//     const deleted = await Employee.findByIdAndDelete(req.params.id);

//     if (!deleted) {
//       return res.status(404).json({ message: 'Employee not found.' });
//     }

//     res.json({ message: 'Employee deleted successfully.' });
//   } catch (err) {
//     res.status(500).json({ message: 'Could not delete the employee.', error: err.message });
//   }
// };


const Employee = require('../models/employee');

// Get all employees
exports.getEmployee = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// Get a single employee by ID 
exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  res.json(employee);
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  const saved = await employee.save();
  res.status(201).json(saved);
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!updated) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  res.json(updated);
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  const deleted = await Employee.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  res.json({ message: 'Employee deleted successfully.' });
};
