import { FlightData } from '../types/flightTypes';

export const flightData: FlightData = {

    departureCity: 'Boston',

    destinationCity: 'London',

    passenger: {
        name: 'Mohammad Ajij',
        address: 'Ahmedabad',
        city: 'Ahmedabad',
        state: 'Gujarat',
        zipCode: '380001'
    },

    payment: {
        cardType: 'visa',
        cardNumber: '4111111111111111',
        cardMonth: '12',
        cardYear: '2030',
        nameOnCard: 'Mohammad Ajij'
    }
};