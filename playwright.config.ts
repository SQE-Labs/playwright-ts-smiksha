import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/loginpom.test.ts'],
  use:{
    baseURL:"https://topuptalent.com/",
    headless:false,
    screenshot:"on",
    video:"on",
    launchOptions:{

    }
  },
};

export default defineConfig(config);
