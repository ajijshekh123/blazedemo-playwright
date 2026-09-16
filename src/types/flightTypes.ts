export interface PassengerData {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface PaymentData {
    cardType: string;
    cardNumber: string;
    cardMonth: string;
    cardYear: string;
    nameOnCard: string;
}

export interface FlightData {
    departureCity: string;
    destinationCity: string;
    passenger: PassengerData;
    payment: PaymentData;
}