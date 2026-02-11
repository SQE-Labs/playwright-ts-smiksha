import { Page } from "@playwright/test";
export default class loginPage{
    constructor(public page:Page){

    }
    async enterEmailAddress(email:string){
    await this.page.locator('[name="email"]')
    .type(email);
    }

    async enterPassword(password:any){
    await this.page.locator('[name="password"]')
    .type(password);
    }

    async submitButton() {
    await this.page.click('.theme-button');
}}