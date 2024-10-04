# MySQL Queries

create database document_app;

use document_app;

select \* from users;

select \* from users;

select \* from documents;

select \* from joining_forms;

drop table users;

drop table documents;

drop table joining_forms;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
employeeID VARCHAR(50) NOT NULL UNIQUE,
department ENUM('Store', 'HR', 'Production','Machine','Maintance','SOP|WI','Logistics','Quality','Calibration','FQC','IQC','IPQC','EHS') NOT NULL,
designation ENUM('Admin', 'Supervisor', 'Worker') NOT NULL,
password VARCHAR(255) NOT NULL,
shift ENUM('A', 'B') NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE documents (
id INT AUTO_INCREMENT PRIMARY KEY,
filename VARCHAR(255) NOT NULL,
fileNo VARCHAR(50), -- Add this line for fileNo
fileVersion VARCHAR(50),
category ENUM('Policies', 'Form Format', 'Work Instructions','SOP') NOT NULL,
status ENUM('Approved', 'Rejected', 'Pending') DEFAULT 'Pending',
fileUrl VARCHAR(255) NOT NULL,
department VARCHAR(100) NOT NULL,
designation VARCHAR(100) NOT NULL,
shift VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE joining_forms (
id INT AUTO_INCREMENT PRIMARY KEY,
photo_url VARCHAR(255) NULL,
full_name VARCHAR(100) NULL,
fathers_name VARCHAR(100) NULL,
date_of_birth VARCHAR(25) NULL,
gender VARCHAR(15) NULL,
marital_status VARCHAR(25) NULL,
blood_group VARCHAR(5) NULL,
official_contact_no VARCHAR(15) NULL,
official_mail_id VARCHAR(100) NULL,
personal_contact_no VARCHAR(15) NULL,
personal_mail_id VARCHAR(100) NULL,
present_address_name VARCHAR(100) NULL,
present_address_relation VARCHAR(50) NULL,
present_address_contact_no VARCHAR(15) NULL,
present_address_full_address VARCHAR(255) NULL,
present_address_state VARCHAR(50) NULL,
present_address_district_city VARCHAR(50) NULL,
present_address_pin_code VARCHAR(10) NULL,
permanent_address_name VARCHAR(100) NULL,
permanent_address_relation VARCHAR(50) NULL,
permanent_address_contact_no VARCHAR(15) NULL,
permanent_address_full_address VARCHAR(255) NULL,
permanent_address_state VARCHAR(50) NULL,
permanent_address_district_city VARCHAR(50) NULL,
permanent_address_pin_code VARCHAR(10) NULL,
date_of_interview VARCHAR(25) NULL,
date_of_joining VARCHAR(25) NULL,
company_name VARCHAR(25)NULL,
department VARCHAR(50) NULL,
designation VARCHAR(50) NULL,
employee_type VARCHAR(50) NULL,
mode_of_recruitment VARCHAR(50) NULL,
reference_consultancy VARCHAR(100) NULL,
pan_no VARCHAR(20) NULL,
adhar_no VARCHAR(25) NULL,
bank VARCHAR(100) NULL,
account_no VARCHAR(20) NULL,
ifsc_code VARCHAR(20) NULL,
branch_address VARCHAR(255) NULL,
uan_no VARCHAR(20) NULL,
e_name1 VARCHAR(20) NULL,
e_relation1 VARCHAR(20) NULL,
e_address1 VARCHAR(20) NULL,
e_contact_no1 VARCHAR(20) NULL,
e_name2 VARCHAR(20) NULL,
e_relation2 VARCHAR(20) NULL,
e_address2 VARCHAR(20) NULL,
e_contact_no2 VARCHAR(20) NULL,
date VARCHAR(25) NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insert records for Store department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/uploads/c.jpg', 'John Doe', 'Michael Doe', '1988-04-12', 'Male', 'Single', 'O+', '1234567890', 'john.store@company.com', '0987654321', 'johndoe@gmail.com', 'Jane Doe', 'Mother', '1234567890', '123 Store Street', 'California', 'Los Angeles', '90001', 'Jane Doe', 'Mother', '0987654321', '456 Home St.', 'California', 'Los Angeles', '90001', '2022-03-15', '2022-04-01', 'Company XYZ', 'Store', 'Supervisor', 'Full-time', 'Direct', 'Consultancy A', 'PAN1234', 'ADHAR1234', 'Bank A', 'ACC1234', 'IFSC1234', '123 Branch St.', 'UAN1234', 'Alice', 'Sister', '123 Family St.', '1122334455', 'Bob', 'Brother', '456 Family St.', '2233445566', '2024-10-01'),
('/uploads/c.jpg', 'Anna Store', 'Mark Store', '1990-07-14', 'Female', 'Married', 'A+', '1234567891', 'anna.store@company.com', '0987654322', 'annastore@gmail.com', 'Alice Doe', 'Sister', '1234567891', '123 Store Avenue', 'New York', 'New York City', '10001', 'Alice Doe', 'Sister', '0987654322', '456 Home Avenue', 'New York', 'New York City', '10001', '2022-03-16', '2022-04-02', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Referral', 'Consultancy B', 'PAN5678', 'ADHAR5678', 'Bank B', 'ACC5678', 'IFSC5678', '123 Branch Ave.', 'UAN5678', 'Charlie', 'Brother', '789 Family Ave.', '3344556677', 'Dave', 'Uncle', '101 Family Ave.', '4455667788', '2024-10-02'),
('/uploads/c.jpg', 'Emma Store', 'David Store', '1991-11-25', 'Female', 'Single', 'B+', '1234567892', 'emma.store@company.com', '0987654323', 'emmastore@gmail.com', 'Bob Doe', 'Father', '1234567892', '123 Store Lane', 'Texas', 'Dallas', '75001', 'Bob Doe', 'Father', '0987654323', '456 Home Lane', 'Texas', 'Dallas', '75001', '2022-03-17', '2022-04-03', 'Company XYZ', 'Store', 'Supervisor', 'Part-time', 'Campus', 'Consultancy C', 'PAN7890', 'ADHAR7890', 'Bank C', 'ACC7890', 'IFSC7890', '123 Branch Ln.', 'UAN7890', 'Eve', 'Mother', '102 Family Ln.', '5566778899', 'Frank', 'Cousin', '103 Family Ln.', '6677889900', '2024-10-03'),
('/uploads/c.jpg', 'James Store', 'Robert Store', '1992-01-18', 'Male', 'Married', 'AB-', '1234567893', 'james.store@company.com', '0987654324', 'jamesstore@gmail.com', 'Charlie Doe', 'Brother', '1234567893', '123 Store Blvd', 'Illinois', 'Chicago', '60007', 'Charlie Doe', 'Brother', '0987654324', '456 Home Blvd', 'Illinois', 'Chicago', '60007', '2022-03-18', '2022-04-04', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Referral', 'Consultancy D', 'PAN1122', 'ADHAR1122', 'Bank D', 'ACC1122', 'IFSC1122', '123 Branch Blvd', 'UAN1122', 'Grace', 'Sister', '104 Family Blvd', '7788990011', 'Hank', 'Father', '105 Family Blvd', '8899001122', '2024-10-04'),
('/uploads/c.jpg', 'Liam Store', 'Tom Store', '1993-05-30', 'Male', 'Single', 'O-', '1234567894', 'liam.store@company.com', '0987654325', 'liamstore@gmail.com', 'Diana Doe', 'Mother', '1234567894', '123 Store Road', 'Ohio', 'Cleveland', '44101', 'Diana Doe', 'Mother', '0987654325', '456 Home Rd.', 'Ohio', 'Cleveland', '44101', '2022-03-19', '2022-04-05', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Direct', 'Consultancy E', 'PAN3344', 'ADHAR3344', 'Bank E', 'ACC3344', 'IFSC3344', '123 Branch Rd.', 'UAN3344', 'Ivy', 'Aunt', '106 Family Rd.', '9900112233', 'Jack', 'Uncle', '107 Family Rd.', '1011223344', '2024-10-05');

-- Insert records for HR department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/uploads/c.jpg', 'Michael Smith', 'John Smith', '1989-02-11', 'Male', 'Single', 'A+', '1234567895', 'michael.hr@company.com', '0987654326', 'michaelsmith@gmail.com', 'Linda Smith', 'Sister', '1234567895', '789 HR Ave.', 'Florida', 'Miami', '33101', 'Linda Smith', 'Sister', '0987654326', '101 Home Ave.', 'Florida', 'Miami', '33101', '2022-01-15', '2022-01-20', 'Company XYZ', 'HR', 'Manager', 'Full-time', 'Direct', 'Consultancy A', 'PAN4567', 'ADHAR4567', 'Bank F', 'ACC4567', 'IFSC4567', '789 Branch St.', 'UAN4567', 'Chris', 'Brother', '123 Family St.', '1122334456', 'Debbie', 'Sister', '124 Family St.', '2233445567', '2024-10-01'),
('/uploads/c.jpg', 'Sarah Johnson', 'Robert Johnson', '1990-04-22', 'Female', 'Married', 'B+', '1234567896', 'sarah.hr@company.com', '0987654327', 'sarahjohnson@gmail.com', 'Henry Johnson', 'Father', '1234567896', '321 HR Ave.', 'New York', 'New York City', '10002', 'Henry Johnson', 'Father', '0987654327', '456 Home Ave.', 'New York', 'New York City', '10002', '2022-01-16', '2022-01-21', 'Company XYZ', 'HR', 'Employee', 'Full-time', 'Referral', 'Consultancy B', 'PAN8901', 'ADHAR8901', 'Bank G', 'ACC8901', 'IFSC8901', '321 Branch Ave.', 'UAN8901', 'Ellie', 'Sister', '125 Family Ave.', '3344556678', 'Frank', 'Cousin', '126 Family Ave.', '4455667789', '2024-10-02'),
('/uploads/c.jpg', 'David Brown', 'Tom Brown', '1985-08-30', 'Male', 'Single', 'AB+', '1234567897', 'david.hr@company.com', '0987654328', 'davidbrown@gmail.com', 'Nina Brown', 'Mother', '1234567897', '654 HR Blvd.', 'California', 'Los Angeles', '90002', 'Nina Brown', 'Mother', '0987654328', '789 Home Blvd.', 'California', 'Los Angeles', '90002', '2022-01-17', '2022-01-22', 'Company XYZ', 'HR', 'Manager', 'Part-time', 'Campus', 'Consultancy C', 'PAN1123', 'ADHAR1123', 'Bank H', 'ACC1123', 'IFSC1123', '654 Branch Blvd.', 'UAN1123', 'Gina', 'Sister', '127 Family Blvd.', '5566778890', 'Harry', 'Brother', '128 Family Blvd.', '6677889901', '2024-10-03'),
('/uploads/c.jpg', 'Emma Taylor', 'Michael Taylor', '1992-10-20', 'Female', 'Married', 'O+', '1234567898', 'emma.hr@company.com', '0987654329', 'emmataylor@gmail.com', 'Peter Taylor', 'Father', '1234567898', '321 HR St.', 'Texas', 'Dallas', '75002', 'Peter Taylor', 'Father', '0987654329', '456 Home St.', 'Texas', 'Dallas', '75002', '2022-01-18', '2022-01-23', 'Company XYZ', 'HR', 'Employee', 'Full-time', 'Direct', 'Consultancy D', 'PAN2233', 'ADHAR2233', 'Bank I', 'ACC2233', 'IFSC2233', '321 Branch St.', 'UAN2233', 'Isla', 'Sister', '129 Family St.', '7788990012', 'Jack', 'Cousin', '130 Family St.', '8899002233', '2024-10-04'),
('/uploads/c.jpg', 'Lucas White', 'Stephen White', '1994-06-15', 'Male', 'Single', 'A-', '1234567899', 'lucas.hr@company.com', '0987654330', 'lucaswhite@gmail.com', 'Mia White', 'Sister', '1234567899', '987 HR Ave.', 'Ohio', 'Cleveland', '44102', 'Mia White', 'Sister', '0987654330', '654 Home Ave.', 'Ohio', 'Cleveland', '44102', '2022-01-19', '2022-01-24', 'Company XYZ', 'HR', 'Manager', 'Full-time', 'Referral', 'Consultancy E', 'PAN3345', 'ADHAR3345', 'Bank J', 'ACC3345', 'IFSC3345', '987 Branch Ave.', 'UAN3345', 'Katie', 'Sister', '131 Family Ave.', '9900113344', 'Leo', 'Brother', '132 Family Ave.', '1011224455', '2024-10-05');

-- Insert records for Production department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/uploads/c.jpg', 'Ella Green', 'David Green', '1993-09-07', 'Female', 'Married', 'B+', '1234567810', 'ella.prod@company.com', '0987654321', 'ellagreen@gmail.com', 'Nina Green', 'Mother', '1234567810', '789 Production St.', 'California', 'Los Angeles', '90003', 'Nina Green', 'Mother', '0987654321', '321 Home St.', 'California', 'Los Angeles', '90003', '2023-02-12', '2023-02-15', 'Company XYZ', 'Production', 'Supervisor', 'Full-time', 'Direct', 'Consultancy A', 'PAN1235', 'ADHAR1235', 'Bank K', 'ACC1235', 'IFSC1235', '789 Branch St.', 'UAN1235', 'Sam', 'Brother', '133 Family St.', '1122334466', 'Tony', 'Cousin', '134 Family St.', '2233445577', '2024-10-01'),
('/uploads/c.jpg', 'William Brown', 'Samuel Brown', '1988-03-25', 'Male', 'Single', 'O-', '1234567811', 'will.brown@company.com', '0987654322', 'williambrown@gmail.com', 'Linda Brown', 'Sister', '1234567811', '654 Production Ave.', 'Florida', 'Miami', '33102', 'Linda Brown', 'Sister', '0987654322', '987 Home Ave.', 'Florida', 'Miami', '33102', '2023-02-13', '2023-02-16', 'Company XYZ', 'Production', 'Worker', 'Part-time', 'Referral', 'Consultancy B', 'PAN2345', 'ADHAR2345', 'Bank L', 'ACC2345', 'IFSC2345', '654 Branch Ave.', 'UAN2345', 'Olivia', 'Sister', '135 Family Ave.', '3344556688', 'Peter', 'Brother', '136 Family Ave.', '4455667799', '2024-10-02'),
('/uploads/c.jpg', 'James Gray', 'Lucas Gray', '1986-12-10', 'Male', 'Married', 'A+', '1234567812', 'james.gray@company.com', '0987654323', 'jamesgray@gmail.com', 'Ella Gray', 'Sister', '1234567812', '321 Production Blvd.', 'New York', 'New York City', '10003', 'Ella Gray', 'Sister', '0987654323', '456 Home Blvd.', 'New York', 'New York City', '10003', '2023-02-14', '2023-02-17', 'Company XYZ', 'Production', 'Manager', 'Full-time', 'Campus', 'Consultancy C', 'PAN3456', 'ADHAR3456', 'Bank M', 'ACC3456', 'IFSC3456', '321 Branch Blvd.', 'UAN3456', 'Victor', 'Brother', '137 Family Blvd.', '5566778800', 'Wendy', 'Sister', '138 Family Blvd.', '6677889911', '2024-10-03'),
('/uploads/c.jpg', 'Isabella Martin', 'Henry Martin', '1991-07-05', 'Female', 'Single', 'AB-', '1234567813', 'isabella.prod@company.com', '0987654324', 'isabellamartin@gmail.com', 'David Martin', 'Father', '1234567813', '654 Production Ln.', 'Texas', 'Dallas', '75003', 'David Martin', 'Father', '0987654324', '789 Home Ln.', 'Texas', 'Dallas', '75003', '2023-02-15', '2023-02-18', 'Company XYZ', 'Production', 'Supervisor', 'Full-time', 'Direct', 'Consultancy D', 'PAN4568', 'ADHAR4568', 'Bank N', 'ACC4568', 'IFSC4568', '654 Branch Ln.', 'UAN4568', 'Sophie', 'Sister', '139 Family Ln.', '7788990022', 'Aaron', 'Brother', '140 Family Ln.', '8899001133', '2024-10-04'),
('/uploads/c.jpg', 'Liam Lee', 'Robert Lee', '1990-11-30', 'Male', 'Married', 'B+', '1234567814', 'liam.lee@company.com', '0987654325', 'liamlee@gmail.com', 'Rita Lee', 'Mother', '1234567814', '321 Production Rd.', 'Ohio', 'Cleveland', '44103', 'Rita Lee', 'Mother', '0987654325', '456 Home Rd.', 'Ohio', 'Cleveland', '44103', '2023-02-16', '2023-02-19', 'Company XYZ', 'Production', 'Worker', 'Part-time', 'Referral', 'Consultancy E', 'PAN5678', 'ADHAR5678', 'Bank O', 'ACC5678', 'IFSC5678', '987 Branch Rd.', 'UAN5678', 'Michael', 'Brother', '141 Family Rd.', '9900112244', 'Lily', 'Sister', '142 Family Rd.', '1011223355', '2024-10-05');

-- Insert records for SOP | WI department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/uploads/c.jpg', 'Madison Wood', 'Charles Wood', '1994-04-14', 'Female', 'Single', 'O+', '1234567820', 'madison.sop@company.com', '0987654331', 'madisonwood@gmail.com', 'Nina Wood', 'Mother', '1234567820', '789 SOP St.', 'California', 'Los Angeles', '90005', 'Nina Wood', 'Mother', '0987654331', '321 Home St.', 'California', 'Los Angeles', '90005', '2023-04-10', '2023-04-15', 'Company XYZ', 'SOP | WI', 'Supervisor', 'Full-time', 'Direct', 'Consultancy A', 'PAN6789', 'ADHAR6789', 'Bank U', 'ACC6789', 'IFSC6789', '789 Branch St.', 'UAN6789', 'Jason', 'Brother', '153 Family St.', '3344556670', 'Jenny', 'Sister', '154 Family St.', '4455667788', '2024-10-01'),
('/uploads/c.jpg', 'Michael Harris', 'Peter Harris', '1990-08-25', 'Male', 'Married', 'AB-', '1234567821', 'michael.sop@company.com', '0987654332', 'michaelharris@gmail.com', 'Linda Harris', 'Mother', '1234567821', '654 SOP Ave.', 'Florida', 'Miami', '33104', 'Linda Harris', 'Mother', '0987654332', '987 Home Ave.', 'Florida', 'Miami', '33104', '2023-04-11', '2023-04-16', 'Company XYZ', 'SOP | WI', 'Manager', 'Part-time', 'Referral', 'Consultancy B', 'PAN7890', 'ADHAR7890', 'Bank V', 'ACC7890', 'IFSC7890', '654 Branch Ave.', 'UAN7890', 'Olivia', 'Sister', '155 Family Ave.', '3344556680', 'Peter', 'Brother', '156 Family Ave.', '4455667799', '2024-10-02'),
('/uploads/c.jpg', 'Isabella Young', 'Daniel Young', '1988-09-15', 'Female', 'Single', 'B+', '1234567822', 'isabella.sop@company.com', '0987654333', 'isabellayoung@gmail.com', 'Sarah Young', 'Sister', '1234567822', '321 SOP Blvd.', 'Texas', 'Dallas', '75005', 'Sarah Young', 'Sister', '0987654333', '456 Home Blvd.', 'Texas', 'Dallas', '75005', '2023-04-12', '2023-04-17', 'Company XYZ', 'SOP | WI', 'Technician', 'Full-time', 'Direct', 'Consultancy C', 'PAN8901', 'ADHAR8901', 'Bank W', 'ACC8901', 'IFSC8901', '321 Branch Blvd.', 'UAN8901', 'Ella', 'Sister', '157 Family Blvd.', '3344556678', 'Frank', 'Cousin', '158 Family Blvd.', '4455667789', '2024-10-03'),
('/uploads/c.jpg', 'Lucas Robinson', 'Henry Robinson', '1985-07-20', 'Male', 'Married', 'O-', '1234567823', 'lucas.sop@company.com', '0987654334', 'lucasrobinson@gmail.com', 'Laura Robinson', 'Mother', '1234567823', '654 SOP Ln.', 'Ohio', 'Cleveland', '44105', 'Laura Robinson', 'Mother', '0987654334', '789 Home Ln.', 'Ohio', 'Cleveland', '44105', '2023-04-13', '2023-04-18', 'Company XYZ', 'SOP | WI', 'Manager', 'Part-time', 'Referral', 'Consultancy D', 'PAN4568', 'ADHAR4568', 'Bank X', 'ACC4568', 'IFSC4568', '654 Branch Ln.', 'UAN4568', 'Sophie', 'Sister', '159 Family Ln.', '7788990022', 'Aaron', 'Brother', '160 Family Ln.', '8899001133', '2024-10-04'),
('/uploads/c.jpg', 'Avery King', 'George King', '1996-10-30', 'Female', 'Single', 'A-', '1234567824', 'avery.sop@company.com', '0987654335', 'averyking@gmail.com', 'Olivia King', 'Mother', '1234567824', '321 SOP Rd.', 'Florida', 'Miami', '33105', 'Olivia King', 'Mother', '0987654335', '456 Home Rd.', 'Florida', 'Miami', '33105', '2023-04-14', '2023-04-19', 'Company XYZ', 'SOP | WI', 'Technician', 'Full-time', 'Campus', 'Consultancy E', 'PAN5678', 'ADHAR5678', 'Bank Y', 'ACC5678', 'IFSC5678', '987 Branch Rd.', 'UAN5678', 'Michael', 'Brother', '161 Family Rd.', '9900112244', 'Lily', 'Sister', '162 Family Rd.', '1011223355', '2024-10-05');

-- Insert records for Logistics department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/uploads/c.jpg', 'James Hall', 'John Hall', '1991-02-15', 'Male', 'Married', 'O+', '1234567825', 'james.log@company.com', '0987654336', 'jameshall@gmail.com', 'Emma Hall', 'Wife', '1234567825', '321 Logistics St.', 'California', 'Los Angeles', '90006', 'Emma Hall', 'Wife', '0987654336', '654 Home St.', 'California', 'Los Angeles', '90006', '2023-05-01', '2023-05-05', 'Company XYZ', 'Logistics', 'Manager', 'Full-time', 'Direct', 'Consultancy A', 'PAN6789', 'ADHAR6789', 'Bank Z', 'ACC6789', 'IFSC6789', '789 Branch St.', 'UAN6789', 'Jason', 'Brother', '163 Family St.', '3344556670', 'Jenny', 'Sister', '164 Family St.', '4455667788', '2024-10-01'),
('/uploads/c.jpg', 'Daniel Young', 'Samuel Young', '1994-04-25', 'Male', 'Single', 'A-', '1234567826', 'daniel.log@company.com', '0987654337', 'danielyoung@gmail.com', 'Sophia Young', 'Sister', '1234567826', '654 Logistics Ave.', 'Florida', 'Miami', '33106', 'Sophia Young', 'Sister', '0987654337', '987 Home Ave.', 'Florida', 'Miami', '33106', '2023-05-02', '2023-05-06', 'Company XYZ', 'Logistics', 'Supervisor', 'Part-time', 'Referral', 'Consultancy B', 'PAN7890', 'ADHAR7890', 'Bank A', 'ACC7890', 'IFSC7890', '654 Branch Ave.', 'UAN7890', 'Olivia', 'Sister', '165 Family Ave.', '3344556680', 'Peter', 'Brother', '166 Family Ave.', '4455667799', '2024-10-02'),
('/uploads/c.jpg', 'Sophia Miller', 'John Miller', '1993-03-14', 'Female', 'Married', 'B+', '1234567827', 'sophia.log@company.com', '0987654338', 'sophiamiller@gmail.com', 'Linda Miller', 'Mother', '1234567827', '321 Logistics Blvd.', 'Texas', 'Dallas', '75006', 'Linda Miller', 'Mother', '0987654338', '456 Home Blvd.', 'Texas', 'Dallas', '75006', '2023-05-03', '2023-05-07', 'Company XYZ', 'Logistics', 'Technician', 'Full-time', 'Direct', 'Consultancy C', 'PAN8901', 'ADHAR8901', 'Bank B', 'ACC8901', 'IFSC8901', '321 Branch Blvd.', 'UAN8901', 'Ella', 'Sister', '167 Family Blvd.', '3344556678', 'Frank', 'Cousin', '168 Family Blvd.', '4455667789', '2024-10-03'),
('/uploads/c.jpg', 'Liam Brown', 'Sam Brown', '1992-01-30', 'Male', 'Single', 'O-', '1234567828', 'liam.log@company.com', '0987654339', 'liambrown@gmail.com', 'Laura Brown', 'Mother', '1234567828', '654 Logistics Ln.', 'Ohio', 'Cleveland', '44106', 'Laura Brown', 'Mother', '0987654339', '789 Home Ln.', 'Ohio', 'Cleveland', '44106', '2023-05-04', '2023-05-08', 'Company XYZ', 'Logistics', 'Manager', 'Part-time', 'Referral', 'Consultancy D', 'PAN4568', 'ADHAR4568', 'Bank C', 'ACC4568', 'IFSC4568', '654 Branch Ln.', 'UAN4568', 'Sophie', 'Sister', '169 Family Ln.', '7788990022', 'Aaron', 'Brother', '170 Family Ln.', '8899001133', '2024-10-04');


