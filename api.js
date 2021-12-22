

const client = require('./database/connection');
const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is now listening at port 3000");
});

client.connect(err => {
  if (!err) {
    console.log('client has connected')
  }
})

app.get('/', (req, res) => {
  res.send('Health is good')
})

// Get All airports
app.get('/airports', (req, res) => {
  client.query("Select * from airports", (err, result) => {
    if (!err) {
      res.send(result.rows)
    }
  });
  client.end;
});

// Add New airport
app.post('/airports', (req, res) => {
  const airports = req.body;
  let insertQuery = `insert into airports("airliner_name", "airport_location", "airport_code", "airport_name") values('${airports.airliner_name}', '${airports.airport_location}', '${airports.airport_code}', '${airports.airport_name}')`;
  console.log(insertQuery);
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send('Insertion was successful')
    }
    else { console.log(err.message) }
  })
  client.end;
})

// // Delete a flights
app.delete('/airports/:airport_code', (req, res)=> {
  let insertQuery = `delete from airports where "airport_code"='${req.params.airport_code}'`;
console.log(insertQuery);
  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


// Get All flights
app.get('/flights', (req, res) => {
  client.query("Select * from flights", (err, result) => {
    if (!err) {
      res.send(result.rows)
    }
  });
  client.end;
});

// Add New flights
app.post('/flights', (req, res) => {
  const flights = req.body;
  var today = new Date().toLocaleDateString("en-US");
  let insertQuery = `insert into flights(flight_number, departure_location, destination_location, land_date_time, take_off_date_time) values('${flights.flight_number}', '${flights.departure_location}', '${flights.destination_location}', '${today}', '${today}')`;
  console.log(insertQuery);
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send('Insertion was successful')
    }
    else { console.log(err.message) }
  })
  client.end;
})

// // Delete a flights
app.delete('/flights/:flightNumber', (req, res)=> {
  let insertQuery = `delete from flights where "flight_number"='${req.params.flightNumber}'`;
console.log(insertQuery);
  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



// convert this file in .ts
// look docker volume
// try to look use pg database in typescript


// CREATE TABLE accounts (
// 	user_id serial PRIMARY KEY,
// 	username VARCHAR ( 50 ) UNIQUE NOT NULL,
// 	password VARCHAR ( 50 ) NOT NULL,
// 	email VARCHAR ( 255 ) UNIQUE NOT NULL,
// 	created_on TIMESTAMP NOT NULL,
//         last_login TIMESTAMP 
// );

// create table airports(
//   flight_number varchar(25) not null,
//   departure_location varchar(25) not null,
//   destination_location varchar(25) not null,
//   land_date_time timestamp not null,
//   take_off_date_time timestamp not null,
//   primary key(flight_number)
// );


// {
//   "airlinerName": "American Airlines",
//   "airportLocation": "Buffalo",
//   "airportCode": "BUF",
//   "airportName": "Buffalo Niagara International Airport"
// }












































// client.on('error', err => {
//   console.error('something bad has happened!', err.stack)
// })


// client.end(err => {
//   if (!err) {
//     console.log('client has disconnected')
//   };
// });

// https://www.youtube.com/watch?v=HO5iiDaZO2E
// https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/

// // Get All Users
// app.get('/users', (req, res) => {
//   client.query("Select * from users", (err, result) => {
//     if (!err) {
//       res.send(result.rows)
//     }
//   });
//   client.end;
// });

// // Get User By Id
// app.get('/users/:id', (req, res) => {
//   client.query(`Select * from users where id=${req.params.id}`, (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//     }
//   });
//   client.end;
// })

// // Add New User
// app.post('/users', (req, res) => {
//   const user = req.body;
//   let insertQuery = `insert into users(id, firstname, lastname, location) values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send('Insertion was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// // Update User Details
// app.put('/users/:id', (req, res) => {
//   let user = req.body;
//   let updateQuery = `update users 
//                     set firstname = '${user.firstname}',
//                     lastname = '${user.lastname}',
//                     location = '${user.location}'
//                     where id = ${req.params.id}`

//   client.query(updateQuery, (err, result) => {
//     if (!err) {
//       res.send('Update was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// // Delete a User
// app.delete('/users/:id', (req, res)=> {
//   let insertQuery = `delete from users where id=${req.params.id}`

//   client.query(insertQuery, (err, result)=>{
//       if(!err){
//           res.send('Deletion was successful')
//       }
//       else{ console.log(err.message) }
//   })
//   client.end;
// })



