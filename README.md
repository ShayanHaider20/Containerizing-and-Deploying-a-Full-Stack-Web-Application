# 🐳 Containerizing and Deploying a Full-Stack To-Do Application  

🚀 **Dockerized To-Do App** | **React.js ⚛ | Node.js 🚀 | MongoDB 🗄 | Docker 🐳 | Azure ☁**  

## 📌 Project Overview  
This project implements a full-stack **To-Do Application**, containerized using **Docker** for scalable, portable, and environment-independent deployment. It follows **DevOps best practices** and supports **CI/CD** pipelines for automated deployment.  

---

## 🏗️ Tech Stack  

| **Technology**   | **Purpose**              |
|-----------------|--------------------------|
| **React.js** ⚛  | Frontend UI              |
| **Node.js** 🚀  | Backend (REST API)       |
| **Express.js**  | Web framework for Node.js |
| **MongoDB** 🗄  | Database for storing tasks |
| **JWT** 🔑      | Secure Authentication     |
| **Docker** 🐳   | Containerization         |
| **Azure** ☁     | Cloud Deployment         |

---

## 🚀 Features  

✅ **User Authentication** – Secure **JWT-based login & registration** 🔐  
✅ **To-Do Management** – Add, update, and delete tasks ✍️  
✅ **Containerized Deployment** – Uses **Docker multi-stage builds** for optimized images 🐳  
✅ **Environment Variables Support** – Configured with `.env` for security & flexibility 🔧  
✅ **CI/CD Integration** – Automated deployment with **Azure & Docker Hub** 🚀  
✅ **Scalability** – Efficient resource utilization via **self-terminating containers** ⚡  

---

## 📥 Installation & Setup  

### 🔹 1️⃣ Clone the Repository  
```sh
git clone https://github.com/ahmedalisheikh4/dockerized-todo-app.git
cd dockerized-todo-app
```

### 🔹 2️⃣ Install Dependencies  
Navigate to the **frontend** and **backend** directories:  
```sh
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 🔹 3️⃣ Configure Environment Variables  
Create a `.env` file inside the **backend** directory and add:  
```sh
MONGO_URI=Your_MongoDB_URI
GMAIL_USERNAME=your_email@example.com
GMAIL_PASSWORD=your_app_password
PORT=8000
JWT_SECRET=thisisasecretkey
```

### 🔹 4️⃣ Run the Application  
#### **📌 Start Backend (Express.js & MongoDB)**  
```sh
cd backend
nodemon server
```
#### **📌 Start Frontend (React.js)**  
```sh
cd frontend
npm start
```

---

## 🐳 Dockerized Deployment  

### 🔹 1️⃣ Build Docker Images  
```sh
docker-compose build
```

### 🔹 2️⃣ Run the Containers  
```sh
docker-compose up -d
```
📌 **How it works?**  
✔ The **frontend, backend, and MongoDB** services run in **separate containers**  
✔ Containers **communicate via Docker network** using **environment variables**  

---

## 🌍 Live Preview  
🔗 **Live Demo:** [Click here to check deployment](https://devopssat.azurewebsites.net/api) 🚀  

---

## 🛠️ Contributing  
💡 **Want to contribute?**  
1. Fork this repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push the branch (`git push origin feature-name`)  
5. Create a **Pull Request**  

🙌 **Your contributions are welcome!**  

---

## 📝 License  
📜 This project is licensed under the **MIT License**.  

---

### 📩 Need Help?  
Feel free to reach out via **[GitHub Issues](https://github.com/ahmedalisheikh4/dockerized-todo-app/issues)** or contact me at ✉️ **your_email@example.com**  

🚀 **Happy Coding!** 🎯  

---

This README file is now **well-structured, visually appealing, and easy to follow**! 🎉 Let me know if you need any modifications! 🚀
