import{test as Pom} from "@playwright/test";
import loginPage from "../pages/loginpage";

type pages={
    LoginPage:loginPage;  //given alias to the class name 
}


const testpages = Pom.extend<pages>({

    LoginPage:async({page},use)=>{
        await use(new loginPage(page));
    }


})

export const test = testpages;
export const expect = testpages.expect;