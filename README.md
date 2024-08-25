School Management API
This is a simple Node.js and Express API for managing schools. It includes functionality for adding schools, listing schools, and calculating distances between schools and a user's location. The API interacts with a MySQL database using the mysql2 library.

Prerequisites
Before running this project, make sure you have the following installed:

Node.js
MySQL
npm
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
Install the dependencies:

bash
Copy code
npm install
Set up the environment variables:

Create a .env file in the root directory of the project and add the following variables:

bash
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=school_management
PORT=3000
Replace your_database_host, your_database_user, your_database_password with your actual MySQL database credentials.

Set up your MySQL database:

Create a database called school_management.

Create a schools table with the following schema:

sql
Copy code
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
Run the application:

Start the server by running:

bash
Copy code
node app.js
The server will run on http://localhost:3000.

API Endpoints
Add a School
URL: /api/addSchool

Method: POST

Request Body:

json
Copy code
{
    "name": "School Name",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060
}
Success Response:

Code: 201

Content:

json
Copy code
{
    "message": "School added successfully",
    "schoolId": 1
}
Error Responses:

Code: 400 - Missing required fields or invalid data
Code: 409 - School already exists
Code: 500 - Database error
List Schools
URL: /api/listSchools

Method: GET

Query Parameters:

latitude - The latitude of the user's location.
longitude - The longitude of the user's location.
Success Response:

Code: 200

Content: A list of schools sorted by distance from the user's location.

json
Copy code
[
    {
        "id": 1,
        "name": "School 1",
        "address": "123 Main St",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "distance": 1.23
    },
    {
        "id": 2,
        "name": "School 2",
        "address": "456 Another St",
        "latitude": 40.7138,
        "longitude": -74.0160,
        "distance": 2.34
    }
]
Error Responses:

Code: 400 - Missing or invalid latitude and longitude
Code: 500 - Database error
Project Structure
bash
Copy code
.
├── controllers
│   └── schoolController.js    # Contains the logic for handling requests related to schools
├── models
│   └── db.js                  # Handles the MySQL database connection
├── routes
│   └── schoolRoutes.js        # Defines the routes for school-related API endpoints
├── .env                       # Environment variables file (not included in repo)
├── app.js                     # Entry point for the application
└── README.md                  # This file
How It Works
The application uses Express to handle HTTP requests and routes.
The database interactions are handled by the mysql2 library using promises.
The API includes endpoints to add a school and list schools, with distance calculations between the user's location and the schools.
The addSchool endpoint ensures that duplicate entries (same name and address) are not allowed.
The listSchools endpoint returns schools sorted by their distance from the provided latitude and longitude.
Troubleshooting
Common Issues
Database connection errors: Ensure that the MySQL credentials in your .env file are correct and that the MySQL server is running.
CORS issues: If accessing the API from a front-end application, you may need to handle CORS (Cross-Origin Resource Sharing).
License
This project is licensed under the MIT License - see the LICENSE file for details
 
