import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly departureCity: Locator;
    readonly destinationCity: Locator;
    readonly findFlightsButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.departureCity = page.locator('select[name="fromPort"]');

        this.destinationCity = page.locator('select[name="toPort"]');

        this.findFlightsButton = page.getByRole('button', {
            name: 'Find Flights'
        });
    }

    async open() {
        await this.page.goto('/');
    }

    async selectDepartureCity(city: string) {
        await this.departureCity.selectOption({ label: city });
    }

    async selectDestinationCity(city: string) {
        await this.destinationCity.selectOption({ label: city });
    }

    async findFlights() {
        await this.findFlightsButton.click();
    }
}