import { BrowserContext, Cookie, expect, Locator, Page } from '@playwright/test';

export const login = async (context: BrowserContext, baseUrl: string, username: string): Promise<void> => {
  // Login by setting a cookie rather than by entering user credentials on the login page
  const COOKIE = { name: 'session-username', value: username, url: baseUrl };
  await context.addCookies([COOKIE]);
};

export const getCartContentsFromLocalStorage = async (context: BrowserContext): Promise<Record<string, string>> => {
  const storageState = await context.storageState();
  return storageState.origins![0].localStorage.filter((item) => item.name === 'cart-contents')[0];
};

export const setCartContentsInLocalStorage = async (page: Page, productIds: number[], url: string): Promise<void> => {
  await page.evaluate((productIds) => localStorage.setItem('cart-contents', `[${productIds.join()}]`), productIds);
  // Reopen the page to pick up the local storage change
  // NB page.reload() doesn't seem to work on webkit browsers on Linux so use .goto()
  await page.goto(url);
};

export const getCookies = async (context: BrowserContext, url: string): Promise<Cookie[]> => {
  return await context.cookies(url);
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

export const generateProductSnapshotName = (name: string): string => {
  // Sanitise product name for use as snapshot name
  // Convert first letter to lowercase then remove spaces & dashes
  return name.charAt(0).toLowerCase() + name.slice(1).replace(' ', '').replace('-', '') + '.png';
};
