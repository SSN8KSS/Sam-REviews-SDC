const cassandra = require('cassandra-driver');

const connection = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'reviews',
});

// let query = 'SELECT review_date FROM reviews.byhotel WHERE id = ?;';

// connection.execute(query, [hotelid])
//   .then(result => console.log('Hotels', result.rows[1]))
//   .then(() => {
//     connection.shutdown();
//   });

module.exports = connection;
