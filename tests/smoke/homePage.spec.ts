import { test, expect } from '@playwright/test';

test('Verify BlazeDemo Home Page', async ({ page }) => {

    await page.goto('/');

    await expect(page).toHaveTitle(/BlazeDemo/);

    await expect(
        page.getByRole('heading', { name: 'Welcome to the Simple Travel Agency!' })
    ).toBeVisible();

});