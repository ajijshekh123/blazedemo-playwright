import {
    test,
    expect
} from '../../src/fixtures/testFixtures';

import {
    flightData
} from '../../src/test-data/flightData';

test(
    'E2E Flight Booking - Boston to London',
    async ({
        page,
        homePage,
        reservePage,
        purchasePage,
        confirmationPage
    }) => {

        // ==========================================
        // 1. Open Home Page
        // ==========================================

        await homePage.open();


        // ==========================================
        // 2. Select Flight
        // ==========================================

        await homePage.selectDepartureCity(
            flightData.departureCity
        );

        await homePage.selectDestinationCity(
            flightData.destinationCity
        );

        await homePage.findFlights();


        // ==========================================
        // 3. Verify Reserve Page
        // ==========================================

        await expect(page).toHaveURL(
            /reserve\.php/
        );

        const flightCount =
            await reservePage.getFlightCount();

        expect(flightCount).toBeGreaterThan(0);


        // ==========================================
        // 4. Choose Flight
        // ==========================================

        await reservePage.chooseFlight(0);


        // ==========================================
        // 5. Verify Purchase Page
        // ==========================================

        await expect(page).toHaveURL(
            /purchase\.php/
        );


        // ==========================================
        // 6. Passenger Details
        // ==========================================

        await purchasePage.fillPassengerDetails(
            flightData.passenger
        );


        // ==========================================
        // 7. Payment Details
        // ==========================================

        await purchasePage.fillPaymentDetails(
            flightData.payment
        );


        // ==========================================
        // 8. Purchase
        // ==========================================

        await purchasePage.purchaseFlight();


        // ==========================================
        // 9. Confirmation
        // ==========================================

        await expect(page).toHaveURL(
            /confirmation\.php/
        );


        // ==========================================
        // 10. Verify Thank You Message
        // ==========================================

        await confirmationPage
            .verifyThankYouMessage();

        await expect(
            confirmationPage.thankYouMessage
        ).toHaveText(
            'Thank you for your purchase today!'
        );
    }
);