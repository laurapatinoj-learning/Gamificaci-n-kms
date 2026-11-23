// Servidor mínimo: entrega index.html (sin dependencias).
const http = require('http'), fs = require('fs'), path = require('path');
const file = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); return res.end('Error'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
}).listen(process.env.PORT || 3000, () => console.log('Oficina Land lista'));
