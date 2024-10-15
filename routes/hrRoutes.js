import express from "express";
import {
  authenticateToken,
  checkHRDepartment,
  checkRole,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import {
  deleteTrainingVideo,
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

export default router;