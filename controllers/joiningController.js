// import db from "../config/db.js";

// // Submit Joining Form
// export const fillJoiningForm = (req, res) => {
//   const {
//     full_name,
//     fathers_name,
//     date_of_birth,
//     gender,
//     marital_status,
//     blood_group,
//     official_contact_no,
//     official_mail_id,
//     personal_contact_no,
//     personal_mail_id,
//     present_address_name,
//     present_address_relation,
//     present_address_contact_no,
//     present_address_full_address,
//     present_address_state,
//     present_address_district_city,
//     present_address_pin_code,
//     permanent_address_name,
//     permanent_address_relation,
//     permanent_address_contact_no,
//     permanent_address_full_address,
//     permanent_address_state,
//     permanent_address_district_city,
//     permanent_address_pin_code,
//     date_of_interview,
//     date_of_joining,
//     department,
//     designation,
//     employee_type,
//     mode_of_recruitment,
//     reference_consultancy,
//     pan_no,
//     bank,
//     account_no,
//     ifsc_code,
//     branch_address,
//     uan_no,
//     e_name1,
//     e_relation1,
//     e_address1,
//     e_contact_no1,
//     e_name2,
//     e_relation2,
//     e_address2,
//     e_contact_no2,
//   } = req.body;

//   const photo_url = req.file
//     ? `/uploads/${encodeURIComponent(req.file.originalname)}`
//     : null;

//   const query = `
//     INSERT INTO joining_forms (
//       photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group,
//       official_contact_no, official_mail_id, personal_contact_no, personal_mail_id,
//       present_address_name, present_address_relation, present_address_contact_no,
//       present_address_full_address, present_address_state, present_address_district_city,
//       present_address_pin_code, permanent_address_name, permanent_address_relation,
//       permanent_address_contact_no, permanent_address_full_address, permanent_address_state,
//       permanent_address_district_city, permanent_address_pin_code, date_of_interview,
//       date_of_joining, department, designation, employee_type, mode_of_recruitment,
//       reference_consultancy, pan_no, bank, account_no, ifsc_code, branch_address, uan_no,
//       e_name1, e_relation1, e_address1, e_contact_no1,e_name2, e_relation2, e_address2, e_contact_no2
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?)`;

//   const values = [
//     photo_url,
//     full_name || null,
//     fathers_name || null,
//     date_of_birth || null,
//     gender || null,
//     marital_status || null,
//     blood_group || null,
//     official_contact_no || null,
//     official_mail_id || null,
//     personal_contact_no || null,
//     personal_mail_id || null,
//     present_address_name || null,
//     present_address_relation || null,
//     present_address_contact_no || null,
//     present_address_full_address || null,
//     present_address_state || null,
//     present_address_district_city || null,
//     present_address_pin_code || null,
//     permanent_address_name || null,
//     permanent_address_relation || null,
//     permanent_address_contact_no || null,
//     permanent_address_full_address || null,
//     permanent_address_state || null,
//     permanent_address_district_city || null,
//     permanent_address_pin_code || null,
//     date_of_interview || null,
//     date_of_joining || null,
//     department || null,
//     designation || null,
//     employee_type || null,
//     mode_of_recruitment || null,
//     reference_consultancy || null,
//     pan_no || null,
//     bank || null,
//     account_no || null,
//     ifsc_code || null,
//     branch_address || null,
//     uan_no || null,
//     e_name1 || null,
//     e_relation1 || null,
//     e_address1 || null,
//     e_contact_no1 || null,
//     e_name2 || null,
//     e_relation2 || null,
//     e_address2 || null,
//     e_contact_no2 || null,
//   ];

//   // Ensure values length matches query placeholders count
//   const placeholderCount = (query.match(/\?/g) || []).length;
//   if (values.length !== placeholderCount) {
//     return res.status(400).json({
//       error: `Expected ${placeholderCount} values, but got ${values.length}.`,
//     });
//   }

//   db.query(query, values, (err) => {
//     if (err) return res.status(400).json({ error: err.message });
//     res.json({ message: "Joining form submitted successfully", photo_url });
//   });
// };
// // Get Joining Forms
// export const getJoiningForms = (req, res) => {
//   const query = "SELECT * FROM joining_forms";

//   db.query(query, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(result);
//   });
// };
import db from "../config/db.js";

// Submit Joining Form
export const fillJoiningForm = async (req, res) => {
  try {
    const {
      full_name,
      fathers_name,
      date_of_birth,
      gender,
      marital_status,
      blood_group,
      official_contact_no,
      official_mail_id,
      personal_contact_no,
      personal_mail_id,
      present_address_name,
      present_address_relation,
      present_address_contact_no,
      present_address_full_address,
      present_address_state,
      present_address_district_city,
      present_address_pin_code,
      permanent_address_name,
      permanent_address_relation,
      permanent_address_contact_no,
      permanent_address_full_address,
      permanent_address_state,
      permanent_address_district_city,
      permanent_address_pin_code,
      date_of_interview,
      date_of_joining,
      department,
      designation,
      employee_type,
      mode_of_recruitment,
      reference_consultancy,
      pan_no,
      bank,
      account_no,
      ifsc_code,
      branch_address,
      uan_no,
      e_name1,
      e_relation1,
      e_address1,
      e_contact_no1,
      e_name2,
      e_relation2,
      e_address2,
      e_contact_no2,
    } = req.body;

    const photo_url = req.file
      ? `/uploads/${encodeURIComponent(req.file.originalname)}`
      : null;

    const query = `
      INSERT INTO joining_forms (
        photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group,
        official_contact_no, official_mail_id, personal_contact_no, personal_mail_id,
        present_address_name, present_address_relation, present_address_contact_no,
        present_address_full_address, present_address_state, present_address_district_city,
        present_address_pin_code, permanent_address_name, permanent_address_relation,
        permanent_address_contact_no, permanent_address_full_address, permanent_address_state,
        permanent_address_district_city, permanent_address_pin_code, date_of_interview,
        date_of_joining, department, designation, employee_type, mode_of_recruitment,
        reference_consultancy, pan_no, bank, account_no, ifsc_code, branch_address, uan_no,
        e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      photo_url,
      full_name || null,
      fathers_name || null,
      date_of_birth || null,
      gender || null,
      marital_status || null,
      blood_group || null,
      official_contact_no || null,
      official_mail_id || null,
      personal_contact_no || null,
      personal_mail_id || null,
      present_address_name || null,
      present_address_relation || null,
      present_address_contact_no || null,
      present_address_full_address || null,
      present_address_state || null,
      present_address_district_city || null,
      present_address_pin_code || null,
      permanent_address_name || null,
      permanent_address_relation || null,
      permanent_address_contact_no || null,
      permanent_address_full_address || null,
      permanent_address_state || null,
      permanent_address_district_city || null,
      permanent_address_pin_code || null,
      date_of_interview || null,
      date_of_joining || null,
      department || null,
      designation || null,
      employee_type || null,
      mode_of_recruitment || null,
      reference_consultancy || null,
      pan_no || null,
      bank || null,
      account_no || null,
      ifsc_code || null,
      branch_address || null,
      uan_no || null,
      e_name1 || null,
      e_relation1 || null,
      e_address1 || null,
      e_contact_no1 || null,
      e_name2 || null,
      e_relation2 || null,
      e_address2 || null,
      e_contact_no2 || null,
    ];

    // Ensure values length matches query placeholders count
    const placeholderCount = (query.match(/\?/g) || []).length;
    if (values.length !== placeholderCount) {
      return res.status(400).json({
        error: `Expected ${placeholderCount} values, but got ${values.length}.`,
      });
    }

    await db.promise().query(query, values);

    res.json({ message: "Joining form submitted successfully", photo_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Joining Forms
export const getJoiningForms = async (req, res) => {
  try {
    const query = "SELECT * FROM joining_forms";
    const [result] = await db.promise().query(query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
