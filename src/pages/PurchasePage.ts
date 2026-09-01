import { Page, Locator } from '@playwright/test';

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

        this.purchaseButton = page.getByRole('input', {
            name: 'Purchase Flight'
        });
    }

    async fillPassengerDetails() {

        await this.name.fill('Mohammad Ajij');

        await this.address.fill('Ahmedabad');

        await this.city.fill('Ahmedabad');

        await this.state.fill('Gujarat');

        await this.zipCode.fill('380001');

        await this.cardType.selectOption('visa');

        await this.creditCardNumber.fill('4111111111111111');

        await this.creditCardMonth.fill('12');

        await this.creditCardYear.fill('2030');

        await this.nameOnCard.fill('Mohammad Ajij');
    }

    async purchaseFlight() {

        await this.purchaseButton.click();
    }
}