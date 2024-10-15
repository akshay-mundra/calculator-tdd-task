const express = require('express');
const router = express.Router();

const operations = require('../controllers/operations.controller.js')


router.post('/operations', operations.createOperation); // perform operations

router.get('/operations', operations.getOperations); // show past operations

// recommended by Aakash sir to put reset as /operations/reset as there are two delete methods with the same route
router.delete('/operations/reset', operations.removeOperations); // delete all operations

router.delete('/operations/:id', operations.removeOperation); // delete single operations


module.exports = router;