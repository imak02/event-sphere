const multer = require("multer");
const fs = require("fs");

const eventDestinationFolder = "uploads/event";
const profileDestinationFolder = "uploads/user";

const profileMulterStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(profileDestinationFolder)) {
      fs.mkdirSync(profileDestinationFolder, { recursive: true });
    }
    cb(null, profileDestinationFolder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.mimetype.split("/")[1];
    cb(null, "profileImg" + "-" + uniqueSuffix + "." + ext);
  },
});

const eventMulterStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(eventDestinationFolder)) {
      fs.mkdirSync(eventDestinationFolder, { recursive: true });
    }
    cb(null, eventDestinationFolder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.mimetype.split("/")[1];
    cb(null, "eventImg" + "-" + uniqueSuffix + "." + ext);
  },
});

const multerFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed."), false);
  }
};

module.exports = { profileMulterStorage, eventMulterStorage, multerFilter };
