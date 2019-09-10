const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/LABB'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/LABB/index.html'));
});

app.listen(port, () => `App listening on port ${port}`);