// import express from "express";
// import {
//   authenticateToken,
//   checkHRDepartment,
//   checkRole,
// } from "../middleware/authMiddleware.js";
// import upload from "../middleware/uploadMiddleware.js";
// import {
//   createQuestionPaper,
//   deleteQuestionPaper,
//   deleteTrainingVideo,
//   getAllQuestionPapers,
//   getTrainingVideos,
//   uploadTrainingVideo,
// } from "../controllers/hrController.js";

// const router = express.Router();

// //Route for HR Supervisor to upload training video(HR Supervisor only)
// router.post(
//   "/training-video",
//   authenticateToken,
//   checkRole(["Supervisor"]),
//   checkHRDepartment,
//   upload.single("video"),
//   uploadTrainingVideo
// );

// //Route to get training video("Admin","Supervisor","Worker")
// router.get(
//   "/",
//   authenticateToken,
//   checkRole(["Admin", "Supervisor", "Worker"]),
//   getTrainingVideos
// );

// //Delete route to a remove a training video(Supervisor,Admin)
// router.delete(
//   "/training-video/:id",
//   authenticateToken,
//   checkRole(["Supervisor", "Admin"]),
//   deleteTrainingVideo
// );

// // Route to create a question paper(HR Supervisor only)
// router.post(
//   "/question-paper",
//   authenticateToken,
//   checkRole(["Supervisor"]),
//   checkHRDepartment,
//   createQuestionPaper
// );

// // Route to get all question papers(Admin, Supervisor, Worker)
// router.get(
//   "/question-papers",
//   authenticateToken,
//   checkRole(["Admin", "Supervisor", "Worker"]),
//   getAllQuestionPapers
// );

// // Route to delete a question paper by ID(HR Supervisor)
// router.delete(
//   "/question-paper/:id",
//   authenticateToken,
//   checkRole(["Supervisor"]),
//   checkHRDepartment,
//   deleteQuestionPaper
// );

// export default router;

import express from "express";
import {
  authenticateToken,
  checkHRDepartment,
  checkRole,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import {
  assignPaperToEmployee,
  createQuestionPaper,
  deleteQuestionPaper,
  deleteTrainingVideo,
  getAllQuestionPapers,
  getAssignedPapersByEmployeeId,
  getQuestionPaper,
  getTrainingVideos,
  uploadTrainingVideo,
} from "../controllers/hrController.js";

const router = express.Router();

//Route for HR Supervisor to upload training video(HR Supervisor only)
router.post(
  "/training-video",
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment,
  upload.single("video"),
  uploadTrainingVideo
);

//Route to get training video("Admin","Supervisor","Worker")
router.get(
  "/",
  authenticateToken,
  checkRole(["Admin", "Supervisor", "Worker"]),
  getTrainingVideos
);

//Delete route to a remove a training video(Supervisor,Admin)
router.delete(
  "/training-video/:id",
  authenticateToken,
  checkRole(["Supervisor", "Admin"]),
  deleteTrainingVideo
);

// Route to create a question paper with file uploads
// Define the route for creating a question paper
router.post(
  "/create-question-paper",
  upload.fields([
    { name: "questionImg", maxCount: 1 },
    { name: "option1Img", maxCount: 1 },
    { name: "option2Img", maxCount: 1 },
    { name: "option3Img", maxCount: 1 },
    { name: "option4Img", maxCount: 1 },
  ]),
  createQuestionPaper,
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment
);

// Get all question papers
router.get(
  "/get-question-paper",
  getAllQuestionPapers,
  authenticateToken,
  checkRole(["Supervisor", "Admin", "Worker"])
);

// Get question paper by paperId
router.get(
  "/get-question-paper/:paperId",
  getQuestionPaper,
  authenticateToken,
  checkRole(["Supervisor", "Admin", "Worker"])
);

// Delete question paper by paperId
router.delete(
  "/delete-question-paper/:paperId",
  deleteQuestionPaper,
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment
);

// Add route for assigning paper
router.post(
  "/assign-paper",
  assignPaperToEmployee,
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment
);

// Get assigned papers by employeeId
router.get(
  "/assign-paper/:employeeId",
  getAssignedPapersByEmployeeId,
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment
);

export default router;
