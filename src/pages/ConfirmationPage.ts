import { Page, Locator } from '@playwright/test';

export class ConfirmationPage {

    readonly page: Page;
    readonly thankYouMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.thankYouMessage = page.getByText(
            'Thank you for your purchase today!'
        );
    }

    async verifyConfirmationMessage() {

        await this.thankYouMessage.waitFor({
            state: 'visible'
        });
    }
}