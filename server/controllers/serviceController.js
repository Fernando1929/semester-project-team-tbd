const accountController = require("./accountController");
const emailServices = require("../services/EmailServices");

const confimationById = async (req,res) => {
    try {
        const account_id = req.params.id;                                
        await accountController.validateAccount(account_id,res);
    } catch (err) {
        res.send(err);
    }
}

const emailResend = async (req,res) => {
    try {
        const account_id = req.params.id;                                
        await emailServices.emailVerification(account_id);
        res.status(200).json({
            msg:"Email Sent"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    confimationById,
    emailResend
}