import { Page, FrameLocator } from '@playwright/test';
export class NotesPage {
 readonly page: Page;
  frame!: FrameLocator;
 constructor(page: Page) {
   this.page = page;
 }
async openNotes() {
 const [notesPage] = await Promise.all([
   this.page.context().waitForEvent('page'),
   this.page.getByRole("menuitem", { name: /notes/i }).click()
 ]);
 await notesPage.waitForLoadState('domcontentloaded');
 // wait for iframe
 const iframeLocator = notesPage.locator('iframe[name="service_iframe"]');
 await iframeLocator.waitFor({ state: 'visible' });
 this.frame = notesPage.frameLocator('iframe[name="service_iframe"]');
 //  wait for button inside frame
 await this.frame.locator("[aria-label='New']").waitFor({ state: 'visible' });
 return notesPage;
}
async createNote() {
 const newBtn = this.frame.locator("[aria-label='New']");
 await newBtn.waitFor({ state: 'visible' }); 
 await newBtn.click();
}
 async renameNote(name: string) {
   const title = this.frame.getByRole('textbox', { name: 'Add a Title' });
   await title.fill(name);
   console.log("Print updated note title", title)

   return title;

 }

 async deleteNote() {
  // this.page.waitForTimeout(1000);
  
  // await this.frame.getByRole("button", { name: 'Show more options' }).click({force:true});
  await this.frame.locator("[aria-label='Show more options']").click();
   await this.frame.getByRole("menuitem",{name:'Delete this note'}).click({force:true});
 }
}