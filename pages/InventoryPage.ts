import { Page, Locator, expect } from '@playwright/test';
export class InventoryPage {
 readonly page: Page;
 readonly addToCartBtns: Locator;
 readonly sortDropdown: Locator;
 readonly prices: Locator;
 readonly cartBtn: Locator;
readonly checkoutBtn: Locator;
 constructor(page: Page) {
   this.page = page;
   this.addToCartBtns = page.locator('.inventory_item button');
   this.sortDropdown = page.locator('.product_sort_container');
   this.prices = page.locator('.inventory_item_price');
   this.cartBtn = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('#checkout');
 }
 async countAddToCartButtons() {
   return await this.addToCartBtns.count();
 }
 async sortBy(option: string) {
   await this.sortDropdown.selectOption(option);
 }

 async addFirstProduct() {
   await this.addToCartBtns.first().click();
 }
 async goToCart() {
   await this.cartBtn.click();
 }

  async checkout() {
   await this.checkoutBtn.click();
 }

 async getFirstProductDetails() {
 const name = await this.page.locator('.inventory_item_name').first().innerText();
 const price = await this.page.locator('.inventory_item_price').first().innerText();
 return { name, price };
}

  async getPrices() {
  const priceTexts = await this.prices.allTextContents();
  //  const prices: number[] = [];
  const prices : Array<number>= [];
  for (let text of priceTexts) {
    prices.push(Number(text.replace('$', '')));
  }
  return prices;
  }

  async verifyDescending() {
  const prices = await this.getPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  }
  }

  async verifyAscending() {
  const prices = await this.getPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
  }


}