const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
// Middleware that extract the entire body portion of an
// incoming request stream and exposes it on req.body.
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  // Missing handling code to avoid one of them fall.
  axios
    .post('http://posts-clusterip-srv:4000/events', event)
    .catch(function (error) {
      console.log(error);
    });

  axios.post('http://comments-srv:4001/events', event).catch(function (error) {
    console.log(error);
  });

  axios.post('http://query-srv:4002/events', event).catch(function (error) {
    console.log(error);
  });

  axios.post('http://moderation:4003/events', event).catch(function (error) {
    console.log(error);
  });

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
