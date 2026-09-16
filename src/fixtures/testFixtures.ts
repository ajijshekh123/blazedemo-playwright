import {
    test as base
} from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { ReservePage } from '../pages/ReservePage';
import { PurchasePage } from '../pages/PurchasePage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

type Fixtures = {

    homePage: HomePage;

    reservePage: ReservePage;

    purchasePage: PurchasePage;

    confirmationPage: ConfirmationPage;
};

export const test = base.extend<Fixtures>({

    homePage: async ({ page }, use) => {

        const homePage = new HomePage(page);

        await use(homePage);
    },

    reservePage: async ({ page }, use) => {

        const reservePage = new ReservePage(page);

        await use(reservePage);
    },

    purchasePage: async ({ page }, use) => {

        const purchasePage =
            new PurchasePage(page);

        await use(purchasePage);
    },

    confirmationPage: async ({ page }, use) => {

        const confirmationPage =
            new ConfirmationPage(page);

        await use(confirmationPage);
    }
});

export { expect } from '@playwright/test';