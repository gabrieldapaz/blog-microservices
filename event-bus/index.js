const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
// Middleware that extract the entire body portion of an
// incoming request stream and exposes it on req.body.
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  // Missing handling code to avoid one of them fall.
  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
