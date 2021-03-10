const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 8080;

app.use(cors());

app.post('/quote', (req, res) => {
    res.json({ok: true});
});

app.listen(post, () => {
    console.log(`listening on port ${port}}`);
});