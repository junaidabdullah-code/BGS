const express = require("express");
const app = express();
const path = require('path')
const port = 4101;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'images.png'))
})
app.get('/about_img', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'about.png'))
})
app.get('/fac1', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'fac1.png'))
})
app.get('/fac2', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'fac2.png'))
})
app.get('/fac3', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'fac3.png'))
})
app.get('/server', (req, res) => {
    res.sendFile(path.join(__dirname,  'server.js'))
})
app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`);
})
