// const { Client } = require('pg');

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "password",
//   database: "test1"
// });

// client.on('error', err => {
//   console.error('something bad has happened!', err.stack)
// })

// client.connect(err => {
//   if (!err) {
//     console.log('client has connected')
//   }
// })

// client.query('Select * from student', (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end(err => {
//     if (!err) {
//       console.log('client has disconnected')
//     };
//   });
// });