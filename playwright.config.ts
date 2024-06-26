import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? undefined : 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'tests/playwright-report', open: 'never' }],
    [
      '@estruyf/github-actions-reporter',
      {
        useDetails: true,
        showError: true,
      },
    ],
  ],
  use: {
    baseURL: 'https://magento.softwaretestingboard.com',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  timeout: 90000,
  snapshotPathTemplate: 'tests/data/snapshots/{platform}{/projectName}/{testFilePath}/{arg}{ext}',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      timeout: 120000,
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      timeout: 90000,
    },
  ],
});
