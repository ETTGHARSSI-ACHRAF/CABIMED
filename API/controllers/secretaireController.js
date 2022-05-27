const Secretaire = require("../models/secretaireModel");
const generator = require("generate-password");
const bcrypt = require("bcrypt");
const Mail = require('../mail/sendMail');
const jsonwebtoken = require("jsonwebtoken");


const createSecretaire = async (req, res) => {
    try {
        const { nom, prenom, email, salaire, tele } = req.body;
        if (!nom || !prenom || !email || !salaire || !tele) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            const password = generator.generate({
                length: 10,
                numbers: true,
            });
            const secretaire = new Secretaire({
                nom_secretaire: nom,
                prenom_secretaire: prenom,
                email_secretaire: email,
                password_secretaire: bcrypt.hashSync(password, 10),
                salaire_secretaire: salaire,
                tele_secretaire: tele,
            });
            const newSecretaire = await secretaire.save();
            await Mail(email, nom, prenom, password);
            return res.status(200).json({
                success: 1,
                newSecretaire
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getSecretaireId = async (req, res) => {
    try {
        const secretaire = await Secretaire.find({ _id: req.params.id });
        return res.status(200).json({
            success: 1,
            secretaire
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }

}


const getAllSecretaire = async (req, res) => {
    try {
        const secretaire = await Secretaire.find();
        return res.status(200).json({
            success: 1,
            secretaire
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }

}


const ChekPassword = async (email, password) => {
    const secretaire = await Secretaire.find({ email_secretaire: email });
    if (secretaire.length !== 0) {
        const comparePassword = bcrypt.compareSync(password, secretaire[0].password_secretaire)
        return comparePassword
    } else {
        return false
    }


}



const updateSecretaire = async (req, res) => {
    try {
        var newDAtaSecretaire = {};
        const { nom, prenom, email, tele, salaire, password_anc, password } = req.body;
        if (!nom || !prenom || !email || !tele || !salaire) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            if (password) {
                const chekPassword = await ChekPassword(email, password_anc)

                if (chekPassword) {

                    newDAtaSecretaire = {
                        nom_secretaire: nom,
                        prenom_secretaire: prenom,
                        email_secretaire: email,
                        tele_secretaire: tele,
                        salaire_secretaire: salaire,
                        password_secretaire: bcrypt.hashSync(password, 10),
                    }
                    const secretaire = await Secretaire.updateOne({ _id: req.params.id }, newDAtaSecretaire);

                    return res.status(200).json({
                        success: 1,
                        secretaire
                    });

                } {
                    return res.status(400).json({
                        success: 0,
                        message: 'password incorecte'
                    })

                }
            } else {
                newDAtaSecretaire = {
                    nom_secretaire: nom,
                    prenom_secretaire: prenom,
                    email_secretaire: email,
                    tele_secretaire: tele,
                    salaire_secretaire: salaire,
                }
                const secretaire = await Secretaire.updateOne({ _id: req.params.id }, newDAtaSecretaire);
                return res.status(200).json({
                    success: 1,
                    secretaire
                });

            }
        }

    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}


const deleteSecretaire = async (req, res) => {
    try {
        const secretaire = await Secretaire.remove({ _id: req.params.id })
        return res.status(200).json({
            success: 1,
            secretaire
        });
    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}


const loginSecretaire = async (req, res) => {
    try {
        if(!req.body.email || !req.body.password ){
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        }else{
            const secretaire = await Secretaire.find({ email_secretaire : req.body.email });
        if (secretaire.length !== 0) {
            const comparePassword = bcrypt.compareSync(
                req.body.password,
                secretaire[0].password_secretaire
            );
            if (comparePassword) {
                secretaire[0].password_secretaire = undefined;
                const token = jsonwebtoken.sign(
                    { result: secretaire[0] },
                    process.env.SECRET_KEY_SECRETAIRE,
                    {
                        expiresIn: "24h",
                    }
                );
                res.status(200).json({
                    success: 1,
                    token: token,
                });
            } else {
                res.status(200).json({
                    success: 0,
                    message: "passwor or email incorrect1",
                });
            }
        } else {
            res.status(401).json({
                success: 0,
                message: "passwor or email incorrect2",
            });
        }
        }
    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = {
    createSecretaire,
    updateSecretaire,
    getSecretaireId,
    getAllSecretaire,
    deleteSecretaire,
    loginSecretaire
}