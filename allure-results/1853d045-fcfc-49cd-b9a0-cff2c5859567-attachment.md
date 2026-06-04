# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1_dealFlow.spec.ts >> End-to-End Deal Flow @smoke
- Location: tests\1_dealFlow.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Enter User Name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "Error 403 - This web app is stopped." [level=1] [ref=e4]
  - paragraph [ref=e5]: The web app you have attempted to reach is currently stopped and does not accept any requests. Please try to reload the page or visit it again soon.
  - paragraph [ref=e6]:
    - text: If you are the web app administrator, please find the common 403 error scenarios and resolution
    - link "here" [ref=e7] [cursor=pointer]:
      - /url: https://go.microsoft.com/fwlink/?linkid=2095007
    - text: . For further troubleshooting tools and recommendations, please visit
    - link "Azure Portal" [ref=e8] [cursor=pointer]:
      - /url: https://portal.azure.com/
    - text: .
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | export class LoginPage {
  3  |  readonly page: Page;
  4  |  readonly email: Locator;
  5  |  readonly password: Locator;
  6  |  readonly loginBtn: Locator;
  7  |  constructor(page: Page) {
  8  |    this.page = page;
  9  |    this.email = page.getByPlaceholder('Enter User Name');
  10 |    this.password = page.getByPlaceholder('Enter Password');
  11 |    this.loginBtn = page.getByRole('button', { name: 'SIGN IN' });
  12 |  }
  13 |  async navigatetoUnicornPage(url: string) {
  14 |    await this.page.goto(url);
  15 |  }
  16 |  async login(user: string, pwd: string) {
> 17 |    await this.email.fill(user);
     |                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  18 |    await this.password.fill(pwd);
  19 |    await this.loginBtn.click();
  20 |  }
  21 | }
```