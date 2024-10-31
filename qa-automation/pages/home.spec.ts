import { expect, test } from '@playwright/test';

test('Verificar usuario logado', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com');

    const loggedUser = page.locator('.header.links .authorization-link');
    await expect(loggedUser).toHaveText('Sign In ');
    //await expect(loggedUser).toHaveText('Create an Account ');
});

