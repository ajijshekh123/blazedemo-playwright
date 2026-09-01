import { Page, Locator } from '@playwright/test';

export class ReservePage {

    readonly page: Page;
    readonly flightRows: Locator;

    constructor(page: Page) {

        this.page = page;

        this.flightRows = page.locator('table tbody tr');
    }

    async getFlightCount(): Promise<number> {

        return await this.flightRows.count();
    }

    async chooseFlight(index: number = 0) {

        await this.flightRows
            .nth(index)
            .getByRole('button', {
                name: 'Choose This Flight'
            })
            .click();
    }
}