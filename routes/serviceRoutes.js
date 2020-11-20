const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');

router.get('/confirmation/:id', serviceController.confimationById);
router.get('/validation/resend/:id',serviceController.emailResend);

module.exports = router;