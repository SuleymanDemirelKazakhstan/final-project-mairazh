const express = require('express')
const app = express()
const port = 4000;

app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', (req, res) => {
 


});

app.listen(port)