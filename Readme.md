# Simple Server-Sent Events (SSE) Project

This project demonstrates a simple **real-time data streaming server** using **Node.js** and **Server-Sent Events (SSE)**.  
It provides a minimal, self-contained example to help you understand the **core concepts of event emitters** and **one-way data streaming**.

---

## 🚀 Features

- **Real-time Streaming** – Continuous, one-way stream of data from server to client.  
- **Decoupled Architecture** – Uses `EventEmitter` to separate data generation (time, user events) from HTTP streaming.  
- **Event-Based Communication** – Sends named events (e.g., `"User logged in"`) over the stream.  
- **Connection Management** – Handles client disconnections gracefully by clearing intervals & removing listeners.  
- **Basic API Endpoint** – Provides a REST endpoint at `/` for basic JSON responses.

---

## 🛠️ Technologies Used

- **[Node.js](https://nodejs.org/)** – JavaScript runtime environment.  
- **http module** – Built-in Node.js module for creating the server.  
- **events module** – Built-in Node.js `EventEmitter` for publish-subscribe event handling.  

---

## 📦 Getting Started

### ✅ Prerequisites
- Install [Node.js](https://nodejs.org/) on your machine.

### 🔧 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# No dependencies required 🎉


    
