import express from 'express';
import { Server } from 'typescript-rest';
import {HelloService,
  FlightService,
  AirportService,
  AirportCodeService,
  FlightCodeService} from './RestFile'



let app: express.Application = express();
Server.buildServices(app, HelloService,
  FlightService,
  AirportService,
  AirportCodeService,
  FlightCodeService);

app.listen(3000, function () {
  console.log('Rest Server listening on port 3000!');
});
