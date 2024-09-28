import express from "express";
import {
  fillJoiningForm,
  getJoiningForms,
} from "../controllers/joiningController.js";
import {
  authenticateToken,
  checkRole,
  checkHRDepartment,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Fill Joining Form (HR Supervisor)
router.post(
  "/fill",
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment,
  upload.single("photo"),
  fillJoiningForm
);

// Get Joining Forms (HR Supervisor)
router.get(
  "/",
  authenticateToken,
  checkRole(["Supervisor"]),
  checkHRDepartment,
  getJoiningForms
);

export default router;
