import { expect,test } from "../fixtures/pomfixtures";
// import loginPage from "../pages/loginpage";
// we dont want this import anymore because we are not creating object within the test rather we have created in our fixture
const email = "vishal.thakur@caeliusconsulting.com";
const password = "Test@123";

// test.describe("Page object model demo",()=>{
test("Login page",async({page,baseURL,LoginPage})=>{
    // const login=new loginPage(page); -->object commented out
      await page.goto(`${baseURL}`)
      await LoginPage.enterEmailAddress(email)
      await LoginPage.enterPassword(password)
      await LoginPage.submitButton()
})
// });