// // controllers/hrVideoController.js

// import db from "../config/db.js";

// //Helper function to promisify db.query
// const queryDb = (query, params = []) => {
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };

// // Upload Training Video (HR Supervisor)
// export const uploadTrainingVideo = async (req, res) => {
//   const { file } = req;
//   const { videoName, videoVersion, videoDescription, departmentName } =
//     req.body;

//   // Check if the video is uploaded
//   if (!file) {
//     return res.status(422).json({ error: "No video uploaded" }); // Unprocessable Entity
//   }

//   try {
//     // Ensure HR Supervisor specifies a valid department
//     const checkDepartmentQuery =
//       "SELECT department FROM users WHERE department = ?";
//     const departmentCheck = await queryDb(checkDepartmentQuery, [
//       departmentName,
//     ]);

//     if (departmentCheck.length === 0) {
//       return res.status(404).json({ error: "Invalid department specified" }); // Not Found
//     }

//     // Create video URL
//     const videoUrl = `/uploads/${encodeURIComponent(file.originalname)}`;

//     // Insert video details into the database
//     const queryDoc = `
//       INSERT INTO training_videos (videoName, videoVersion, videoDescription, videoUrl, departmentName)
//       VALUES (?, ?, ?, ?, ?)`;

//     await queryDb(queryDoc, [
//       videoName,
//       videoVersion,
//       videoDescription,
//       videoUrl,
//       departmentName,
//     ]);

//     res
//       .status(201)
//       .json({ message: "Training video uploaded successfully", videoUrl }); // Created
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// //Get All Training Videos(Accessible by Admin, Supervisor, Worker)

// export const getTrainingVideos = async (req, res) => {
//   try {
//     const query = "SELECT * FROM training_videos"; // Fetch all  training videos

//     const videos = await queryDb(query);

//     if (videos.length === 0) {
//       return res.status(404).json({ error: "No training videos found" }); //Not Found
//     }

//     res.status(200).json(videos); //OK
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); //Internal Server Error
//   }
// };

// //Delete Training Video(Accessible by Admin & Supervisor only)

// export const deleteTrainingVideo = async (req, res) => {
//   const { id } = req.params; //Get the video ID from hte URL parameters

//   try {
//     // check if the video exists before trying to delete
//     const checkVideoQuery = "SELECT * FROM training_videos WHERE id = ?";
//     const videoCheck = await queryDb(checkVideoQuery, [id]);

//     if (videoCheck.length === 0) {
//       return res.status(404).json({ error: "Training video not found" }); //Not Found
//     }

//     //Proceed to delete the video
//     const deleteVideoQuery = "DELETE FROM training_videos WHERE id = ?";
//     await queryDb(deleteVideoQuery, [id]);

//     res.status(200).json({ message: "Training video deleted successfully" }); //OK
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); //Internal Server Error
//   }
// };

import pool from "../config/db.js"; // Import the MySQL pool

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
    // Ensure HR Supervisor specifies a valid department by checking the 'users' table
    const [departmentCheck] = await pool.query(
      "SELECT department FROM users WHERE department = ?",
      [departmentName]
    );

    if (departmentCheck.length === 0) {
      return res.status(404).json({ error: "Invalid department specified" }); // Not Found
    }

    // Create video URL
    const videoUrl = `/uploads/${encodeURIComponent(file.originalname)}`;

    // Insert video details into the 'training_videos' table
    await pool.query(
      `
      INSERT INTO training_videos (videoName, videoVersion, videoDescription, videoUrl, departmentName)
      VALUES (?, ?, ?, ?, ?)
      `,
      [videoName, videoVersion, videoDescription, videoUrl, departmentName]
    );

    res.status(201).json({
      message: "Training video uploaded successfully",
      videoUrl,
    }); // Created
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Get All Training Videos (Accessible by Admin, Supervisor, Worker)
export const getTrainingVideos = async (req, res) => {
  try {
    const [videos] = await pool.query("SELECT * FROM training_videos"); // Fetch all training videos

    if (videos.length === 0) {
      return res.status(404).json({ error: "No training videos found" }); // Not Found
    }

    res.status(200).json(videos); // OK
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Delete Training Video (Accessible by Admin & Supervisor only)
export const deleteTrainingVideo = async (req, res) => {
  const { id } = req.params; // Get the video ID from the URL parameters

  try {
    // Check if the video exists before trying to delete it
    const [videoCheck] = await pool.query(
      "SELECT * FROM training_videos WHERE id = ?",
      [id]
    );

    if (videoCheck.length === 0) {
      return res.status(404).json({ error: "Training video not found" }); // Not Found
    }

    // Proceed to delete the video
    await pool.query("DELETE FROM training_videos WHERE id = ?", [id]);

    res.status(200).json({ message: "Training video deleted successfully" }); // OK
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// // Create Question Paper
// export const createQuestionPaper = async (req, res) => {
//   const {
//     questionNo,
//     question,
//     option1,
//     option2,
//     option3,
//     option4,
//     correctOption,
//     paperNo,
//   } = req.body;

//   // Check if all required fields are provided
//   if (
//     !questionNo ||
//     !question ||
//     !option1 ||
//     !option2 ||
//     !option3 ||
//     !option4 ||
//     !correctOption ||
//     !paperNo
//   ) {
//     return res.status(422).json({ error: "All fields are required" }); // Unprocessable Entity
//   }

//   try {
//     // Insert question paper details into the 'question_papers' table
//     await pool.query(
//       `
//       INSERT INTO question_papers (questionNo, question, option1, option2, option3, option4, correctOption, paperNo)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//       `,
//       [
//         questionNo,
//         question,
//         option1,
//         option2,
//         option3,
//         option4,
//         correctOption,
//         paperNo,
//       ]
//     );

//     res.status(201).json({ message: "Question paper created successfully" }); // Created
//   } catch (err) {
//     return res.status(500).json({ error: err.message }); // Internal Server Error
//   }
// };

// Create Question Paper
export const createQuestionPaper = async (req, res) => {
  const {
    paperId,
    questionNo,
    question,
    option1,
    option2,
    option3,
    option4,
    correctOption,
    department, // Expect department to be sent in request body
  } = req.body;

  // Check if all required fields are provided
  if (
    !paperId ||
    !questionNo ||
    !question ||
    !option1 ||
    !option2 ||
    !option3 ||
    !option4 ||
    !correctOption ||
    !department
  ) {
    return res.status(422).json({ error: "All fields are required" }); // Unprocessable Entity
  }

  try {
    // Ensure the specified department exists by checking the 'users' table
    const [departmentCheck] = await pool.query(
      "SELECT department FROM users WHERE department = ?",
      [department]
    );

    if (departmentCheck.length === 0) {
      return res.status(404).json({ error: "Invalid department specified" }); // Not Found
    }

    // Insert question paper details into the 'question_papers' table
    await pool.query(
      `
      INSERT INTO question_papers (paperId, questionNo, question, option1, option2, option3, option4, correctOption, department)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        paperId,
        questionNo,
        question,
        option1,
        option2,
        option3,
        option4,
        correctOption,
        department,
      ]
    );

    res.status(201).json({ message: "Question paper created successfully" }); // Created
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Get All Question Papers
export const getAllQuestionPapers = async (req, res) => {
  try {
    const [papers] = await pool.query("SELECT * FROM question_papers"); // Fetch all question papers

    if (papers.length === 0) {
      return res.status(404).json({ error: "No question papers found" }); // Not Found
    }

    res.status(200).json(papers); // OK
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};

// Delete Question Paper
export const deleteQuestionPaper = async (req, res) => {
  const { id } = req.params; // Get the paper ID from the URL parameters

  try {
    // Check if the question paper exists before trying to delete it
    const [paperCheck] = await pool.query(
      "SELECT * FROM question_papers WHERE id = ?",
      [id]
    );

    if (paperCheck.length === 0) {
      return res.status(404).json({ error: "Question paper not found" }); // Not Found
    }

    // Proceed to delete the question paper
    await pool.query("DELETE FROM question_papers WHERE id = ?", [id]);

    res.status(200).json({ message: "Question paper deleted successfully" }); // OK
  } catch (err) {
    return res.status(500).json({ error: err.message }); // Internal Server Error
  }
};
