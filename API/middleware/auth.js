const jwt = require("jsonwebtoken");

const checkTokenMedecin = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_MED);
        if (token && decodedToken.result.role==="medecin" ) {
          next();
          
          
        } else {
            return res.status(401).json({
                success:0,
                errorMessage:'Non autorisé'
            })
        }
      } catch {
        res.status(401).json({
            errorMessage:'Non autorisé'
        });
      }
}

const checkTokenSecretaire = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_SECRETAIRE);
        if (token && decodedToken.result.role==="secretaire" ) {
          next();
          
          
        } else {
            return res.status(401).json({
                success:0,
                errorMessage:'Non autorisé'
            })
        }
      } catch {
        res.status(401).json({
            errorMessage:'Non autorisé'
        });
      }
}

module.exports = {
    checkTokenMedecin,
    checkTokenSecretaire
}