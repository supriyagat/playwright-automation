import { Page } from '@playwright/test';
export class LoginPageBoxApp {
 constructor(private page: Page) {}
 async navigate() {
   await this.page.goto('https://app.box.com/login');
 }
 async login(email: string, password: string) {
   await this.page.getByPlaceholder(/email/i).fill(email);
   await this.page.getByRole('button', { name: /next/i }).click();
   await this.page.getByPlaceholder(/password/i).fill(password);
   await this.page.getByRole('button', { name: /log in/i }).click();
 }
}