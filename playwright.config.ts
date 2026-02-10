import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/login.test.ts'],
};

export default defineConfig(config);
