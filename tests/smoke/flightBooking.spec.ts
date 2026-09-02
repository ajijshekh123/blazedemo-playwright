import { test, expect } from '@playwright/test';

import { HomePage } from '../../src/pages/HomePage';
import { ReservePage } from '../../src/pages/ReservePage';
import { PurchasePage } from '../../src/pages/PurchasePage';
import { ConfirmationPage } from '../../src/pages/ConfirmationPage';

test(
    'E2E Flight Booking - Boston to London',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        const reservePage =
            new ReservePage(page);

        const purchasePage =
            new PurchasePage(page);

        const confirmationPage =
            new ConfirmationPage(page);


        // ==========================================
        // 1. Open Home Page
        // ==========================================

        await homePage.open();


        // ==========================================
        // 2. Find Flights
        // ==========================================

        await homePage.selectDepartureCity(
            'Boston'
        );

        await homePage.selectDestinationCity(
            'London'
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
        // 6. Fill Passenger Details
        // ==========================================

        await purchasePage.fillPassengerDetails();


        // ==========================================
        // 7. Fill Payment Details
        // ==========================================

        await purchasePage.fillPaymentDetails();


        // ==========================================
        // 8. Purchase Flight
        // ==========================================

        await purchasePage.purchaseFlight();


        // ==========================================
        // 9. Verify Confirmation Page
        // ==========================================

        await expect(page).toHaveURL(
            /confirmation\.php/
        );


        // ==========================================
        // 10. Verify Thank You Message
        // ==========================================

        await confirmationPage.verifyThankYouMessage();

        await expect(
            confirmationPage.thankYouMessage
        ).toHaveText(
            'Thank you for your purchase today!'
        );

    }
);