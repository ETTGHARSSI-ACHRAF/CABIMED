const nodemailer = require('nodemailer')
const Mail = async (email, nom, prenom, password) => {
  try {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: process.env.MAIL,
        to: email,
        subject: "CEBIMED",
        text: `Bonjour dr `+nom+` `+prenom+` Bienvenu chez la platforme CABIMED votre mot de passe pour connecter a CABIMED C'est "`+password+`".`
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            return res.status(200).json({
                success: 1,
                message: 'data has sent '
            });
        }


    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = Mail ;