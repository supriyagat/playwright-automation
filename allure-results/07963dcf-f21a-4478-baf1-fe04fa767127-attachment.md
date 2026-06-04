# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 3_BoxAppNotes.spec.ts >> Box Notes - Create Delete Flow @smoke >> Create + Rename + Delete Note
- Location: tests\3_BoxAppNotes.spec.ts:29:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic:
        - generic:
          - button:
            - generic: Skip to main content
          - navigation:
            - generic:
              - menubar:
                - generic:
                  - generic:
                    - menuitem:
                      - generic:
                        - generic:
                          - generic:
                            - img
                    - menuitem
                - generic:
                  - generic:
                    - menuitem:
                      - generic:
                        - generic:
                          - generic: Files
                    - menuitem:
                      - generic:
                        - generic:
                          - generic: Notes
                      - generic:
                        - menuitem
                    - menuitem:
                      - generic:
                        - generic:
                          - generic: Sign
                    - menuitem:
                      - generic:
                        - generic: More
                    - generic:
                      - separator
                    - menuitem:
                      - generic:
                        - generic:
                          - generic: Collections
                      - generic:
                        - menuitem
                    - generic:
                      - generic:
                        - generic:
                          - menuitem:
                            - menuitem [expanded]
                            - generic:
                              - generic: Favorites
                          - generic:
                            - generic:
                              - paragraph: Drag items here for quick access
                - generic:
                  - menuitem:
                    - generic:
                      - generic: Get Box Drive
                  - menuitem:
                    - generic:
                      - generic:
                        - generic: Dev Console
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: 0 B of 10.0 GB used
                          - button
                      - progressbar
          - generic:
            - banner:
              - generic:
                - search:
                  - generic:
                    - generic:
                      - img
                      - combobox
                      - button
              - generic:
                - generic:
                  - button:
                    - generic: Upgrade Plan
                - generic:
                  - button
                - generic:
                  - button
                - generic:
                  - button
                - button:
                  - generic:
                    - generic:
                      - generic: SG
            - main "Files":
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - navigation:
                          - list:
                            - listitem:
                              - generic:
                                - generic:
                                  - heading [level=1]: Files
                                  - generic:
                                    - button:
                                      - img
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - button:
                                - generic: New
                  - generic:
                    - generic:
                      - region:
                        - generic:
                          - generic:
                            - generic:
                              - button [expanded]:
                                - heading [level=2]: Recents
                                - img
                              - link:
                                - /url: /recents
                                - text: See all
                            - generic:
                              - generic:
                                - generic:
                                  - button
                                - generic:
                                  - list:
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_869_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_242_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_75_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_485_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_672_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_868_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_921_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_306_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_954_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_689_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                                    - listitem:
                                      - button:
                                        - generic:
                                          - generic:
                                            - generic:
                                              - img
                                          - generic:
                                            - generic:
                                              - generic: playWrightNote_448_Updated.boxnote
                                            - generic:
                                              - link:
                                                - /url: /folder/377687053696
                                                - img
                                                - generic: All Files
                                        - generic:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - button
                    - generic:
                      - generic:
                        - region:
                          - heading [level=2]: Files list
                          - generic:
                            - generic:
                              - generic:
                                - row:
                                  - columnheader:
                                    - generic: Type
                                  - link:
                                    - /url: /folder/0?sortColumn=name&sortDirection=ASC
                                    - generic: NAME
                                  - columnheader:
                                    - link:
                                      - /url: /folder/0?sortColumn=date&sortDirection=ASC
                                      - generic: UPDATED
                                      - img
                                  - columnheader:
                                    - link:
                                      - /url: /folder/0?sortColumn=size&sortDirection=ASC
                                      - generic: SIZE
                                  - generic:
                                    - generic:
                                      - button:
                                        - img
                                      - button
                                - rowgroup:
                                  - generic:
                                    - row:
                                      - generic:
                                        - gridcell:
                                          - img
                                        - gridcell:
                                          - generic:
                                            - generic:
                                              - generic:
                                                - generic:
                                                  - link:
                                                    - /url: /folder/377687053696
                                                    - text: All Files
                                        - gridcell
                                        - gridcell:
                                          - generic:
                                            - generic: Today by Supriya Gat
                                        - gridcell
                                        - gridcell:
                                          - generic: 41 Files
                      - generic:
                        - generic:
                          - generic:
                            - generic: Select a file or folder to view details.
                          - complementary:
                            - generic:
                              - generic:
                                - img
                                - paragraph: Select an item to view details.
          - button:
            - generic: Drop files on this page to upload them into this folder.
  - generic:
    - img
  - dialog "Allow Box to connect with Box Tools" [ref=e2]:
    - heading "Allow Box to connect with Box Tools" [level=2] [ref=e5]
    - generic [ref=e6]:
      - img "Image and Gif showing how to allow access" [ref=e7]
      - generic [ref=e8]:
        - text: Box needs permission to connect with Box Tools so you can open files on your desktop. When prompted by this browser window, click
        - strong [ref=e9]: Allow
        - text: to enable local network access for Box, then click
        - strong [ref=e10]: Reload
        - text: .
    - button "Reload" [active] [ref=e12] [cursor=pointer]:
      - generic [ref=e13]: Reload
    - button "Close" [ref=e14] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | import { LoginPageBoxApp } from '../pages/LoginPageBoxApp';
  4   | 
  5   | import { NotesPage } from '../pages/NotesPage';
  6   | 
  7   | test.describe('Box Notes - Create Delete Flow @smoke', async() => {
  8   | 
  9   | //   test.describe.configure({ mode: 'parallel' });
  10  | 
  11  |   let noteName: string;
  12  | 
  13  |   let updatedName: string;
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
  16  | 
  17  |     noteName = "playWrightNote_" + Math.floor(Math.random() * 1000);
  18  | 
  19  |     updatedName = noteName + "_Updated";
  20  | 
  21  |     const loginPage = new LoginPageBoxApp(page);
  22  | 
  23  |     await loginPage.navigate();
  24  | 
  25  |     await loginPage.login("supriya.gat@yash.com", "Qqwerty@1");
  26  | 
  27  |   });
  28  | 
  29  |   test('Create + Rename + Delete Note', async ({ page }, testInfo) => {
  30  | 
  31  |     const notes = new NotesPage(page);
  32  | 
  33  |     const notesPage = await notes.openNotes();
  34  | 
  35  |     await test.step('Create note', async () => {
  36  | 
  37  |       await notes.createNote();
  38  | 
  39  |     });
  40  | 
  41  |     await test.step('Before rename screenshot', async () => {
  42  | 
  43  |       await testInfo.attach('Before Rename', {
  44  | 
  45  |         body: await notesPage.screenshot(),
  46  | 
  47  |         contentType: 'image/png'
  48  | 
  49  |       });
  50  | 
  51  |     });
  52  | 
  53  |     await test.step('Rename note', async () => {
  54  | 
  55  |       const title = await notes.renameNote(updatedName);
  56  | 
  57  |       await expect(title).toBeVisible();
  58  | 
  59  |       await page.waitForTimeout(5000);
  60  | 
  61  |     });
  62  | 
  63  |     await test.step('After rename screenshot', async () => {
  64  | 
  65  |       await testInfo.attach('After Rename', {
  66  | 
  67  |         body: await notesPage.screenshot(),
  68  | 
  69  |         contentType: 'image/png'
  70  | 
  71  |       });
  72  | 
  73  |     });
  74  | 
  75  |     await test.step('Delete note', async () => {
  76  | 
  77  |       await notes.deleteNote();
  78  | 
> 79  |       await page.waitForTimeout(1000);
      |                  ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  80  | 
  81  |     });
  82  | 
  83  |     await test.step('Final screenshot', async () => {
  84  | 
  85  |       await testInfo.attach('After Delete', {
  86  | 
  87  |         body: await notesPage.screenshot(),
  88  | 
  89  |         contentType: 'image/png'
  90  | 
  91  |       });
  92  | 
  93  |     });
  94  | 
  95  |     await test.step('Logout', async () => {
  96  | 
  97  |       await notesPage.close();
  98  | 
  99  |       await page.getByText('SG').click();
  100 | 
  101 |       await page.getByText('Log Out').click();
  102 | 
  103 |     });
  104 | 
  105 |   });
  106 | 
  107 | });
  108 |  
```