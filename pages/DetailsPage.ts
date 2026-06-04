import { Page, expect } from '@playwright/test';
export class DetailsPage {
 constructor(private page: Page) {}
 async verifyDetails(data: any) {
   await expect(this.page.locator(`text=${data.dealAddress}`)).toBeVisible();
   await expect(this.page.locator(`text=${data.dealNumber}`)).toBeVisible();
   await expect(this.page.locator(`text=${data.agentName}`)).toBeVisible();

   const previewImage = this.page.locator('img.preview ');
    await expect(previewImage).toBeVisible();
    const src = await previewImage.getAttribute('src');
    expect(src).not.toBeNull();
    
    
 }
}