const express = require('express');
const router = express.Router();
const errors = require('../controllers/errors');

router.use(errors.notFound);

module.exports = router;
