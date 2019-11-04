const express = require('express');
const app = express();
const port = 3000;
var router = express.Router();

app.get('/', (req,res) => {res.send('Hello World!')});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

app.listen(port, () => console.log(`Example app listening on ${port}`));