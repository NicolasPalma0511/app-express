const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Aplicacion Express Laboratorio 04 - Nicolas Palma Rodriguez');
});

app.get('/clientes', (req, res) => {
    const clientes = ['Pepe Diaz', 'Juan Medina', 'Alfredo Zegarra'];
    res.send(clientes);
});

app.get('/productos', (req, res) => {
    const productos = ['Caja de temperas', 'Caja de lapiceros', 'Cuadernos Layconsa'];
    res.send(productos);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
