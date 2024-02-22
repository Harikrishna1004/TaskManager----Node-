const express = require('express');
const mongoose = require('mongoose');
const taskRoute = require('./routes/tasks')
const app = express();

app.use(express.json());

app.use('/api', taskRoute);


const PORT = 5000;

mongoose.connect("mongodb+srv://admin:1234@nodeapi.dwfqrvc.mongodb.net/").then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log('Connected to the server');
    })
}).catch();