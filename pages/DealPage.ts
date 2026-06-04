import { expect, Page } from '@playwright/test';
export class DealPage {
 constructor(private page: Page) {}
 async fillDealDetails(data: any) {
   await this.page.fill('#address', data.dealAddress);
   await this.page.fill('#fileNumber', data.dealNumber);
  await this.page.getByRole("button",{name: "CREATE NEW"}).click();

  await this.page.locator('ng-select[formcontrolname="disclosureType"]').click();
  await this.page.locator('ng-dropdown-panel .ng-option').getByText(data.propertyType).click();

  const selectedPropertyValue = await this.page.locator('ng-select[formcontrolname="disclosureType"] .ng-value-label').textContent();
  console.log('Selected Property Type:', selectedPropertyValue);

  await this.page.locator('ng-select[formcontrolname="transactionType"]').click();
  await this.page.locator('ng-dropdown-panel .ng-option')
 .getByText(data.transactionType).click();

   const selectedTranscationValue = await this.page.locator('ng-select[formcontrolname="transactionType"] .ng-value-label').textContent();
  console.log('Selected transaction Type :', selectedTranscationValue);

    const selectedCashType = data.cashType === 'cash' ? 'Cash Only' : 'Cash + Finance';
    await this.page.locator('.form-check-label', {hasText: selectedCashType}).click();
    console.log('Selected Cash Type:', selectedCashType);

   await this.page.fill('#closingDate', data.startDate);
   await this.page.fill('#disbursementDate', data.endDate);
   await this.page.fill('#dealAgentName', data.agentName);
   await this.page.setInputFiles('#file-input', data.photoPath);

await this.page.keyboard.press('Tab');
  const submitBtn =this.page.locator('input[type="submit"]')
 console.log(await submitBtn.isEnabled());
  // await this.page.locator('input[type="submit"]').waitFor({ state: 'visible', timeout: 10000 });
  await this.page.locator('input[type="submit"]').click({force:true});


  // await this.page.waitForLoadState('networkidle');
const previewBtn = this.page.getByRole('button', { name:" Preview"});
await previewBtn.waitFor({ state: 'visible' });
await previewBtn.click();
 


  //   await this.page.getByRole("button",{name:' Preview'}).waitFor({state:'visible'});
  // await this.page.getByRole("button",{name:' Preview'}).click();

  
 }
}