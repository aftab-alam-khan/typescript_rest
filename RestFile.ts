import { Path, GET, PathParam, Context, ServiceContext } from 'typescript-rest';
import {
  ramdomFlight
} from './ramdomFlights';

import {
  Airport,
  AirportLookupService,
  AirportNotFoundError,
  ramdomAirport
} from './ramdomAirport';
import { NotFoundError } from 'typescript-rest/dist/server/model/errors';

@Path('/healthcheck')
class HelloService {
  @GET
  sayHello(): string {
    return `Health is good.`;
  }
}

@Path('/flight')
class FlightService {
  @GET
  flighDetail(): {} {
    return ramdomFlight();
  }
}

@Path('/*')
class AirportService {
  @GET
  airportName(@Context context: ServiceContext, @PathParam('name') name: string): any {
    console.log(ramdomAirport());
    context.next()
  }
}

@Path('/flight')
class FlightCodeService {
  @Path(':code')
  @GET
  flightCode(@PathParam('code') name: string): {} {
    return ramdomFlight();
  }
}

@Path('/airport')
class AirportCodeService {
  @Path(':code')
  @GET
  airportCode(@PathParam('code') code: string): Airport {
    try {
      const airportLookup = new AirportLookupService();
      return airportLookup.getAirportByCode(code);
    } catch (error) {
      if (error instanceof AirportNotFoundError) {
        throw new NotFoundError(`The Airport code: '${code}' is not found.`);
      } else {
        throw error;
      }
    }
  }
}

export {
  HelloService,
  FlightService,
  AirportService,
  AirportCodeService,
  FlightCodeService
};