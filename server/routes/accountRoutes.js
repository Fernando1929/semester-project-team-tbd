const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.post("/signup", accountController.signup);
router.get("/login", accountController.login);
router.get("/account/:id", accountController.getAccountById);
router.put("/account/:id", accountController.updateAccount);
router.delete("/account/:id", accountController.deleteAccount);

module.exports = router;