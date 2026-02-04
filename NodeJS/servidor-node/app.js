const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200
    let url = request.url
    switch (url) {
        case "/":
            response.setHeader('Content-Type', 'application/json')
            let data = {
                message: "Welcome to the home page!",
                status: "success"
            }
            response.end(enviarJSON(data))
            break;

        case "/about":
            response.setHeader('Content-Type', 'text/plain')
            response.end('This is the about page.\n')
            break;
            
        default:
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/plain')
            response.end('404 Not Found\n')
            break;
    }
})

function enviarJSON(data){
    return JSON.stringify(data)
}

server.listen(port, hostname, () => {
    console.log(`Escuchando en el puerto http://${hostname}:${port}/`)
})
