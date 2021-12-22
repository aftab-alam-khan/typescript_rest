interface Flight{
    flightNumber: string,
    from: string,
    to: string,
    landDateTime: Date,
    takeOffDateTime: Date
};

const flightArray: Flight[] = [
    { flightNumber: '006E5', from: 'kld', to: 'abc', landDateTime: new Date(), takeOffDateTime: new Date() },
    { flightNumber: '006A2', from: 'gbd', to: 'poi', landDateTime: new Date(), takeOffDateTime: new Date() },
    { flightNumber: '006A3', from: 'abc', to: 'tdd', landDateTime: new Date(), takeOffDateTime: new Date() }
];

// write a function which return a ramdom flight details


export function ramdomFlight(): Flight {
    async () => {
        fetch('./Flight_MOCK_DATA.json').then(r => console.log(r.json()));
    }
    const flightData = flightArray[Math.floor(Math.random() * flightArray.length)];
    return flightData
}


// get a webserver https://www.npmjs.com/package/typescript-rest  == done

// give aiport to give full name{location like}
// give a flight code {ariving/departing airport}
// give a airport code get  all the departing/arriving flight code.

// https://mikro-orm.io/docs/defining-entities
// decorator vs closer
// Presentational vs container components
