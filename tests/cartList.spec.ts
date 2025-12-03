import { expect, Locator, test } from '@playwright/test';
import { CartList, COLORS, EXPECTED_TEXT, PRODUCT_ELEMENTS } from '../pages/components/cartList';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';

test.describe('Cart list tests', () => {
  let cartList: CartList;

  test.beforeEach(async ({ page, baseURL }) => {
    cartList = new CartList(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('Empty cart', () => {
    // We can test the cart list on any page that uses it - namely the cart page and checkout overview page
    // but the cart page is the simplest so open that
    test.beforeEach(async ({ page }) => {
      await page.goto(URLS.cartPage);
    });

    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(cartList.cartList).toBeVisible();
        await expect(cartList.qtyHeader).toBeVisible();
        await expect(cartList.descHeader).toBeVisible();
        await expect(cartList.cartItem).toHaveCount(0);
      });

      test('Text content of elements', async () => {
        await expect(cartList.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(cartList.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
      });

      test('Element styling', async () => {
        let element = cartList.cartList;
        await expect(element).toHaveCSS('display', 'block');

        const headers = [cartList.qtyHeader, cartList.descHeader];
        for (let i = 0; i < headers.length; i++) {
          element = headers[i];
          await expect(element).toHaveCSS('color', COLORS.headerColor);
          await expect(element).toHaveCSS('display', 'inline-block');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test.describe('Visual tests', () => {
        test('Default state', async () => {
          await expect(cartList.cartList).toHaveScreenshot('emptyCart.png');
        });
      });
    });
  });

  test.describe('Products in cart', () => {
    const productIds = PRODUCT_INFO.map((product) => product.id);

    test.describe('Appearance tests', () => {
      test.beforeEach(async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.cartPage);
      });

      test('Item list element visibility', async () => {
        await expect(cartList.cartList).toBeVisible();
        await expect(cartList.qtyHeader).toBeVisible();
        await expect(cartList.descHeader).toBeVisible();
        await expect(cartList.cartItem).toHaveCount(productIds.length);

        // Verify each item displays all expected elements
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = cartList.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            await expect(productElement).toBeVisible();
          }
        }
      });

      test('Text content of items in cart', async () => {
        for (let i = 0; i < productIds.length; i++) {
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(PRODUCT_INFO[i].title);
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i].description
          );
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${PRODUCT_INFO[i].price}`);
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(EXPECTED_TEXT.removeButton);
        }
      });

      test('Cart item element styling', async () => {
        let element: Locator;
        for (let i = 0; i < productIds.length; i++) {
          element = cartList.cartItem.nth(i);
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '8px');
          await expect(element).toHaveCSS('display', 'flex');

          element = cartList.getProductElement(i, PRODUCT_ELEMENTS.qty);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.borderColor}`);
          await expect(element).toHaveCSS('box-sizing', 'border-box');
          await expect(element).toHaveCSS('font-size', '14px');
          await expect(element).toHaveCSS('font-weight', '400');
          await expect(element).toHaveCSS('text-align', 'center');

          element = cartList.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveCSS('color', COLORS.titleColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = cartList.getProductElement(i, PRODUCT_ELEMENTS.description);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '14px');

          element = cartList.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveCSS('border-top', `1px solid ${COLORS.borderColor}`);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = cartList.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toContainClass('btn_secondary');
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.button.removeButtonColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('box-sizing', 'border-box');
          await expect(element).toHaveCSS('color', COLORS.button.removeButtonColor);
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Cart item title changes style on hover', async () => {
        for (let i = 0; i < productIds.length; i++) {
          const element = cartList.getProductElement(i, PRODUCT_ELEMENTS.title);
          await element.hover();
          await expect(element).toHaveCSS('color', COLORS.hoverColor);
        }
      });

      test('Cursor is pointer for title link', async ({ browserName }) => {
        test.skip(browserName === 'webkit');
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = cartList.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            const cursorStyle = productElements[j] === 'title' || productElements[j] === 'button' ? 'pointer' : 'auto';
            await expect(productElement).toHaveCSS('cursor', cursorStyle);
          }
        }
      });

      test('Items in cart match order in which products were added', async ({ page }) => {
        const shuffledProductIds = [...productIds].sort(() => Math.random() - 0.5);
        await setCartContentsInLocalStorage(page, shuffledProductIds, URLS.cartPage);

        for (let i = 0; i < shuffledProductIds.length; i++) {
          const product = PRODUCT_INFO.filter((a) => a.id === shuffledProductIds[i])[0];
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(product.title);
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(product.description);
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${product.price}`);
        }
      });

      test('Item quantities cannot be edited', async () => {
        // Proving the item quantity isn't editable is a bit tricky as the element isn't an input or textbox so we
        // can't use the .not.toBeEditable() assertion. Instead verify the tag is a div (not an input) and the
        // isContentEditable property is false
        for (let i = 0; i < productIds.length; i++) {
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty('tagName', 'DIV');
          await expect(cartList.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty(
            'isContentEditable',
            false
          );
        }
      });

      test('Item title link does not explicitly reference product page', async () => {
        for (let i = 0; i < productIds.length; i++) {
          // I don't like using locators within tests but this is the easiest way of conducting this test
          const LINK = cartList.cartItem.nth(i).locator('a');
          await expect(LINK).toHaveCount(1);
          await expect(LINK).toHaveId(new RegExp('item_\\d_title_link'));
          await expect(LINK).toHaveAttribute('href', '#');
        }
      });

      test.describe('Visual tests', () => {
        test('Single product in cart', async ({ page }) => {
          await setCartContentsInLocalStorage(page, [0], URLS.cartPage);
          await expect(cartList.cartList).toHaveScreenshot('singleProductInCart.png');
        });

        test('All products in cart', async () => {
          await expect(cartList.cartList).toHaveScreenshot('allProductsInCart.png');
        });
      });
    });
  });
});
