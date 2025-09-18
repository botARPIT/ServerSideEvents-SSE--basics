# Simple Server-Sent Events (SSE) Project

This project demonstrates a simple **real-time data streaming server** using **Node.js** and **Server-Sent Events (SSE)**.  
It provides a minimal, self-contained example to help you understand the **core concepts of event emitters** and **one-way data streaming**.

---

## 🚀 Features

- **Real-time Streaming** – Continuous, one-way stream of data from server to client
- **Decoupled Architecture** – Uses `EventEmitter` to separate data generation (time, user events) from HTTP streaming
- **Event-Based Communication** – Sends named events (e.g., `"User logged in"`) over the stream
- **Connection Management** – Handles client disconnections gracefully by clearing intervals & removing listeners
- **Basic API Endpoint** – Provides a REST endpoint at `/` for basic JSON responses

---

## 🛠️ Technologies Used

- **[Node.js](https://nodejs.org/)** – JavaScript runtime environment
- **http module** – Built-in Node.js module for creating the server
- **events module** – Built-in Node.js `EventEmitter` for publish-subscribe event handling

---

## 📦 Getting Started

### ✅ Prerequisites
- Install [Node.js](https://nodejs.org/) (version 14 or higher recommended)

### 🔧 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# No external dependencies required 🎉
```

### ▶️ Running the Server
```bash
npm start
# or
node server.js
```

The server will start on `http://localhost:3001`

---

## 📌 Usage

### 1. Test the Basic JSON Endpoint
```bash
curl http://localhost:3001/
```

Expected response:
```json
{
  "message": "SSE Server is running",
  "endpoints": {
    "stream": "/stream",
    "health": "/"
  }
}
```

### 2. Test the SSE Stream
To see the real-time stream, use curl with the `-N` (no buffering) flag:

```bash
curl -N http://localhost:3001/stream
```

You should see output like:
```
data: {"timestamp":"2024-01-15T10:30:45.123Z","message":"Server time update"}

event: user-action
data: {"action":"User logged in","userId":"user123","timestamp":"2024-01-15T10:30:50.456Z"}

data: {"timestamp":"2024-01-15T10:30:55.789Z","message":"Server time update"}
```

### 3. View in Browser
Open your browser and navigate to:
- `http://localhost:3001/` - JSON API endpoint
- `http://localhost:3001/stream` - Raw SSE stream (will display as plain text)

For a proper web client, create an HTML file with:
```html
<!DOCTYPE html>
<html>
<head>
    <title>SSE Client</title>
</head>
<body>
    <div id="messages"></div>
    <script>
        const eventSource = new EventSource('http://localhost:3001/stream');
        const messagesDiv = document.getElementById('messages');
        
        eventSource.onmessage = function(event) {
            const data = JSON.parse(event.data);
            messagesDiv.innerHTML += `<p>${data.timestamp}: ${data.message}</p>`;
        };
        
        eventSource.addEventListener('user-action', function(event) {
            const data = JSON.parse(event.data);
            messagesDiv.innerHTML += `<p><strong>${data.action}</strong> - User: ${data.userId}</p>`;
        });
    </script>
</body>
</html>
```

---

## 📂 Project Structure

```
.
├── server.js          # Main server file
├── package.json       # Project metadata and scripts
└── README.md         # This file
```

---

## 📚 Learning Concepts

### Server-Sent Events (SSE)
- A lightweight way to push events from server → client over HTTP
- One-way communication (server to client only)
- Automatic reconnection on connection loss
- Built-in browser support with `EventSource` API

### EventEmitter Pattern
- Decouples event generation from HTTP handling
- Allows multiple listeners for the same event
- Provides a clean pub-sub architecture
- Easy to test and maintain

### Connection Management
- Properly handle client disconnections
- Clean up intervals and event listeners to prevent memory leaks
- Graceful server shutdown

---

## 🔧 Configuration

You can modify the following constants in `server.js`:

```javascript
const PORT = 3001;                    // Server port
const TIME_INTERVAL = 5000;           // Time update interval (ms)
const USER_EVENT_INTERVAL = 10000;    // User event simulation interval (ms)
```

---

## 🐛 Troubleshooting

**Connection Issues:**
- Ensure no other service is running on port 3001
- Check firewall settings if accessing from another machine

**Memory Leaks:**
- The server automatically cleans up when clients disconnect
- Monitor server logs for connection/disconnection messages

**CORS Issues:**
- Add CORS headers if accessing from a different domain
- Current implementation allows all origins for development

---

## 🚀 Next Steps

Want to extend this project? Consider adding:

- **WebSocket Support** – For bi-directional communication
- **Authentication** – Secure your event streams
- **Event Persistence** – Store events in a database
- **Multiple Channels** – Different event streams for different topics
- **Rate Limiting** – Prevent abuse of the streaming endpoint
- **Docker Support** – Containerize the application

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**Happy Streaming! 🌊**