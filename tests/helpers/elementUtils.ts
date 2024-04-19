import { Locator, expect } from '@playwright/test';

export async function elementCount(locator: Locator, expectedCount: number): Promise<number> {
  await expect(async () => {
    expect(await locator.count()).toEqual(expectedCount);
  }).toPass({ timeout: 10000 });
  return await locator.count();
}
