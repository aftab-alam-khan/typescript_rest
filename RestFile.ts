import { Path, GET, PathParam, Context, ServiceContext, POST, DELETE } from 'typescript-rest';
// import {
//   ramdomFlight
// } from './ramdomFlights';

import { client } from './database/connection';

import {
  Airport,
  airportArray,
  AirportLookupService,
  AirportNotFoundError,
  ramdomAirport,
} from './ramdomAirport';
import { NotFoundError } from 'typescript-rest/dist/server/model/errors';

client.connect((err: Error): void => {
  if (!err) {
    console.log('client has connected');
  }
});

@Path('/healthcheck')
class HelloService {
  @GET
  sayHello(): string {
    return `Health is good.`;
  }
}

@Path('/airports')
class GetAirportService {
  @GET
  getAirports(): any {
    client.query('Select * from airports', (err: Error, result: any): any => {
      if (!err) {
        console.log('if block getAirports', result.rows);
        return result.rows;
      }
    });
    client.end;
  }
}

@Path('/airports')
class CreateAirportService {
  @POST
  createAirports(data: any): any {
    const airports = data;
    let insertQuery = `insert into airports("airliner_name", "airport_location", "airport_code", "airport_name") values('${airports.airliner_name}', '${airports.airport_location}', '${airports.airport_code}', '${airports.airport_name}')`;
    console.log(insertQuery);
    client.query(insertQuery, (err: Error, result: any) => {
      if (!err) {
        console.log('Insertion was successful');
        return 'Insertion was successful';
      } else {
        console.log(err.message);
      }
    });
    client.end;
  }
}

@Path("/airports")
class DeleteAirportService{
  @Path("/:airport_code")
  @DELETE
  deleteAirports(@PathParam('airport_code') airport_code: string): any {
    let insertQuery = `delete from airports where "airport_code"='${airport_code}'`;
    console.log(insertQuery);
      client.query(insertQuery, (err: Error, result: any)=>{
          if(!err){
            console.log('Deletion was successful');
            return "Deletion was successful";
          }
          else{ console.log(err.message) }
      })
      client.end;
  }
  }

@Path('/flights')
class GetFlightService {
  @GET
  getFlights(): any {
    client.query('Select * from flights', (err: Error, result: any): any => {
      if (!err) {
        console.log('if block getflights', result.rows);
        return result.rows;
      }
    });
    client.end;
  }
}

@Path('/flights')
class CreateFlightService {
  @POST
  createFlights(data: any): any {
    const flights = data;
    var today = new Date().toLocaleDateString('en-US');
    let insertQuery = `insert into flights(flight_number, departure_location, destination_location, land_date_time, take_off_date_time) values('${flights.flight_number}', '${flights.departure_location}', '${flights.destination_location}', '${today}', '${today}')`;
    console.log(insertQuery);
    client.query(insertQuery, (err: Error, result: any) => {
      if (!err) {
        console.log('Insertion was successful');
        return  'Insertion was successful';
      } else {
        console.log(err.message);
      }
    });
    client.end;
  }
}

@Path("/flights")
class DeleteFlightService{
  @Path("/:flightNumber")
  @DELETE
  deleteFlight(@PathParam('flightNumber') flightNumber: string): any {
    let insertQuery = `delete from flights where "flight_number"='${flightNumber}'`;
    console.log(insertQuery);
      client.query(insertQuery, (err: Error, result: any)=>{
          if(!err){
            console.log('Deletion was successful');
            return "Deletion was successful";
          }
          else{ console.log(err.message) }
      })
      client.end;
  }
  }

export {
  HelloService,
  GetAirportService,
  CreateAirportService,
  DeleteAirportService,
  GetFlightService,
  CreateFlightService,
  DeleteFlightService
};


// https://mikro-orm.io/