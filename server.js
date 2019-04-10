const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(${__dirname}/travportfolio2/dist/));

app.get('*', (req, res) => {
    res.sendFile(`./travportfolio2/dist/index.html`);


app.listen(process.env.PORT || 8080)