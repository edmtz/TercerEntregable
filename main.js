const express = require("express");

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Bienvenidos a Express')
})

let visitas = 0;

app.get('/visitas', (req, res) => {
    visitas++;  
    res.send(`La cantidad de visitas es de ${visitas}`)
})

app.get('/fyh', (req, res) => {
    const now = new Date();
    const fyh = now.toLocaleString()
    res.json({fyh})
}) 

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})