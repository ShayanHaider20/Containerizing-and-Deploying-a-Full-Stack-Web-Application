
# 🐳 Dockerized To-Do Application  

## 📌 Project Overview  
This project implements a **full-stack to-do application** with containerized **frontend, backend, and database services** using **Docker**. The goal is to enable **scalable, portable, and environment-independent deployment** with DevOps best practices.  

---

## 🏗️ Tech Stack  
- **Frontend:** React.js ⚛️  
- **Backend:** Node.js, Express.js 🚀  
- **Database:** MongoDB 🗄️  
- **Authentication:** JWT (JSON Web Token) 🔑  
- **DevOps Tools:** Docker, Docker Hub, Azure ☁️  

---

## 🚀 Features  
✔ **User Authentication** – Secure **JWT-based login & registration**.  
✔ **To-Do Management** – Add, update, and delete tasks.  
✔ **Containerized Deployment** – Uses **Docker multi-stage builds** for optimized images.  
✔ **Environment Variables Support** – Configured with `.env` for security & flexibility.  
✔ **CI/CD Integration** – Automated deployment with **Azure & Docker Hub**.  
✔ **Scalability** – Efficient resource utilization via **self-terminating containers**.  

---

## 📥 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/ahmedalisheikh4/dockerized-todo-app.git
cd dockerized-todo-app
```

### **2️⃣ Install Dependencies**  
Go to the `frontend` and `backend` directories and run:  
```sh
cd frontend
npm install
```
```sh
cd backend
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file inside the `backend` directory and add:  
```env
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
```

### **4️⃣ Run the Application**  

#### 🔹 Start Backend (Express.js & MongoDB)  
```sh
cd backend
nodemon server
```

#### 🔹 Start Frontend (React.js)  
```sh
cd frontend
npm start
```

---

## 🐳 Dockerized Deployment  

### **1️⃣ Build Docker Images**  
```sh
docker-compose build
```

### **2️⃣ Run the Containers**  
```sh
docker-compose up -d
```
- The **frontend, backend, and MongoDB** services run in separate containers.  
- Containers communicate via **Docker network** using environment variables.  

---

## 🌍 Live Preview  
🔗 **Check live preview here:** [https://devopssat.azurewebsites.net/api](https://devopssat.azurewebsites.net/api) 
