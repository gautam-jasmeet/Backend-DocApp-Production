// // // import bcrypt from "bcryptjs";
// // // import jwt from "jsonwebtoken";
// // // import db from "../config/db.js";

// // // // Signup Function
// // // export const signup = async (req, res) => {
// // //   const { name, employeeID, department, designation, password, shift } =
// // //     req.body;

// // //   try {
// // //     // Hash the password
// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     const query =
// // //       "INSERT INTO users (name, employeeID, department, designation, password, shift) VALUES (?, ?, ?, ?, ?, ?)";

// // //     // Execute the database query
// // //     db.query(
// // //       query,
// // //       [name, employeeID, department, designation, hashedPassword, shift],
// // //       (err) => {
// // //         if (err) {
// // //           return res.status(500).json({ error: err.message }); // Internal server error for database issues
// // //         }
// // //         return res.status(201).json({ message: "User created successfully" }); //201 for resource creation
// // //       }
// // //     );
// // //   } catch (err) {
// // //     return res.status(500).json({ error: err.message }); // Internal server Error for other errors
// // //   }
// // // };

// // // // Login Function
// // // export const login = async (req, res) => {
// // //   const { employeeID, password } = req.body;

// // //   try {
// // //     const query = "SELECT * FROM users WHERE employeeID = ?";

// // //     // Execute the database query using a promise
// // //     const result = await new Promise((resolve, reject) => {
// // //       db.query(query, [employeeID], (err, result) => {
// // //         if (err) return reject(err);
// // //         resolve(result);
// // //       });
// // //     });

// // //     if (result.length === 0) {
// // //       return res.status(404).json({ message: "User not found" }); //404 for user not found
// // //     }

// // //     const user = result[0];

// // //     // Compare the passwords
// // //     const isMatch = await bcrypt.compare(password, user.password);

// // //     if (!isMatch) {
// // //       return res.status(401).json({ message: "Invalid credentials" }); //401 for unauthorized access
// // //     }

// // //     // Generate JWT token
// // //     const token = jwt.sign(
// // //       { employeeID: user.employeeID },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: "1h" }
// // //     );

// // //     // Send response with token and user details
// // //     return res.status(200).json({
// // //       token, // JWT token
// // //       employeeID: user.employeeID, // User's employee ID
// // //       name: user.name, // User's name
// // //       department: user.department, // User's department
// // //       designation: user.designation, // User's designation
// // //       shift: user.shift, // User's shift
// // //     });
// // //   } catch (err) {
// // //     return res.status(500).json({ error: err.message }); //Internal server Error for unexpected issues
// // //   }
// // // };

// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import { queryDatabase } from "../config/db.js"; // Import the named export

// // // Signup Function
// // export const signup = async (req, res) => {
// //   const { name, employeeID, department, designation, password, shift } =
// //     req.body;

// //   try {
// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const query =
// //       "INSERT INTO users (name, employeeID, department, designation, password, shift) VALUES (?, ?, ?, ?, ?, ?)";

// //     // Execute the database query using the queryDatabase function
// //     await queryDatabase(query, [
// //       name,
// //       employeeID,
// //       department,
// //       designation,
// //       hashedPassword,
// //       shift,
// //     ]);

// //     return res.status(201).json({ message: "User created successfully" }); // 201 for resource creation
// //   } catch (err) {
// //     return res.status(500).json({ error: err.message }); // Internal server error for other errors
// //   }
// // };

// // // Login Function
// // export const login = async (req, res) => {
// //   const { employeeID, password } = req.body;

// //   try {
// //     const query = "SELECT * FROM users WHERE employeeID = ?";

// //     // Execute the database query using the queryDatabase function
// //     const result = await queryDatabase(query, [employeeID]);

// //     if (result.length === 0) {
// //       return res.status(404).json({ message: "User not found" }); // 404 for user not found
// //     }

// //     const user = result[0];

// //     // Compare the passwords
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid credentials" }); // 401 for unauthorized access
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign(
// //       { employeeID: user.employeeID },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1h" }
// //     );

// //     // Send response with token and user details
// //     return res.status(200).json({
// //       token, // JWT token
// //       employeeID: user.employeeID, // User's employee ID
// //       name: user.name, // User's name
// //       department: user.department, // User's department
// //       designation: user.designation, // User's designation
// //       shift: user.shift, // User's shift
// //     });
// //   } catch (err) {
// //     return res.status(500).json({ error: err.message }); // Internal server error for unexpected issues
// //   }
// // };

// import { queryDatabase } from "../config/db.js"; // Import the new query function

// // Upload Document
// export const uploadDocument = async (req, res) => {
//   const { file } = req;
//   const {
//     fileNo,
//     fileVersion,
//     status = "Pending",
//     category,
//     filename,
//     department,
//   } = req.body;

//   if (!file) {
//     return res.status(422).json({ error: "No file uploaded" }); // Unprocessable Entity
//   }

//   try {
//     // Ensure Admin gets the department from the 'users' table
//     if (req.user.designation === "Admin") {
//       if (!department) {
//         return res
//           .status(400)
//           .json({ error: "Admin must specify a department" }); // Bad Request
//       }

//       // Query to check if the department exists in the 'users' table
//       const checkDepartmentQuery =
//         "SELECT department FROM users WHERE department = ?";
//       const result = await queryDatabase(checkDepartmentQuery, [department]);

//       if (result.length === 0) {
//         return res.status(404).json({ error: "Invalid department selected" }); // Not Found
//       }

//       // If department exists, proceed with uploading the document
//       await insertDocument(
//         req,
//         res,
//         fileNo,
//         fileVersion,
//         status,
//         category,
//         filename,
//         department,
//         file
//       );
//     } else {
//       // For Supervisors and Workers, use their department from login
//       const uploadDepartment = req.user.department;

//       // Proceed with the document upload
//       await insertDocument(
//         req,
//         res,
//         fileNo,
//         fileVersion,
//         status,
//         category,
//         filename,
//         uploadDepartment,
//         file
//       );
//     }
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// // Separate function to handle document insertion
// const insertDocument = async (
//   req,
//   res,
//   fileNo,
//   fileVersion,
//   status,
//   category,
//   filename,
//   department,
//   file
// ) => {
//   const fileUrl = `/uploads/${encodeURIComponent(file.originalname)}`;
//   const queryDoc = `INSERT INTO documents (fileNo, filename, fileVersion, category, status, fileUrl, department, designation, shift)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   try {
//     await queryDatabase(queryDoc, [
//       fileNo,
//       filename,
//       fileVersion,
//       category,
//       status,
//       fileUrl,
//       department,
//       req.user.designation,
//       req.user.shift,
//     ]);
//     res.status(201).json({ message: "File uploaded successfully", fileUrl }); // Created
//   } catch (err) {
//     res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// // Get All Documents (Admin)
// export const getAllDocuments = async (req, res) => {
//   const query = "SELECT * FROM documents";
//   try {
//     const result = await queryDatabase(query);
//     res.status(200).json(result); // OK
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// // Get Documents by Department (Supervisor, Worker)
// export const getDocumentsByDepartment = async (req, res) => {
//   const query = "SELECT * FROM documents WHERE department = ?";
//   try {
//     const result = await queryDatabase(query, [req.user.department]);
//     if (result.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No documents found for this department" }); // Not Found
//     }
//     res.status(200).json(result); // OK
//   } catch (err) {
//     res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// // Delete Documents by ID (Admin, Supervisor)
// export const deleteDocument = async (req, res) => {
//   const query = "DELETE FROM documents WHERE id = ?";
//   try {
//     const result = await queryDatabase(query, [req.params.id]);
//     if (result.affectedRows > 0) {
//       res.status(200).json({ message: "Document deleted successfully" }); // OK
//     } else {
//       res.status(404).json({ message: "Document not found" }); // Not Found
//     }
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// // Update Documents Status by ID (Admin)
// export const updateDocumentStatus = async (req, res) => {
//   const query = "UPDATE documents SET status = ? WHERE id = ?";
//   try {
//     const result = await queryDatabase(query, [req.body.status, req.params.id]);
//     if (result.affectedRows > 0) {
//       res.status(200).json({ message: "Document status updated successfully" }); // OK
//     } else {
//       res.status(404).json({ message: "Document not found" }); // Not Found
//     }
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

import { queryDatabase } from "../config/db.js"; // Import the query function from your db config

// Upload Training Video (HR Supervisor)
export const uploadTrainingVideo = async (req, res) => {
  const { file } = req;
  const { videoName, videoVersion, videoDescription, departmentName } =
    req.body;

  // Check if the video is uploaded
  if (!file) {
    return res.status(422).json({ error: "No video uploaded" }); // Unprocessable Entity
  }

  try {
    // Ensure HR Supervisor specifies a valid department
    const checkDepartmentQuery =
      "SELECT department FROM users WHERE department = ?";
    const departmentCheck = await queryDatabase(checkDepartmentQuery, [
      departmentName,
    ]);

    if (departmentCheck.length === 0) {
      return res.status(404).json({ error: "Invalid department specified" }); // Not Found
    }

    // Create video URL
    const videoUrl = `/uploads/${encodeURIComponent(file.originalname)}`;

    // Insert video details into the database
    const queryDoc = `
      INSERT INTO training_videos (videoName, videoVersion, videoDescription, videoUrl, departmentName)
      VALUES (?, ?, ?, ?, ?)`;

    await queryDatabase(queryDoc, [
      videoName,
      videoVersion,
      videoDescription,
      videoUrl,
      departmentName,
    ]);

    res
      .status(201)
      .json({ message: "Training video uploaded successfully", videoUrl }); // Created
  } catch (err) {
    console.error("Error uploading training video:", err.message);
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Get All Training Videos (Accessible by Admin, Supervisor, Worker)
export const getTrainingVideos = async (req, res) => {
  try {
    const query = "SELECT * FROM training_videos"; // Fetch all training videos

    const videos = await queryDatabase(query);

    if (videos.length === 0) {
      return res.status(404).json({ error: "No training videos found" }); // Not Found
    }

    res.status(200).json(videos); // OK
  } catch (err) {
    console.error("Error retrieving training videos:", err.message);
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Delete Training Video (Accessible by Admin & Supervisor only)
export const deleteTrainingVideo = async (req, res) => {
  const { id } = req.params; // Get the video ID from the URL parameters

  try {
    // Check if the video exists before trying to delete
    const checkVideoQuery = "SELECT * FROM training_videos WHERE id = ?";
    const videoCheck = await queryDatabase(checkVideoQuery, [id]);

    if (videoCheck.length === 0) {
      return res.status(404).json({ error: "Training video not found" }); // Not Found
    }

    // Proceed to delete the video
    const deleteVideoQuery = "DELETE FROM training_videos WHERE id = ?";
    await queryDatabase(deleteVideoQuery, [id]);

    res.status(200).json({ message: "Training video deleted successfully" }); // OK
  } catch (err) {
    console.error("Error deleting training video:", err.message);
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};
