
<h1 align="center" style="font-weight: bold;">Nodejs API</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>

 
</p>


<p align="center">A simple Node.js API using Express and MySQL to manage schools.</p>


<p align="center">
<a href="https://youtu.be/OPyFbniiCfA">Demo</a>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Nodejs
- Express.js
- MySQL
- Postman

<h2 id="started">🚀 Getting started</h2>

How to Run Project Locally

<h3>Prerequisites</h3>

 prerequisites necessary for running your project.

- Node.js
- MySQL
- NPM


<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api

```

<h3>Config .env variables</h2>



```yaml
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=school_management
PORT=3000
```

<h3>Starting</h3>

How to start your project

```bash
node app.js

```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/listSchools?latitude=lat&longitude=lon</kbd>     |List schools sorted by distance 
| <kbd>POST /api/addSchooll</kbd>     |  Add a new school[request details]

<h3 id="get-auth-detail">GET /api/listSchools?latitude=39.78&longitude=-89.64</h3>

**RESPONSE**
```json
[
    {
        "id": 1,
        "name": "Springfield Elementary",
        "address": "742 Evergreen Terrace, Springfield",
        "latitude": 39.78,
        "longitude": -89.64,
        "distance": 0.0
    },
    {
        "id": 2,
        "name": "Shelbyville High",
        "address": "123 Main St, Shelbyville",
        "latitude": 39.90,
        "longitude": -89.70,
        "distance": 12.3
    }
]

```

<h3 id="post-auth-detail">POST /api/addSchool</h3>

**REQUEST**
```json
{
    "name": "Springfield Elementary",
    "address": "742 Evergreen Terrace, Springfield",
    "latitude": 39.78,
    "longitude": -89.64
}

```

**RESPONSE**
```json
{
    "message": "School added successfully",
    "schoolId": 1
}

```

