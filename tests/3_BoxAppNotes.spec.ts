import { test, expect } from '@playwright/test';

import { LoginPageBoxApp } from '../pages/LoginPageBoxApp';

import { NotesPage } from '../pages/NotesPage';

test.describe('Box Notes - Create Delete Flow @smoke', async() => {

//   test.describe.configure({ mode: 'parallel' });

  let noteName: string;

  let updatedName: string;

  test.beforeEach(async ({ page }) => {

    noteName = "playWrightNote_" + Math.floor(Math.random() * 1000);

    updatedName = noteName + "_Updated";

    const loginPage = new LoginPageBoxApp(page);

    await loginPage.navigate();


    
    await loginPage.login("supriya.gat@yash.com", "Qqwerty@1");

  });

  test('Create + Rename + Delete Note', async ({ page }, testInfo) => {

    const notes = new NotesPage(page);

    const notesPage = await notes.openNotes();

    await test.step('Create note', async () => {

      await notes.createNote();

    });

    await test.step('Before rename screenshot', async () => {

      await testInfo.attach('Before Rename', {

        body: await notesPage.screenshot(),

        contentType: 'image/png'

      });

    });

    await test.step('Rename note', async () => {

      const title = await notes.renameNote(updatedName);

      await expect(title).toBeVisible();

      await page.waitForTimeout(5000);

    });

    await test.step('After rename screenshot', async () => {

      await testInfo.attach('After Rename', {

        body: await notesPage.screenshot(),

        contentType: 'image/png'

      });

    });

    await test.step('Delete note', async () => {

      await notes.deleteNote();

      await page.waitForTimeout(1000);

    });

    await test.step('Final screenshot', async () => {

      await testInfo.attach('After Delete', {

        body: await notesPage.screenshot(),

        contentType: 'image/png'

      });

    });

    await test.step('Logout', async () => {

      await notesPage.close();

      await page.getByText('SG').click();

      await page.getByText('Log Out').click();

    });

  });

});
 