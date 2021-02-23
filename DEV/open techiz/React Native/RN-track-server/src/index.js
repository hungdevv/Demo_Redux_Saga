const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:admin@cluster0.ll9p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    userNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo!....');
});

mongoose.connection.on('error', (err) => {
    console.error("Error...", err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening 3000')
})