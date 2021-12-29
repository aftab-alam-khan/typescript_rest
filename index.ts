import express from 'express';
import { Server } from 'typescript-rest';
const dotenv = require('dotenv');
dotenv.config();
// import {HelloService,
//   FlightService,
//   AirportService,
//   AirportCodeService,
//   FlightCodeService,
//   GetAirportService
// } from './RestFile'
  
import {HelloService,
  GetAirportService,
  CreateAirportService,
  DeleteAirportService,
  GetFlightService,
  CreateFlightService,
  DeleteFlightService} from './RestFile'



let app: express.Application = express();
// Server.buildServices(app, HelloService,
//   FlightService,
//   AirportService,
//   AirportCodeService,
//   FlightCodeService,
//   GetAirportService);

Server.buildServices(app,
  HelloService,
  GetAirportService,
  CreateAirportService,
  DeleteAirportService,
  GetFlightService,
  CreateFlightService,
  DeleteFlightService);

app.listen(process.env.LOCALHOST_PORT, function () {
  console.log(`Rest Server listening on port ${process.env.LOCALHOST_PORT}!`);
});
