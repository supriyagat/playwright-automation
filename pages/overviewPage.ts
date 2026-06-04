import { Page, Locator, expect } from '@playwright/test';
export class OverviewPage {
 readonly page: Page;
 readonly productName: Locator;
 readonly productPrice: Locator;
 readonly finishBtn: Locator;
 constructor(page: Page) {
   this.page = page;
   this.productName = page.locator('.inventory_item_name').first();
   this.productPrice = page.locator('.inventory_item_price').first();
   this.finishBtn = page.locator('#finish');
 }
 async verifyProduct(name: string, price: string) {
   await expect(this.productName).toContainText(name);
   await expect(this.productPrice).toContainText(price);
 }
 async finish() {
   await this.finishBtn.click();
 }
 
}