const express = require('express');
const router = express.Router();

const operations = require('../controllers/operations.controller.js')


router.post('/operations', operations.calculate); // perform operations

router.get('/operations', operations.showHistory); // show past operations

router.delete('/operations/:id', operations.clearSingleEntry); // delete single operations

router.delete('/operations', operations.deleteAllEntry); // delete all operations


module.exports = router;