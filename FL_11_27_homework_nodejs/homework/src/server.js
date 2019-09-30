const express = require('express')
const http = require('http');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/car', routes);

http.createServer(app);
app.listen(PORT, () => console.log(`Server on port ${PORT}`))