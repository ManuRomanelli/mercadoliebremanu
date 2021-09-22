const express = require ('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');
app.use(express.static('publicPath'));

app.listen(4000,  () => {
    console.log("Levantando un servidor con Express")
});

app.get('/',(req,res) => {
    res.sendFile(__dirname, './views/home.html')
});