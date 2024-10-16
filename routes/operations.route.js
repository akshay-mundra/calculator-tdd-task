const express = require('express');
const router = express.Router();

const operations = require('../controllers/operations.controller.js')


router.post('/', operations.createOperation); // perform operations

router.get('/', operations.getOperations); // show past operations

// recommended by Aakash sir to put reset as /operations/reset as there are two delete methods with the same route
router.delete('/reset', operations.removeOperations); // delete all operations

router.delete('/:id', operations.removeOperation); // delete single operations


module.exports = router;