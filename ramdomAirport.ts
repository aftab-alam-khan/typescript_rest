export interface Airport{
    airlinerName: string,
    airportLocation: string,
    airportCode: string,
    airportName: string
};

export class AirportNotFoundError extends Error{
    constructor(message: string) {
        super(message);
        this.name = "AirportNotFoundError";
    }
    
}


export const airportArray: Airport[] = [
    { airlinerName: 'Alaska Airlines', airportLocation: 'Albany', airportCode: 'ALB', airportName: 'Albany International Airport' },
    { airlinerName: 'Allegiant Air', airportLocation: 'Binghamton', airportCode: 'BGM', airportName: 'Greater Binghamton Airport (Edwin A. Link Field)' },
    { airlinerName: 'American Airlines', airportLocation: 'Buffalo', airportCode: 'BUF', airportName: 'Buffalo Niagara International Airport' },
];


export function ramdomAirport(): Airport {
    const airportData = airportArray[Math.floor(Math.random() * airportArray.length)];
    return airportData
}

export class AirportLookupService{
    getAirportByCode(code: string): Airport {
        const airport = airportArray.find((airport) => (airport.airportCode === code));
        if (airport === undefined) {
            console.log(`No entires in the airportArray had airportCode key: '${code}'`);
            throw new AirportNotFoundError(`Unable to find Airport with code: '${code}'`);  // single-quote is convention for dev.
        }
        return airport;
    }


}

// get a webserver https://www.npmjs.com/package/typescript-rest  == done

// give aiport to give full name{location like}
// give a flight code {ariving/departing airport}
// give a airport code get  all the departing/arriving flight code.

// https://mikro-orm.io/docs/defining-entities
// decorator vs closer
// Presentational vs container components


// postgresql db
