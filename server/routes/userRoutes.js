const express = require('express');
const multer = require('multer');
const router = express.Router();

const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } 
    else {
      cb(null, false);
    }
  };

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     }
  });

router.post("/users", userController.addUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.put("/users/:id/picture", upload.single('profile_picture'), userController.updateProfilePicture);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;