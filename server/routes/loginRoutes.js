const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/loginController");
const multer = require("multer");




router.get("/", (req, res) => {
    res.send("<h1>Landing Page </h1>");
});

router.post("/login", loginControllers.loginUser);
router.post("/register", loginControllers.registerUser);
router.post("/youtube-summary", loginControllers.youtubeSummary);
router.get("/dashboard", (req, res) => {
    res.send("<h1>Dashboard</h1>");
});

// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ 
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         const allowedTypes = [
//             'application/pdf',
//             'application/vnd.ms-powerpoint',
//             'application/vnd.openxmlformats-officedocument.presentationml.presentation'
//         ];
        
//         if (allowedTypes.includes(file.mimetype)) {
//             cb(null, true);
//         } else {
//             cb(new Error('Invalid file type. Only PDF and PPT files are allowed.'));
//         }
//     }
// });
// router.post("/flashcard", upload.single("file"), loginControllers.flashCard);
// // Add error handling middleware
// router.use((error, req, res, next) => {
//     console.error('Route error:', error);
//     res.status(400).json({ error: error.message });
// });
// // Routes

module.exports = router;
