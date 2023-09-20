const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/clientes', (req, res) => {
    res.sendFile('./static/clientes.html',{
        root: __dirname
    })
})

app.get('/productos', (req, res) => {
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
})