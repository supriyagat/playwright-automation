import { Page, expect } from '@playwright/test';
export class DashboardPage {
 constructor(private page: Page) {}
 async verifyWelcome() {
   await expect(this.page.locator('text=Welcome')).toBeVisible();
 }
 async verifyLogout() {
   await expect(this.page.locator('text=Logout ')).toBeVisible();
 }

  async clickOnAccountLogo() {
    this.page.getByText("R J").click();
  
 }
 async takeScreenshot() {
   return await this.page.screenshot();
 }





}