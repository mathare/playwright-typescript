import { test, expect, Locator } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CartPage, COLORS, EXPECTED_TEXT, PRODUCT_ELEMENTS } from '../pages/cartPage';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';

test.describe('Product page tests', () => {
  let cartPage: CartPage;

  test.beforeEach(async ({ page, baseURL }) => {
    cartPage = new CartPage(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('Empty cart', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(URLS.cartPage);
    });

    // Common cart elements can be tested with an empty cart
    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(cartPage.pageHeader.primaryHeader).toBeVisible();
        await expect(cartPage.subtitle).toBeVisible();
        await expect(cartPage.cartContentsContainer).toBeVisible();
        await expect(cartPage.cartList).toBeVisible();
        await expect(cartPage.qtyHeader).toBeVisible();
        await expect(cartPage.descHeader).toBeVisible();
        await expect(cartPage.cartItem).toHaveCount(0);
        await expect(cartPage.cartFooter).toBeVisible();
        await expect(cartPage.actionButton).toHaveCount(2);
        await expect(cartPage.pageFooter.footer).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(cartPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(cartPage.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(cartPage.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
        for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
          await expect(cartPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
        }
      });

      test('Element styling', async () => {
        await expect(cartPage.subtitle).toHaveCSS('color', COLORS.textColor);
        await expect(cartPage.subtitle).toHaveCSS('font-size', '18px');
        await expect(cartPage.subtitle).toHaveCSS('font-weight', '500');
        await expect(cartPage.cartContentsContainer).toHaveCSS('background-color', COLORS.backgroundColor);

        await expect(cartPage.cartList).toHaveCSS('display', 'block');
        const headers = [cartPage.qtyHeader, cartPage.descHeader];
        for (let i = 0; i < headers.length; i++) {
          await expect(headers[i]).toHaveCSS('color', COLORS.itemList.headerColor);
          await expect(headers[i]).toHaveCSS('display', 'inline-block');
          await expect(headers[i]).toHaveCSS('font-size', '16px');
          await expect(headers[i]).toHaveCSS('font-weight', '500');
        }

        await expect(cartPage.cartFooter).toHaveCSS('display', 'flex');
        for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
          const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
          await expect(cartPage.actionButton.nth(i)).toContainClass(expectedClass);
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('color', COLORS.buttons[i].textColor);
          const expectedBorderStyle = i === 1 ? '0px none' : '1px solid';
          await expect(cartPage.actionButton.nth(i)).toHaveCSS(
            'border',
            `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`
          );
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('border-radius', '4px');
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('font-size', '16px');
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('font-weight', '500');
        }
      });

      test('Cursor is pointer for "Continue Shopping" and "Checkout" buttons', async () => {
        for (let i = 0; i < (await cartPage.actionButton.count()); i++) {
          await expect(cartPage.actionButton.nth(i)).toHaveCSS('cursor', 'pointer');
        }
      });

      test('"Checkout" button is enabled even when cart is empty', async () => {
        await expect(cartPage.actionButton.nth(1)).toBeEnabled();
      });

      test.describe('Visual tests', () => {
        test('Default state', async ({ page }) => {
          await expect(page).toHaveScreenshot('emptyCart.png', { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          await cartPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
        });
      });
    });

    test.describe('Behavioural tests', () => {
      test('"Continue Shopping" button opens inventory page', async ({ page, baseURL }) => {
        await cartPage.actionButton.nth(0).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      test('"Checkout" button opens checkout page', async ({ page, baseURL }) => {
        await cartPage.actionButton.nth(1).click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutInfoPage}`);
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
        await expect(cartPage.cartList).toBeVisible();
        await expect(cartPage.qtyHeader).toBeVisible();
        await expect(cartPage.descHeader).toBeVisible();
        await expect(cartPage.cartItem).toHaveCount(productIds.length);

        // Verify each item in the cart displays all expected elements
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = cartPage.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            await expect(productElement).toBeVisible();
          }
        }
      });

      test('Text content of items in cart', async () => {
        for (let i = 0; i < productIds.length; i++) {
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(PRODUCT_INFO[i].title);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i].description
          );
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${PRODUCT_INFO[i].price}`);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.button)).toHaveText(EXPECTED_TEXT.removeButton);
        }
      });

      test('Cart item element styling', async () => {
        let element: Locator;
        for (let i = 0; i < productIds.length; i++) {
          element = cartPage.cartItem.nth(i);
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '8px');
          await expect(element).toHaveCSS('display', 'flex');

          element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('box-sizing', 'border-box');
          await expect(element).toHaveCSS('font-size', '14px');
          await expect(element).toHaveCSS('font-weight', '400');
          await expect(element).toHaveCSS('text-align', 'center');

          element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveCSS('color', COLORS.itemList.titleColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.description);
          await expect(element).toHaveCSS('color', COLORS.itemList.textColor);
          await expect(element).toHaveCSS('font-size', '14px');

          element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveCSS('border-top', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('color', COLORS.itemList.textColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.button);
          await expect(element).toContainClass('btn_secondary');
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.itemList.button.removeButtonColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('box-sizing', 'border-box');
          await expect(element).toHaveCSS('color', COLORS.itemList.button.removeButtonColor);
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Cart item title changes style on hover', async () => {
        for (let i = 0; i < productIds.length; i++) {
          const element = cartPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await element.hover();
          await expect(element).toHaveCSS('color', COLORS.itemList.hoverColor);
        }
      });

      test('Cursor is pointer for title link and "Remove" button', async () => {
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = cartPage.getProductElement(
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
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(product.title);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(product.description);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${product.price}`);
        }
      });

      test('Item quantities cannot be edited', async () => {
        // Proving the item quantity isn't editable is a bit tricky as the element isn't an input or textbox so we
        // can't use the .not.toBeEditable() assertion. Instead verify the tag is a div (not an input) and the
        // isContentEditable property is false
        for (let i = 0; i < productIds.length; i++) {
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty('tagName', 'DIV');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty(
            'isContentEditable',
            false
          );
        }
      });

      test('Item title link does not explicitly reference product page', async () => {
        for (let i = 0; i < productIds.length; i++) {
          // I don't like using locators within tests but this is the easiest way of conducting this test
          const LINK = cartPage.cartItem.nth(i).locator('a');
          await expect(LINK).toHaveCount(1);
          await expect(LINK).toHaveId(new RegExp('item_\\d_title_link'));
          await expect(LINK).toHaveAttribute('href', '#');
        }
      });

      test.describe('Visual tests', () => {
        test('Single product in cart', async ({ page }) => {
          await setCartContentsInLocalStorage(page, [0], URLS.cartPage);
          await expect(cartPage.cartList).toHaveScreenshot('singleProductInCart.png');
        });

        test('All products in cart', async () => {
          await expect(cartPage.cartList).toHaveScreenshot('allProductsInCart.png');
        });
      });
    });

    test.describe('Behavioural tests', () => {
      test('Cart is empty after removing only item', async ({ page }) => {
        await setCartContentsInLocalStorage(page, [0], URLS.cartPage);
        await cartPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
        await expect(cartPage.cartItem).toHaveCount(0);
        await expect(page).toHaveScreenshot('emptyCart.png', { fullPage: true });
      });

      test('Remaining items unchanged after removing last item from cart', async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.cartPage);
        await cartPage.getProductElement(productIds.length - 1, PRODUCT_ELEMENTS.button).click();
        const remainingProducts = productIds.slice(0, -1);
        await expect(cartPage.cartItem).toHaveCount(remainingProducts.length);
        for (let i = 0; i < remainingProducts.length; i++) {
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(PRODUCT_INFO[i].title);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i].description
          );
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${PRODUCT_INFO[i].price}`);
        }
      });

      test('List items move up after removing first item from cart', async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.cartPage);
        await cartPage.getProductElement(0, PRODUCT_ELEMENTS.button).click();
        const remainingProducts = productIds.slice(1);
        await expect(cartPage.cartItem).toHaveCount(remainingProducts.length);
        for (let i = 0; i < remainingProducts.length; i++) {
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(PRODUCT_INFO[i + 1].title);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i + 1].description
          );
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
            `\$${PRODUCT_INFO[i + 1].price}`
          );
        }
      });

      test('List items update correctly after removing random item from cart', async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.cartPage);

        // There are only 6 items available and removing the first and last are already covered by previous tests
        // so if the item is truly random then 1 time in 3 we're not testing anything new here. Therefore, force
        // the removed item to be something other than the first or last
        const middleItems = productIds.slice(1, -1);
        //Add 1 to the random index to account for the first item in the cart (which we want to retain)
        const itemIndex = Math.floor(Math.random() * middleItems.length) + 1;
        await cartPage.getProductElement(itemIndex, PRODUCT_ELEMENTS.button).click();
        const remainingProducts = productIds.filter((id) => id !== PRODUCT_INFO[itemIndex].id);
        for (let i = 0; i < remainingProducts.length; i++) {
          const product = PRODUCT_INFO.filter((a) => a.id === remainingProducts[i])[0];
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(product.title);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(product.description);
          await expect(cartPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(`\$${product.price}`);
        }
      });
    });
  });
});
