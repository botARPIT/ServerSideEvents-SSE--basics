import http from 'node:http'
import EventEmitter from 'node:events'

const emitter = new EventEmitter()


const server = http.createServer((req, res) => {
    //Basic http endpoint
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'application/json'})
        const response = {message: "This is a message from the server", time: new Date().toLocaleTimeString()}
        res.end(JSON.stringify(response))
    }
    //SSE Endpoint
    if(req.url === '/stream'){
        res.writeHead(200, {"content-type": "text/event-stream",
            "cache-control": "no-cache",
            connection: "keep-alive",
            "access-control-allow-origin": "*"
        })
        res.write(`retry:5000\n`)

        emitter.on('User logged in', (user) => {
            res.write(JSON.stringify(user))
        })

        setInterval(() => {
            emitter.emit('User logged in', {id: (Math.random() * 10).toFixed(0), username: "Alexander", time: new Date().toLocaleTimeString()})
            res.write(`\nThe time is ${String(new Date().toLocaleTimeString())}\n`)
        }, 1000)
    }
})

server.listen(3001, () => {
    console.log("Server running")
})

