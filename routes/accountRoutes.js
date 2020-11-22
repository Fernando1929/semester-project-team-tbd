const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.post("/signup", accountController.signup);
router.post("/login", accountController.login);
router.get("/account/:id", accountController.getAccountById);
router.put("/account/:id", accountController.updateAccount);
router.put("/account/email/:id", accountController.updateEmail);
router.put("/account/:id/validate", accountController.validateAccount);
router.delete("/account/:id", accountController.deleteAccount);

module.exports = router;