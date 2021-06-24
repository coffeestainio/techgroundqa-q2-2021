const { test, expect, devices } = require('@playwright/test');

// test.use({ browserName:'chromium', ...devices['iPhone X'] });

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

    await page.screenshot({path:'screenshot-desktop2.png'});
});

