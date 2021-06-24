const { test, expect, devices } = require('@playwright/test');

// test.use({ browserName:'chromium', ...devices['iPhone X'] });

test('test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

    await page.screenshot({path:'screenshot-mobile.png'});
});

test('test network monitoring', async ({ page }) => {

    let madeTheRequest = false;

    page.on('request', function (request) {
        if (request.url().match(/\/v1\/specialist\//)) {
            console.log('Made the Request?', madeTheRequest);
        }
    });
    
    await page.goto('https://terapeutica.digital/#/specialist/bfea3295-af20-4824-8bed-170a227bc1e6');
    await page.waitForLoadState('networkidle');

    

});

test('test', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

    await page.screenshot({path:'screenshot-mobile.png'});
});

