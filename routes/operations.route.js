const express = require('express');
const router = express.Router();

const operations = require('../controllers/operations.controller.js')


router.post('/operations', operations.calculate); // perform operations

router.get('/operations', operations.showHistory); // show past operations

// recommended by Aakash sir to put reset as /operations/reset as there are two delete methods with the same route
router.delete('/operations/reset', operations.deleteAllEntry); // delete all operations

router.delete('/operations/:id', operations.clearSingleEntry); // delete single operations


module.exports = router;