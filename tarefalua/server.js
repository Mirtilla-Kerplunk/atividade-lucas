const http = require('http');
const fs = require('fs');
const path = require('path'); // Se eu n usasse isso não ia ter jeito de rodar, pq por algum motivo sobrecarregava o servidor e crashava

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    let fileName;

    if (req.url === '/') {
        fileName = 'index.html';
    } else if (req.url === '/pagina-1') {
        fileName = 'pagina-1.html';
    } else if (req.url === '/pagina-2') {
        fileName = 'pagina-2.html';
    } else if (req.url === '/pagina-3') {
        fileName = 'pagina-3.html';
    } else if (req.url === '/pagina-4') {
        fileName = 'pagina-4.html';
    } else if (req.url === '/pagina-5') {
        fileName = 'pagina-5.html';
    } if (!fileName) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Rota não encontrada');
}

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Arquivo não encontrado');
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});

server.listen(port, hostname, () => { console.log(`Servidor rodando em http://${hostname}:${port}/`); });