// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import db from "../config/db.js";

// //Signup Function
// export const signup = (req, res) => {
//   const { name, employeeID, department, designation, password, shift } =
//     req.body;
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) return res.status(500).json({ error: err.message });
//     const query =
//       "INSERT INTO users (name, employeeID, department, designation, password, shift) VALUES (?, ?, ?, ?, ?, ?)";
//     db.query(
//       query,
//       [name, employeeID, department, designation, hashedPassword, shift],
//       (err) => {
//         if (err) return res.status(400).json({ error: err.message });
//         res.status(201).json({ message: "User created successfully" });
//       }
//     );
//   });
// };

// // Login Function
// export const login = (req, res) => {
//   const { employeeID, password } = req.body;

//   const query = "SELECT * FROM users WHERE employeeID = ?";

//   db.query(query, [employeeID], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (result.length === 0)
//       return res.status(401).json({ message: "User not found" });

//     const user = result[0];

//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) return res.status(500).json({ error: err.message });
//       if (!isMatch)
//         return res.status(401).json({ message: "Invalid credentials" });

//       // Generate JWT token
//       const token = jwt.sign(
//         { employeeID: user.employeeID },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );

//       // Send response with token and user details
//       res.json({
//         token, // JWT token
//         name: user.name, // User's name
//         department: user.department, // User's department
//         designation: user.designation, // User's designation
//         shift: user.shift, // User's shift
//       });
//     });
//   });
// };
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

// Signup Function
export const signup = async (req, res) => {
  const { name, employeeID, department, designation, password, shift } =
    req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO users (name, employeeID, department, designation, password, shift) VALUES (?, ?, ?, ?, ?, ?)";

    // Execute the database query
    db.query(
      query,
      [name, employeeID, department, designation, hashedPassword, shift],
      (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ message: "User created successfully" });
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Login Function
export const login = async (req, res) => {
  const { employeeID, password } = req.body;

  try {
    const query = "SELECT * FROM users WHERE employeeID = ?";

    // Execute the database query using a promise
    const result = await new Promise((resolve, reject) => {
      db.query(query, [employeeID], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    if (result.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result[0];

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { employeeID: user.employeeID },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send response with token and user details
    return res.status(200).json({
      token, // JWT token
      name: user.name, // User's name
      department: user.department, // User's department
      designation: user.designation, // User's designation
      shift: user.shift, // User's shift
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
