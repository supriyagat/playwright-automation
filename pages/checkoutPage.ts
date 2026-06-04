import { Page, Locator } from '@playwright/test';
export class checkoutPage {
  
 readonly page: Page;
 readonly firstName: Locator;
 readonly lastName: Locator;
 readonly postalCode: Locator;
 readonly continueBtn: Locator;
 constructor(page: Page) {
   this.page = page;
   this.firstName = page.locator('#first-name');
   this.lastName = page.locator('#last-name');
   this.postalCode = page.locator('#postal-code');
   this.continueBtn = page.locator('#continue');
 }
 async fillDetails() {
   await this.firstName.fill('Test');
   await this.lastName.fill('User');
   await this.postalCode.fill('411001');
 }
 async continue() {
   await this.continueBtn.click();
 }
}