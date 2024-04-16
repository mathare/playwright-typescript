import { Locator, expect } from '@playwright/test';

export async function elementCount(locator: Locator): Promise<number> {
  await expect(async () => {
    expect(await locator.count()).toBeGreaterThan(0);
  }).toPass({ timeout: 10000 });
  return await locator.count();
}
