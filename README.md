# Project AJ - Job & Application Dashboard API

A full-stack Node.js + MongoDB application to manage job postings and applications, with a simple frontend dashboard.

![](img/str.png)

---

## 🚀 Features

- RESTful API for jobs and applications
- Frontend Dashboard with:
  - Job listing
  - Add new job via form
- MongoDB connection
- File upload ready (via `/uploads`)
- Environment config using `.env`

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- Docker (for MongoDB)
- HTML/CSS/JS (for dashboard)

---

## 📦 Installation

1. Clone the repo

```bash
git clone https://github.com/.git
cd project-aj
```
---
NPM Packages Used:

```bash
npm install express mongoose cors dotenv
```
---
Install dependencies

```bash
npm install
Create .env file
```
---
env
```
PORT=5000
MONGO_URI=mongodb://admin:pass123@localhost:27017
```
(Make sure MongoDB is running, or use Docker setup below.)

---

🐳 Run MongoDB via Docker
```bash
docker run -d --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=pass123 \
  mongo:6.0
```
---
🚀 Run the App
node server.js
Go to: ```http://localhost:5000```
---
📁 API Endpoints
Jobs
GET /api/jobs – List jobs
POST /api/jobs – Add new job
---
Applications
GET /api/applications – List applications
POST /api/applications – Submit application
---
Dashboard Preview
![img](img/pp.png)
HTML page with a form
Job listings loaded dynamically via JavaScript
Works directly in browser (no React needed)

