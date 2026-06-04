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
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[name="service_iframe"]').contentFrame().locator('[aria-label=\'New\']') to be visible

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
                                            - generic: Apr 30, 2026 by Supriya Gat
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
  1  | import { Page, FrameLocator } from '@playwright/test';
  2  | export class NotesPage {
  3  |  readonly page: Page;
  4  |   frame!: FrameLocator;
  5  |  constructor(page: Page) {
  6  |    this.page = page;
  7  |  }
  8  | async openNotes() {
  9  |  const [notesPage] = await Promise.all([
  10 |    this.page.context().waitForEvent('page'),
  11 |    this.page.getByRole("menuitem", { name: /notes/i }).click()
  12 |  ]);
  13 |  await notesPage.waitForLoadState('domcontentloaded');
  14 |  // wait for iframe
  15 |  const iframeLocator = notesPage.locator('iframe[name="service_iframe"]');
  16 |  await iframeLocator.waitFor({ state: 'visible' });
  17 |  this.frame = notesPage.frameLocator('iframe[name="service_iframe"]');
  18 |  //  wait for button inside frame
> 19 |  await this.frame.locator("[aria-label='New']").waitFor({ state: 'visible' });
     |                                                 ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  20 |  return notesPage;
  21 | }
  22 | async createNote() {
  23 |  const newBtn = this.frame.locator("[aria-label='New']");
  24 |  await newBtn.waitFor({ state: 'visible' }); 
  25 |  await newBtn.click();
  26 | }
  27 |  async renameNote(name: string) {
  28 |    const title = this.frame.getByRole('textbox', { name: 'Add a Title' });
  29 |    await title.fill(name);
  30 |    console.log("Print updated note title", title)
  31 | 
  32 |    return title;
  33 | 
  34 |  }
  35 | 
  36 |  async deleteNote() {
  37 |   // this.page.waitForTimeout(1000);
  38 |   
  39 |   // await this.frame.getByRole("button", { name: 'Show more options' }).click({force:true});
  40 |   await this.frame.locator("[aria-label='Show more options']").click();
  41 |    await this.frame.getByRole("menuitem",{name:'Delete this note'}).click({force:true});
  42 |  }
  43 | }
```