const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: 'https://medrug.kz',
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['Access-Control-Allow-Private-Network']
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Private-Network', 'true');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));



for (let i in products) {
    fs.readFile(path.join(__dirname, 'src/server/products', products[i].id + '.html'), function(error, data) {
        if (error) {
            console.error(`Error reading product file ${products[i].id}.html:`, error);
            return;
        }
        products[i].html = data.toString();
    });
}

app.get('/api/products', (req, res) => {
    console.log('GET /api/products');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(products);
    console.log('Sent products data');
});

app.get('*', (req, res) => {
    console.log(`GET ${req.url}`);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log('Sent index.html');
});

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Ensure the server listens on all network interfaces

app.listen(PORT, HOST, () => {
    console.log(`Server is running on https://${HOST}:${PORT}`);
});