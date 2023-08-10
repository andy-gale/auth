const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook,com",
    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASS,
    },
});

//test transporter
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
});

const sendEmail = async (mailtOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        return;
    } catch (error) {
        throw error;
    }
};

module.exports = sendEmail;