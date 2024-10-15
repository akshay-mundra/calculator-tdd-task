const express = require('express');
const router = express.Router();

const operations = require('../controllers/operations.controller.js')


router.post('/operations', operations.calculate);




module.exports = router;