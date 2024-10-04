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


-- Inserting records for each department with common photo_url

-- Store department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/upload/photo.jpg', 'John Doe', 'Michael Doe', '1988-04-12', 'Male', 'Single', 'O+', '1234567890', 'john.store@company.com', '0987654321', 'johndoe@gmail.com', 'Jane Doe', 'Mother', '1234567890', '123 Store St.', 'California', 'Los Angeles', '90001', 'Jane Doe', 'Mother', '0987654321', '456 Home St.', 'California', 'Los Angeles', '90001', '2022-03-15', '2022-04-01', 'Company XYZ', 'Store', 'Supervisor', 'Full-time', 'Direct', 'Consultancy A', 'PAN1234', 'ADHAR1234', 'Bank A', 'ACC1234', 'IFSC1234', '123 Branch St.', 'UAN1234', 'Alice', 'Sister', '123 Family St.', '1122334455', 'Bob', 'Brother', '456 Family St.', '2233445566', '2024-10-01'),
('/upload/photo.jpg', 'Anna Smith', 'Mark Smith', '1990-07-14', 'Female', 'Married', 'A+', '1234567891', 'anna.store@company.com', '0987654322', 'annasmith@gmail.com', 'Alice Doe', 'Sister', '1234567891', '123 Store Ave.', 'New York', 'New York City', '10001', 'Alice Doe', 'Sister', '0987654322', '456 Home Ave.', 'New York', 'New York City', '10001', '2022-03-16', '2022-04-02', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Referral', 'Consultancy B', 'PAN5678', 'ADHAR5678', 'Bank B', 'ACC5678', 'IFSC5678', '123 Branch Ave.', 'UAN5678', 'Charlie', 'Brother', '789 Family Ave.', '3344556677', 'Dave', 'Uncle', '101 Family Ave.', '4455667788', '2024-10-02'),
('/upload/photo.jpg', 'Emma Johnson', 'David Johnson', '1991-11-25', 'Female', 'Single', 'B+', '1234567892', 'emma.store@company.com', '0987654323', 'emmajohnson@gmail.com', 'Bob Doe', 'Father', '1234567892', '123 Store Ln.', 'Texas', 'Dallas', '75001', 'Bob Doe', 'Father', '0987654323', '456 Home Ln.', 'Texas', 'Dallas', '75001', '2022-03-17', '2022-04-03', 'Company XYZ', 'Store', 'Supervisor', 'Part-time', 'Campus', 'Consultancy C', 'PAN7890', 'ADHAR7890', 'Bank C', 'ACC7890', 'IFSC7890', '123 Branch Ln.', 'UAN7890', 'Eve', 'Mother', '102 Family Ln.', '5566778899', 'Frank', 'Cousin', '103 Family Ln.', '6677889900', '2024-10-03'),
('/upload/photo.jpg', 'James Brown', 'Robert Brown', '1992-01-18', 'Male', 'Married', 'AB-', '1234567893', 'james.store@company.com', '0987654324', 'jamesbrown@gmail.com', 'Charlie Doe', 'Brother', '1234567893', '123 Store Blvd', 'Illinois', 'Chicago', '60007', 'Charlie Doe', 'Brother', '0987654324', '456 Home Blvd', 'Illinois', 'Chicago', '60007', '2022-03-18', '2022-04-04', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Referral', 'Consultancy D', 'PAN1122', 'ADHAR1122', 'Bank D', 'ACC1122', 'IFSC1122', '123 Branch Blvd', 'UAN1122', 'Grace', 'Sister', '104 Family Blvd', '7788990011', 'Hank', 'Father', '105 Family Blvd', '8899001122', '2024-10-04'),
('/upload/photo.jpg', 'Liam Wilson', 'Tom Wilson', '1993-05-30', 'Male', 'Single', 'O-', '1234567894', 'liam.store@company.com', '0987654325', 'liamwilson@gmail.com', 'Diana Doe', 'Mother', '1234567894', '123 Store Rd.', 'Ohio', 'Cleveland', '44101', 'Diana Doe', 'Mother', '0987654325', '456 Home Rd.', 'Ohio', 'Cleveland', '44101', '2022-03-19', '2022-04-05', 'Company XYZ', 'Store', 'Worker', 'Full-time', 'Direct', 'Consultancy E', 'PAN3344', 'ADHAR3344', 'Bank E', 'ACC3344', 'IFSC3344', '123 Branch Rd.', 'UAN3344', 'Ivy', 'Aunt', '106 Family Rd.', '9900112233', 'Jack', 'Uncle', '107 Family Rd.', '1011223344', '2024-10-05');

-- HR department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/upload/photo.jpg', 'Alice Smith', 'John Smith', '1989-03-12', 'Female', 'Single', 'B+', '2345678901', 'alice.hr@company.com', '9876543210', 'alicesmith@gmail.com', 'Tom Smith', 'Father', '2345678901', '123 HR St.', 'California', 'San Francisco', '94101', 'Tom Smith', 'Father', '9876543210', '456 Home St.', 'California', 'San Francisco', '94101', '2022-03-15', '2022-04-01', 'Company XYZ', 'HR', 'HR Manager', 'Full-time', 'Direct', 'Consultancy F', 'PAN1235', 'ADHAR1235', 'Bank F', 'ACC1235', 'IFSC1235', '123 Branch St.', 'UAN1235', 'Nina', 'Sister', '123 Family St.', '1122334456', 'Oscar', 'Brother', '456 Family St.', '2233445567', '2024-10-01'),
('/upload/photo.jpg', 'Bobby Brown', 'Max Brown', '1990-05-14', 'Male', 'Married', 'O+', '2345678902', 'bobby.hr@company.com', '9876543211', 'bobbybrown@gmail.com', 'Cathy Brown', 'Mother', '2345678902', '123 HR Ave.', 'New York', 'New York City', '10002', 'Cathy Brown', 'Mother', '9876543211', '456 Home Ave.', 'New York', 'New York City', '10002', '2022-03-16', '2022-04-02', 'Company XYZ', 'HR', 'HR Executive', 'Full-time', 'Referral', 'Consultancy G', 'PAN5679', 'ADHAR5679', 'Bank G', 'ACC5679', 'IFSC5679', '123 Branch Ave.', 'UAN5679', 'Paul', 'Brother', '789 Family Ave.', '3344556678', 'Queen', 'Aunt', '101 Family Ave.', '4455667789', '2024-10-02'),
('/upload/photo.jpg', 'Charlie Green', 'Philip Green', '1991-08-25', 'Male', 'Single', 'AB-', '2345678903', 'charlie.hr@company.com', '9876543212', 'charliegreen@gmail.com', 'Rose Green', 'Sister', '2345678903', '123 HR Ln.', 'Texas', 'Houston', '77001', 'Rose Green', 'Sister', '9876543212', '456 Home Ln.', 'Texas', 'Houston', '77001', '2022-03-17', '2022-04-03', 'Company XYZ', 'HR', 'HR Assistant', 'Part-time', 'Campus', 'Consultancy H', 'PAN7891', 'ADHAR7891', 'Bank H', 'ACC7891', 'IFSC7891', '123 Branch Ln.', 'UAN7891', 'Stella', 'Aunt', '102 Family Ln.', '5566778890', 'Tim', 'Uncle', '103 Family Ln.', '6677889901', '2024-10-03'),
('/upload/photo.jpg', 'Zoe Black', 'Kenny Black', '1992-12-02', 'Female', 'Married', 'A+', '2345678904', 'zoe.hr@company.com', '9876543213', 'zoeblack@gmail.com', 'Nancy Black', 'Mother', '2345678904', '123 HR Blvd', 'Ohio', 'Columbus', '43201', 'Nancy Black', 'Mother', '9876543213', '456 Home Blvd', 'Ohio', 'Columbus', '43201', '2022-03-18', '2022-04-04', 'Company XYZ', 'HR', 'HR Coordinator', 'Full-time', 'Referral', 'Consultancy I', 'PAN3345', 'ADHAR3345', 'Bank I', 'ACC3345', 'IFSC3345', '123 Branch Blvd', 'UAN3345', 'Uma', 'Sister', '104 Family Blvd', '7788990012', 'Vik', 'Brother', '105 Family Blvd', '8899002233', '2024-10-04'),
('/upload/photo.jpg', 'Liam White', 'Jerry White', '1994-02-16', 'Male', 'Single', 'O-', '2345678905', 'liam.hr@company.com', '9876543214', 'liamwhite@gmail.com', 'Diana White', 'Mother', '2345678905', '123 HR Rd.', 'Florida', 'Miami', '33101', 'Diana White', 'Mother', '9876543214', '456 Home Rd.', 'Florida', 'Miami', '33101', '2022-03-19', '2022-04-05', 'Company XYZ', 'HR', 'HR Trainee', 'Internship', 'Direct', 'Consultancy J', 'PAN1123', 'ADHAR1123', 'Bank J', 'ACC1123', 'IFSC1123', '123 Branch Rd.', 'UAN1123', 'Wes', 'Cousin', '106 Family Rd.', '9900113344', 'Zoe', 'Sister', '107 Family Rd.', '1011224455', '2024-10-05');

-- Production department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/upload/photo.jpg', 'George King', 'Samuel King', '1988-07-12', 'Male', 'Single', 'O+', '3456789010', 'george.production@company.com', '8765432109', 'georgeking@gmail.com', 'Jane King', 'Mother', '3456789010', '123 Production St.', 'California', 'Los Angeles', '90001', 'Jane King', 'Mother', '8765432109', '456 Home St.', 'California', 'Los Angeles', '90001', '2022-03-15', '2022-04-01', 'Company XYZ', 'Production', 'Production Manager', 'Full-time', 'Direct', 'Consultancy K', 'PAN1236', 'ADHAR1236', 'Bank K', 'ACC1236', 'IFSC1236', '123 Branch St.', 'UAN1236', 'Alice', 'Sister', '123 Family St.', '1122334456', 'Bob', 'Brother', '456 Family St.', '2233445567', '2024-10-01'),
('/upload/photo.jpg', 'Mia Harris', 'Richard Harris', '1990-02-09', 'Female', 'Married', 'A+', '3456789011', 'mia.production@company.com', '8765432110', 'miaharris@gmail.com', 'Cathy Harris', 'Mother', '3456789011', '123 Production Ave.', 'New York', 'New York City', '10001', 'Cathy Harris', 'Mother', '8765432110', '456 Home Ave.', 'New York', 'New York City', '10001', '2022-03-16', '2022-04-02', 'Company XYZ', 'Production', 'Production Worker', 'Full-time', 'Referral', 'Consultancy L', 'PAN5671', 'ADHAR5671', 'Bank L', 'ACC5671', 'IFSC5671', '123 Branch Ave.', 'UAN5671', 'Charlie', 'Brother', '789 Family Ave.', '3344556678', 'Dave', 'Uncle', '101 Family Ave.', '4455667789', '2024-10-02'),
('/upload/photo.jpg', 'Olivia Lee', 'Mark Lee', '1991-10-19', 'Female', 'Single', 'B+', '3456789012', 'olivia.production@company.com', '8765432111', 'olivialee@gmail.com', 'Bob Lee', 'Father', '3456789012', '123 Production Ln.', 'Texas', 'Dallas', '75001', 'Bob Lee', 'Father', '8765432111', '456 Home Ln.', 'Texas', 'Dallas', '75001', '2022-03-17', '2022-04-03', 'Company XYZ', 'Production', 'Production Assistant', 'Part-time', 'Campus', 'Consultancy M', 'PAN7893', 'ADHAR7893', 'Bank M', 'ACC7893', 'IFSC7893', '123 Branch Ln.', 'UAN7893', 'Stella', 'Aunt', '102 Family Ln.', '5566778890', 'Tim', 'Cousin', '103 Family Ln.', '6677889901', '2024-10-03'),
('/upload/photo.jpg', 'Lucas Walker', 'Tom Walker', '1992-05-15', 'Male', 'Married', 'AB-', '3456789013', 'lucas.production@company.com', '8765432112', 'lucaswalker@gmail.com', 'Diana Walker', 'Mother', '3456789013', '123 Production Blvd.', 'Ohio', 'Columbus', '43201', 'Diana Walker', 'Mother', '8765432112', '456 Home Blvd.', 'Ohio', 'Columbus', '43201', '2022-03-18', '2022-04-04', 'Company XYZ', 'Production', 'Production Trainee', 'Internship', 'Direct', 'Consultancy N', 'PAN3346', 'ADHAR3346', 'Bank N', 'ACC3346', 'IFSC3346', '123 Branch Blvd.', 'UAN3346', 'Uma', 'Sister', '104 Family Blvd.', '7788990012', 'Vik', 'Brother', '105 Family Blvd.', '8899002233', '2024-10-04'),
('/upload/photo.jpg', 'Emma Scott', 'Peter Scott', '1993-03-11', 'Female', 'Single', 'O-', '3456789014', 'emma.production@company.com', '8765432113', 'emmascott@gmail.com', 'Diana Scott', 'Mother', '3456789014', '123 Production Rd.', 'Florida', 'Miami', '33101', 'Diana Scott', 'Mother', '8765432113', '456 Home Rd.', 'Florida', 'Miami', '33101', '2022-03-19', '2022-04-05', 'Company XYZ', 'Production', 'Production Associate', 'Full-time', 'Direct', 'Consultancy O', 'PAN1124', 'ADHAR1124', 'Bank O', 'ACC1124', 'IFSC1124', '123 Branch Rd.', 'UAN1124', 'Wes', 'Cousin', '106 Family Rd.', '9900113344', 'Zoe', 'Sister', '107 Family Rd.', '1011224455', '2024-10-05');

-- Machine Maintenance department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/upload/photo.jpg', 'Harry Gray', 'Oliver Gray', '1987-04-23', 'Male', 'Married', 'A+', '4567890120', 'harry.maintenance@company.com', '8765432108', 'harrygray@gmail.com', 'Lilly Gray', 'Wife', '4567890120', '123 Maintenance St.', 'California', 'Los Angeles', '90001', 'Lilly Gray', 'Wife', '8765432108', '456 Home St.', 'California', 'Los Angeles', '90001', '2022-03-15', '2022-04-01', 'Company XYZ', 'Machine Maintenance', 'Maintenance Supervisor', 'Full-time', 'Direct', 'Consultancy P', 'PAN1238', 'ADHAR1238', 'Bank P', 'ACC1238', 'IFSC1238', '123 Branch St.', 'UAN1238', 'James', 'Brother', '123 Family St.', '1122334456', 'Nancy', 'Sister', '456 Family St.', '2233445567', '2024-10-01'),
('/upload/photo.jpg', 'Evelyn Lewis', 'Robert Lewis', '1990-01-30', 'Female', 'Single', 'B+', '4567890121', 'evelyn.maintenance@company.com', '8765432109', 'evelynlewis@gmail.com', 'Mark Lewis', 'Brother', '4567890121', '123 Maintenance Ave.', 'New York', 'New York City', '10001', 'Mark Lewis', 'Brother', '8765432109', '456 Home Ave.', 'New York', 'New York City', '10001', '2022-03-16', '2022-04-02', 'Company XYZ', 'Machine Maintenance', 'Maintenance Technician', 'Full-time', 'Referral', 'Consultancy Q', 'PAN5672', 'ADHAR5672', 'Bank Q', 'ACC5672', 'IFSC5672', '123 Branch Ave.', 'UAN5672', 'Charlie', 'Brother', '789 Family Ave.', '3344556678', 'Dave', 'Uncle', '101 Family Ave.', '4455667789', '2024-10-02'),
('/upload/photo.jpg', 'Jack Brown', 'Steve Brown', '1989-05-10', 'Male', 'Married', 'AB-', '4567890122', 'jack.maintenance@company.com', '8765432110', 'jackbrown@gmail.com', 'Jane Brown', 'Wife', '4567890122', '123 Maintenance Ln.', 'Texas', 'Dallas', '75001', 'Jane Brown', 'Wife', '8765432110', '456 Home Ln.', 'Texas', 'Dallas', '75001', '2022-03-17', '2022-04-03', 'Company XYZ', 'Machine Maintenance', 'Maintenance Engineer', 'Part-time', 'Campus', 'Consultancy R', 'PAN7894', 'ADHAR7894', 'Bank R', 'ACC7894', 'IFSC7894', '123 Branch Ln.', 'UAN7894', 'Stella', 'Aunt', '102 Family Ln.', '5566778890', 'Tim', 'Cousin', '103 Family Ln.', '6677889901', '2024-10-03'),
('/upload/photo.jpg', 'Emma Johnson', 'Chris Johnson', '1993-11-05', 'Female', 'Single', 'O-', '4567890123', 'emma.maintenance@company.com', '8765432111', 'emmajohnson@gmail.com', 'Olivia Johnson', 'Sister', '4567890123', '123 Maintenance Blvd.', 'Ohio', 'Columbus', '43201', 'Olivia Johnson', 'Sister', '8765432111', '456 Home Blvd.', 'Ohio', 'Columbus', '43201', '2022-03-18', '2022-04-04', 'Company XYZ', 'Machine Maintenance', 'Maintenance Trainee', 'Internship', 'Direct', 'Consultancy S', 'PAN3347', 'ADHAR3347', 'Bank S', 'ACC3347', 'IFSC3347', '123 Branch Blvd.', 'UAN3347', 'Uma', 'Sister', '104 Family Blvd.', '7788990012', 'Vik', 'Brother', '105 Family Blvd.', '8899002233', '2024-10-04'),
('/upload/photo.jpg', 'Zoe Wilson', 'Kate Wilson', '1994-07-21', 'Female', 'Married', 'A+', '4567890124', 'zoe.maintenance@company.com', '8765432112', 'zoewilson@gmail.com', 'Sam Wilson', 'Brother', '4567890124', '123 Maintenance Rd.', 'Florida', 'Miami', '33101', 'Sam Wilson', 'Brother', '8765432112', '456 Home Rd.', 'Florida', 'Miami', '33101', '2022-03-19', '2022-04-05', 'Company XYZ', 'Machine Maintenance', 'Maintenance Associate', 'Full-time', 'Direct', 'Consultancy T', 'PAN1125', 'ADHAR1125', 'Bank T', 'ACC1125', 'IFSC1125', '123 Branch Rd.', 'UAN1125', 'Wes', 'Cousin', '106 Family Rd.', '9900113344', 'Zoe', 'Sister', '107 Family Rd.', '1011224455', '2024-10-05');

-- SOP | WI department
INSERT INTO joining_forms (photo_url, full_name, fathers_name, date_of_birth, gender, marital_status, blood_group, official_contact_no, official_mail_id, personal_contact_no, personal_mail_id, present_address_name, present_address_relation, present_address_contact_no, present_address_full_address, present_address_state, present_address_district_city, present_address_pin_code, permanent_address_name, permanent_address_relation, permanent_address_contact_no, permanent_address_full_address, permanent_address_state, permanent_address_district_city, permanent_address_pin_code, date_of_interview, date_of_joining, company_name, department, designation, employee_type, mode_of_recruitment, reference_consultancy, pan_no, adhar_no, bank, account_no, ifsc_code, branch_address, uan_no, e_name1, e_relation1, e_address1, e_contact_no1, e_name2, e_relation2, e_address2, e_contact_no2, date)
VALUES 
('/upload/photo.jpg', 'Chloe Thomas', 'Adam Thomas', '1985-09-14', 'Female', 'Married', 'B+', '5678901230', 'chloe.sop@company.com', '8765432107', 'chloethomas@gmail.com', 'Michael Thomas', 'Husband', '5678901230', '123 SOP St.', 'California', 'Los Angeles', '90001', 'Michael Thomas', 'Husband', '8765432107', '456 Home St.', 'California', 'Los Angeles', '90001', '2022-03-15', '2022-04-01', 'Company XYZ', 'SOP | WI', 'SOP Coordinator', 'Full-time', 'Direct', 'Consultancy U', 'PAN1239', 'ADHAR1239', 'Bank U', 'ACC1239', 'IFSC1239', '123 Branch St.', 'UAN1239', 'Alice', 'Sister', '123 Family St.', '1122334456', 'Bob', 'Brother', '456 Family St.', '2233445567', '2024-10-01'),
('/upload/photo.jpg', 'James Hall', 'Robert Hall', '1995-02-26', 'Male', 'Single', 'AB-', '5678901231', 'james.sop@company.com', '8765432108', 'jameshall@gmail.com', 'Kate Hall', 'Sister', '5678901231', '123 SOP Ave.', 'New York', 'New York City', '10001', 'Kate Hall', 'Sister', '8765432108', '456 Home Ave.', 'New York', 'New York City', '10001', '2022-03-16', '2022-04-02', 'Company XYZ', 'SOP | WI', 'SOP Specialist', 'Full-time', 'Referral', 'Consultancy V', 'PAN5673', 'ADHAR5673', 'Bank V', 'ACC5673', 'IFSC5673', '123 Branch Ave.', 'UAN5673', 'Charlie', 'Brother', '789 Family Ave.', '3344556678', 'Dave', 'Uncle', '101 Family Ave.', '4455667789', '2024-10-02'),
('/upload/photo.jpg', 'Sophia King', 'Michael King', '1990-07-30', 'Female', 'Single', 'O-', '5678901232', 'sophia.sop@company.com', '8765432109', 'sophiaking@gmail.com', 'Olivia King', 'Sister', '5678901232', '123 SOP Ln.', 'Texas', 'Dallas', '75001', 'Olivia King', 'Sister', '8765432109', '456 Home Ln.', 'Texas', 'Dallas', '75001', '2022-03-17', '2022-04-03', 'Company XYZ', 'SOP | WI', 'SOP Analyst', 'Part-time', 'Campus', 'Consultancy W', 'PAN7895', 'ADHAR7895', 'Bank W', 'ACC7895', 'IFSC7895', '123 Branch Ln.', 'UAN7895', 'Stella', 'Aunt', '102 Family Ln.', '5566778890', 'Tim', 'Cousin', '103 Family Ln.', '6677889901', '2024-10-03'),
('/upload/photo.jpg', 'Liam Carter', 'Steven Carter', '1992-06-11', 'Male', 'Single', 'A+', '5678901233', 'liam.sop@company.com', '8765432110', 'liamcarter@gmail.com', 'Jessica Carter', 'Sister', '5678901233', '123 SOP Blvd.', 'Ohio', 'Columbus', '43201', 'Jessica Carter', 'Sister', '8765432110', '456 Home Blvd.', 'Ohio', 'Columbus', '43201', '2022-03-18', '2022-04-04', 'Company XYZ', 'SOP | WI', 'SOP Intern', 'Internship', 'Direct', 'Consultancy X', 'PAN3348', 'ADHAR3348', 'Bank X', 'ACC3348', 'IFSC3348', '123 Branch Blvd.', 'UAN3348', 'Uma', 'Sister', '104 Family Blvd.', '7788990012', 'Vik', 'Brother', '105 Family Blvd.', '8899002233', '2024-10-04'),
('/upload/photo.jpg', 'Ava Young', 'Benjamin Young', '1988-03-08', 'Female', 'Married', 'B+', '5678901234', 'ava.sop@company.com', '8765432111', 'avayoung@gmail.com', 'Henry Young', 'Husband', '5678901234', '123 SOP Rd.', 'Florida', 'Miami', '33101', 'Henry Young', 'Husband', '8765432111', '456 Home Rd.', 'Florida', 'Miami', '33101', '2022-03-19', '2022-04-05', 'Company XYZ', 'SOP | WI', 'SOP Coordinator', 'Full-time', 'Direct', 'Consultancy Y', 'PAN1126', 'ADHAR1126', 'Bank Y', 'ACC1126', 'IFSC1126', '123 Branch Rd.', 'UAN1126', 'Wes', 'Cousin', '106 Family Rd.', '9900113344', 'Zoe', 'Sister', '107 Family Rd.', '1011224455', '2024-10-05');

