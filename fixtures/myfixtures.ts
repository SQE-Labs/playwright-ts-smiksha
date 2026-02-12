import { test as myTest} from "@playwright/test";
type smiksha={
    age:number,
    email:string
}

const myFixtureTest= myTest.extend<smiksha>({
    age:22,
    email:"smikshaguglani7@gmail.com"
})
export const test  = myFixtureTest;
