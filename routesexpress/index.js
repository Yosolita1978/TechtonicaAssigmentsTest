// this will be your express server 

import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring path middleware
const __dirname = path.resolve();

//Create a route for the index
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client', 'index.html'));

});

//Create rout for the about html
app.get('/aboutme', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client', 'about.html'));

});

app.use( (req, res) =>{
    res.status(404);
    res.sendFile(path.join(__dirname, 'client', '404.html'));
})

app.listen(PORT, () =>{ console.log(`HOLA! this server is running on port ${PORT}`)});