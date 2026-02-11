import { test } from "@playwright/test";
import loginPage from "../pages/loginpage";
const email = "vishal.thakur@caeliusconsulting.com";
const password = "Test@123";
test("Login page",async({page,baseURL})=>{
    const login=new loginPage(page);
      await page.goto(`${baseURL}`)
      await login.enterEmailAddress(email)
      await login.enterPassword(password)
      await login.submitButton()
})