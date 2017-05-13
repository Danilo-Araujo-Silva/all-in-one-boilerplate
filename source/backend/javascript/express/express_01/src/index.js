const express = require('express');
const app = express();
const properties = require('./../../../../../shared/properties.js');

const host = properties.constants.backend.javascript.express.host;
const port = properties.constants.backend.javascript.express.port;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:10000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = app.listen(
  port,
  host,
  () => {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('Express server is listening at http://%s:%s.', host, port);
  }
);
