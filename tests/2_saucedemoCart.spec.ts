import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/sauceLogin';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { DashboardPage } from '../pages/DashboardPage';

test('End-to-End SauceDemo cart Flow @smoke', async ({ page },testInfo) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const dashboard = new DashboardPage(page);
  const checkout = new checkoutPage(page);
  const overview = new OverviewPage(page);
  let product: any;

  await test.step('Step-1 Login', async () => {
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });

  await test.step('Step-2 Count Add to Cart buttons', async () => {
    const count = await inventory.countAddToCartButtons();
    expect(count).toBeGreaterThan(0);
  });

  await test.step('Step-3 Verify sorting', async () => {
    await inventory.sortBy('lohi');
    await inventory.verifyAscending();
    await inventory.sortBy('hilo');
    await inventory.verifyDescending();
  });
    await testInfo.attach('Verify Welcome page', {
        body: await dashboard.takeScreenshot(),
        contentType: 'image/png'
  });

  await test.step('Step-4 Add product & go to cart', async () => {

    product= await inventory.getFirstProductDetails();
    await inventory.addFirstProduct();
    await inventory.goToCart();
  });

  await test.step('Step-5 Checkout', async () => {
      await inventory.checkout();
  });

  await test.step('Step-6 Continue to payment page', async () => {
    await checkout.fillDetails();
    await checkout.continue();
  });
     await testInfo.attach('Verify payment page', {
        body: await dashboard.takeScreenshot(),
        contentType: 'image/png'
  });

  await test.step('Step-7 Verify product name & price', async () => {
    await overview.verifyProduct(product.name, product.price);
  });

  await test.step('Step-8 Click Finish', async () => {
    await overview.finish();
  });

  await test.step('Step-9 Verify Thank You message', async () => {
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
     await testInfo.attach('Verify Thank you Message', {
        body: await dashboard.takeScreenshot(),
        contentType: 'image/png'
  });

});
 