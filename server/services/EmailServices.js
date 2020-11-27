require("dotenv").config();
const nodemailer = require("nodemailer");
const SMTPTransport = require("nodemailer/lib/smtp-transport");
const db = require("../../db");

const emailVerification = async(req) =>{//needs tweaks
    try {
        let transporter = nodemailer.createTransport(new SMTPTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
            user:`${process.env.EMAIL_SENDER}`,
            pass:`${process.env.EMAIL_SENDER_PASSWORD}`, 
            }
        }));
        //Implement with token
        const account_id = req;
        const search = await db.query("SELECT * From account WHERE account_id = $1",[account_id]);
        const email = search.rows[0]["email"];
        const username = search.rows[0]["username"];

        if(email!==null){
            const mail = {
                from: `${process.env.EMAIL_SENDER}`, // sender address
                to: `${email}`, // list of receivers
                subject: "Synclink: Please Validate Your Account", // Subject line
                text:`Thanks for signing up!
                Your account has been created, you can login with the following credentials after you have activated your account by pressing the url below.
                ------------------------
                Username:${username}.
                ------------------------
                Please click this link to activate your account:${process.env.SERVER_URL+"api/confirmation/"+account_id}`
                //html: ``, // Make pretty email here**
              };
    
            transporter.sendMail(mail, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent:" + info.response);
                }
            });   
        }else{
            console.log('Email Not Found');
        } 
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    emailVerification
}