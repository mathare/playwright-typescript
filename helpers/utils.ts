import { BrowserContext, expect, Locator, Page } from '@playwright/test';

export const getCartContentsFromLocalStorage = async (context: BrowserContext) => {
  const storageState = await context.storageState();
  return storageState.origins![0].localStorage.filter((item) => item.name === 'cart-contents')[0];
};

export const setCartContentsInLocalStorage = async (page: Page, productIds: number[], url: string) => {
  await page.evaluate((productIds) => localStorage.setItem('cart-contents', `[${productIds.join()}]`), productIds);
  // Reopen the page to pick up the local storage change
  // NB page.reload() doesn't seem to work on webkit browsers on Linux so use .goto()
  await page.goto(url);
};

export const verifyCartButtonStyle = async (
  button: Locator,
  buttonText: string,
  buttonColor: string,
  buttonClass: string
): Promise<void> => {
  await expect(button).toHaveText(buttonText);
  await expect(button).toContainClass(buttonClass);
  await expect(button).toHaveCSS('border', `1px solid ${buttonColor}`);
  await expect(button).toHaveCSS('color', buttonColor);
};
