const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 8080;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post('/quote', (req, res) => {
    const {body}  = req;
    console.log(body.firstName);
    res.json({ok: true});
});

app.listen(port, () => {
    console.log(`listening on port ${port}}`);
});