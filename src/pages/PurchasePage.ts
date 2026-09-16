import { Page, Locator } from '@playwright/test';
import { PassengerData, PaymentData } from '../types/flightTypes';

export class PurchasePage {

    readonly page: Page;

    readonly name: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;

    readonly cardType: Locator;
    readonly creditCardNumber: Locator;
    readonly creditCardMonth: Locator;
    readonly creditCardYear: Locator;

    readonly nameOnCard: Locator;
    readonly purchaseButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.name = page.locator('#inputName');
        this.address = page.locator('#address');
        this.city = page.locator('#city');
        this.state = page.locator('#state');
        this.zipCode = page.locator('#zipCode');

        this.cardType = page.locator('#cardType');
        this.creditCardNumber = page.locator('#creditCardNumber');
        this.creditCardMonth = page.locator('#creditCardMonth');
        this.creditCardYear = page.locator('#creditCardYear');

        this.nameOnCard = page.locator('#nameOnCard');

        this.purchaseButton = page.getByRole('button', {
            name: 'Purchase Flight'
        });
    }

async fillPassengerDetails(data: PassengerData) {

    await this.name.fill(data.name);

    await this.address.fill(data.address);

    await this.city.fill(data.city);

    await this.state.fill(data.state);

    await this.zipCode.fill(data.zipCode);

}

async fillPaymentDetails(data: PaymentData) {

    await this.cardType.selectOption(
        data.cardType
    );

    await this.creditCardNumber.fill(
        data.cardNumber
    );

    await this.creditCardMonth.fill(
        data.cardMonth
    );

    await this.creditCardYear.fill(
        data.cardYear
    );

    await this.nameOnCard.fill(
        data.nameOnCard
    );
}

    async purchaseFlight() {

        await this.purchaseButton.click();
    }
}