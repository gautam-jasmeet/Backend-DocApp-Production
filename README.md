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
department VARCHAR(50) NULL,
designation VARCHAR(50) NULL,
employee_type VARCHAR(50) NULL,
mode_of_recruitment VARCHAR(50) NULL,
reference_consultancy VARCHAR(100) NULL,
pan_no VARCHAR(20) NULL,
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
