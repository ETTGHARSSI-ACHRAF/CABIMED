const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      let logo =Date.now() + "--" + file.originalname;
      cb(null, logo);
      req.logo = logo;
    }
  })

const multerFilter = (req, file, cb) => {
    if ((file.mimetype).includes('image/jpg') || (file.mimetype).includes('image/jpeg') || (file.mimetype).includes('image/png')) {
        cb(null, true);
    } else {
        cb(new Error("Not a image File!!"), false);
    }
  };

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

module.exports = upload.single('logo');