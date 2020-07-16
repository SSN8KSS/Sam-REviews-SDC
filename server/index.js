require('newrelic');
const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3004;
// const models = require('./models.js');

app.use('/reviews', express.static('public'));

app.get('/reviews/:hotelId', (req, res) => {
  const hotelId = req.params.hotelId || 2;
  const query = 'SELECT * FROM reviews.byhotel WHERE id = ?;';
  db.execute(query, [hotelId], { prepare: true })
    .then(results => res.status(200).send(JSON.stringify(results.rows)))
    .catch(err => { console.log(err); });
});

app.listen(port, () => console.log(`Reviews app listening at ${port}`));
