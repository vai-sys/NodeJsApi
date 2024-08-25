School Management API
A simple Node.js API using Express and MySQL to manage schools.

Prerequisites
Node.js
MySQL
npm
Installation

Clone the repository:


git clone https://github.com/yourusername/school-management-api.git
cd school-management-api

Install dependencies:
npm install
Create .env file:


DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=school_management
PORT=3000


Setup MySQL database:
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);



Run the app:
node app.js
