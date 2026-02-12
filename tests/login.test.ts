 import{BrowserContext, chromium, Page, test} from "@playwright/test"
 test("Login test demo",async()=>{
     const browser= await chromium.launch({
        headless:false   //by default PW takes it has true which means browser will be there but there will no GUI
 }); //launch browser instance stored in browser
     const context: BrowserContext = await browser.newContext();   //const context: BrowserContext means this variable context is of type broweser context
     const page: Page =await context.newPage();        //lly variable page is of page type

     await page.goto("https://topuptalent.com/")
    await page.hover('[name="email"]');
    await page.click('[name="email"]',{delay:200});
    await page.type('input[name="email"]',"vishal.thakur@caeliusconsulting.com",{delay:200});
    await page.type('input[name="password"]',"Test@123",{delay:200});
     await page.click('.theme-button');
     await page.waitForTimeout(10000);
     await browser.close();
;
 })