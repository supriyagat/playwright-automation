import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { DealPage } from '../pages/DealPage';
import { DetailsPage } from '../pages/DetailsPage';
import data from '../testdata/dealData.json';

test('End-to-End Deal Flow @smoke', async ({ page },testInfo) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const deal = new DealPage(page);
  const details = new DetailsPage(page);

  await login.navigatetoUnicornPage(data.url);
  await login.login(data.email, data.password);
  await dashboard.verifyWelcome();
  await dashboard.clickOnAccountLogo();
  await dashboard.verifyLogout();
  await testInfo.attach('Verify Welcome page', {
        body: await dashboard.takeScreenshot(),
        contentType: 'image/png'
  });
  await deal.fillDealDetails(data);

  await details.verifyDetails(data);
     await testInfo.attach('Verify Preview page', {
        body: await dashboard.takeScreenshot(),
        contentType: 'image/png'
  });
});
 