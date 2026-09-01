import { test, expect } from '@playwright/test';

import { HomePage } from '../../src/pages/HomePage';
import { ReservePage } from '../../src/pages/ReservePage';
import { PurchasePage } from '../../src/pages/PurchasePage';
import { ConfirmationPage } from '../../src/pages/ConfirmationPage';

import { flightData } from '../../src/test-data/flightData';

test('End-to-End Flight Booking', async ({ page }) => {

    const homePage = new HomePage(page);
    const reservePage = new ReservePage(page);
    const purchasePage = new PurchasePage(page);
    const confirmationPage = new ConfirmationPage(page);

    // 1. Open Home Page

    await homePage.open();

    // 2. Find Flight

    await homePage.selectDepartureCity(
        flightData.departureCity
    );

    await homePage.selectDestinationCity(
        flightData.destinationCity
    );

    await homePage.findFlights();

    // 3. Validate available flights

    await expect(page).toHaveURL(/reserve\.php/);

    const flightCount =
        await reservePage.getFlightCount();

    expect(flightCount).toBeGreaterThan(0);

    // 4. Choose Flight

    await reservePage.chooseFlight(0);

    // 5. Purchase Flight

    await expect(page).toHaveURL(/purchase\.php/);

    await purchasePage.fillPassengerDetails();

    await purchasePage.purchaseFlight();

    // 6. Confirmation

    await expect(page).toHaveURL(/confirmation\.php/);

    // 7. Validate final message

    await confirmationPage.verifyConfirmationMessage();

    await expect(
        confirmationPage.thankYouMessage
    ).toHaveText(
        'Thank you for your purchase today!'
    );
});