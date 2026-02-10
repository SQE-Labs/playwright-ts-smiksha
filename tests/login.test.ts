 import{chromium, test} from "@playwright/test"
 test("Login test demo",async()=>{
     const browser= await chromium.launch({
        headless:true
 }); //launch browser instance stored in browser
     const context= await browser.newContext();
     const page =await context.newPage();

     await page.goto("https://topuptalent.com/")
    await page.hover('[name="email"]');
    await page.click('[name="email"]',{delay:200});
    await page.type('input[name="email"]',"vishal.thakur@caeliusconsulting.com",{delay:200});
    await page.type('input[name="password"]',"Test@123",{delay:200});
     await page.click('.theme-button');
     await page.waitForTimeout(10000);
;
 })