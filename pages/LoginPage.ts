import { Page, Locator } from '@playwright/test';
export class LoginPage {
 readonly page: Page;
 readonly email: Locator;
 readonly password: Locator;
 readonly loginBtn: Locator;
 constructor(page: Page) {
   this.page = page;
   this.email = page.getByPlaceholder('Enter User Name');
   this.password = page.getByPlaceholder('Enter Password');
   this.loginBtn = page.getByRole('button', { name: 'SIGN IN' });
 }
 async navigatetoUnicornPage(url: string) {
   await this.page.goto(url);
 }
 async login(user: string, pwd: string) {
   await this.email.fill(user);
   await this.password.fill(pwd);
   await this.loginBtn.click();
 }
}