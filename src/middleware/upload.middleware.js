import multer from "multer";

////const storage = multer.diskStorage({
// destination: (req, file, cb) => cb(null, "/uploads"),
//filename: (req, file, cb) => cb(null, file.originalname),
//});
const fileFilter = (req, file, cb) => {
  if (file.mimeType.startsWith("image/")) {
    cb(null, true);
  } else {
    cb("Only Image is Allowed", false);
  }
};
const storage = multer.memoryStorage();
export const upload = multer({
  storage: storage,
  limits: { fieldSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter,
});
