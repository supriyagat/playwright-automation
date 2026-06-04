import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/sauceLogin';
import { HomePage } from '../pages/SauceLogout';
const users = [
 { username: 'standard_user', password: 'secret_sauce', valid: true },
 { username: 'visual_user', password: 'secret_sauce', valid: true },
 { username: 'problem_user', password: 'secret_sauce', valid: true },
 { username: 'performance_glitch_user', password: 'secret_sauce', valid: true }
];
test.describe('SauceDemo Login and Logout - Parameterized @smoke', async() => {
 users.forEach((user) => {
   test(`Login & Logout for ${user.username}`, async ({ page }) => {
     const loginPage = new LoginPage(page);
     const homePage = new HomePage(page);
     await loginPage.goto();
     await loginPage.login(user.username, user.password);
     if (user.valid) {
       // Validate login
       await expect(page).toHaveURL(/inventory.html/);
       // Logout
       await homePage.logout();
       // Validate logout (back to login page)
       await expect(page).toHaveURL('https://www.saucedemo.com/');
     } else {
       await expect(page.locator('[data-test="error"]')).toBeVisible();
     }
   });
 });
});