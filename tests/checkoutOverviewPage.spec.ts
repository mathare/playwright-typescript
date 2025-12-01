import { expect, Locator, test } from '@playwright/test';
import { login, setCartContentsInLocalStorage } from '../helpers/utils';
import { CheckoutOverviewPage, COLORS, EXPECTED_TEXT, PRODUCT_ELEMENTS } from '../pages/checkoutOverviewPage';
import { URLS } from '../data/pages';
import { PRODUCT_INFO } from '../data/products';

test.describe('Checkout overview page tests', () => {
  let checkoutOverviewPage: CheckoutOverviewPage;

  test.beforeEach(async ({ page, baseURL }) => {
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    await login(page, baseURL!, 'standard_user');
  });

  test.describe('No items purchased', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(URLS.checkoutOverviewPage);
    });

    // Common cart elements can be tested without purchasing anything
    test.describe('Appearance tests', () => {
      test('Default element visibility', async () => {
        await expect(checkoutOverviewPage.pageHeader.primaryHeader).toBeVisible();
        await expect(checkoutOverviewPage.subtitle).toBeVisible();
        await expect(checkoutOverviewPage.checkoutSummaryContainer).toBeVisible();
        await expect(checkoutOverviewPage.cartList).toBeVisible();
        await expect(checkoutOverviewPage.qtyHeader).toBeVisible();
        await expect(checkoutOverviewPage.descHeader).toBeVisible();
        await expect(checkoutOverviewPage.cartItem).toHaveCount(0);
        await expect(checkoutOverviewPage.summaryInfo).toBeVisible();
        await expect(checkoutOverviewPage.paymentInfoLabel).toBeVisible();
        await expect(checkoutOverviewPage.paymentInfoValue).toBeVisible();
        await expect(checkoutOverviewPage.shippingInfoLabel).toBeVisible();
        await expect(checkoutOverviewPage.shippingInfoValue).toBeVisible();
        await expect(checkoutOverviewPage.priceTotalLabel).toBeVisible();
        await expect(checkoutOverviewPage.subtotalLabel).toBeVisible();
        await expect(checkoutOverviewPage.taxLabel).toBeVisible();
        await expect(checkoutOverviewPage.totalLabel).toBeVisible();
        await expect(checkoutOverviewPage.cartFooter).toBeVisible();
        await expect(checkoutOverviewPage.actionButton).toHaveCount(2);
        await expect(checkoutOverviewPage.cancelButton).toBeVisible();
        await expect(checkoutOverviewPage.finishButton).toBeVisible();
        await expect(checkoutOverviewPage.pageFooter.footer).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(checkoutOverviewPage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(checkoutOverviewPage.qtyHeader).toHaveText(EXPECTED_TEXT.qtyHeader);
        await expect(checkoutOverviewPage.descHeader).toHaveText(EXPECTED_TEXT.descHeader);
        await expect(checkoutOverviewPage.paymentInfoLabel).toHaveText(EXPECTED_TEXT.paymentInfo.label);
        await expect(checkoutOverviewPage.paymentInfoValue).toHaveText(EXPECTED_TEXT.paymentInfo.value);
        await expect(checkoutOverviewPage.shippingInfoLabel).toHaveText(EXPECTED_TEXT.shippingInfo.label);
        await expect(checkoutOverviewPage.shippingInfoValue).toHaveText(EXPECTED_TEXT.shippingInfo.value);
        await expect(checkoutOverviewPage.priceTotalLabel).toHaveText(EXPECTED_TEXT.priceInfo.label);
        // As the cart is empty the item total and tax are both zero
        await expect(checkoutOverviewPage.subtotalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.subtotalPrefix}0`);
        await expect(checkoutOverviewPage.taxLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.taxPrefix}0.00`);
        await expect(checkoutOverviewPage.totalLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.totalPrefix}0.00`);
        for (let i = 0; i < (await checkoutOverviewPage.actionButton.count()); i++) {
          await expect(checkoutOverviewPage.actionButton.nth(i)).toHaveText(EXPECTED_TEXT.buttons[i]);
        }
      });

      test('Default element styling', async ({ browserName }) => {
        let element = checkoutOverviewPage.subtitle;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.cartList;
        await expect(element).toHaveCSS('display', 'block');

        const headers = [checkoutOverviewPage.qtyHeader, checkoutOverviewPage.descHeader];
        for (let i = 0; i < headers.length; i++) {
          element = headers[i];
          await expect(element).toHaveCSS('color', COLORS.itemList.headerColor);
          await expect(element).toHaveCSS('display', 'inline-block');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }

        element = checkoutOverviewPage.paymentInfoLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.paymentInfoValue;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.shippingInfoLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.shippingInfoValue;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.priceTotalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutOverviewPage.subtotalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.taxLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutOverviewPage.totalLabel;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '800');

        for (let i = 0; i < (await checkoutOverviewPage.actionButton.count()); i++) {
          element = checkoutOverviewPage.actionButton.nth(i);
          const expectedClass = i == 1 ? 'btn_action' : 'btn_secondary';
          await expect(element).toContainClass(expectedClass);
          await expect(element).toHaveCSS('background-color', COLORS.buttons[i].backgroundColor);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          const expectedBorderStyle = i === 1 ? (browserName === 'firefox' ? '0px' : '0px none') : '1px solid';
          await expect(element).toHaveCSS('border', `${expectedBorderStyle} ${COLORS.buttons[i].borderColor}`);
          await expect(element).toHaveCSS('border-radius', '4px');
          await expect(element).toHaveCSS('font-size', '16px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Cursor is pointer for "Cancel" and "Finish" buttons', async () => {
        await expect(checkoutOverviewPage.cancelButton).toHaveCSS('cursor', 'pointer');
        await expect(checkoutOverviewPage.finishButton).toHaveCSS('cursor', 'pointer');
      });

      test('"Finish" button is enabled even when no items purchased', async () => {
        await expect(checkoutOverviewPage.finishButton).toBeEnabled();
      });

      test.describe('Visual tests', () => {
        test('Default state', async ({ page }) => {
          await expect(page).toHaveScreenshot('noItems.png', { fullPage: true });
        });

        test('Menu open', async ({ page }) => {
          await checkoutOverviewPage.pageHeader.menuButton.click();
          await expect(page).toHaveScreenshot('menuOpen.png', { fullPage: true });
        });
      });
    });

    test.describe('Behavioural tests', () => {
      test('"Cancel" button opens inventory page', async ({ page, baseURL }) => {
        await checkoutOverviewPage.cancelButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });

      test('"Finish" button opens checkout complete page', async ({ page, baseURL }) => {
        await checkoutOverviewPage.finishButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.checkoutCompletePage}`);
      });
    });
  });

  test.describe('Items purchased', () => {
    const productIds = PRODUCT_INFO.map((product) => product.id);

    test.describe('Appearance tests', () => {
      test.beforeEach(async ({ page }) => {
        await setCartContentsInLocalStorage(page, productIds, URLS.checkoutOverviewPage);
      });

      test('Item list element visibility', async () => {
        await expect(checkoutOverviewPage.cartList).toBeVisible();
        await expect(checkoutOverviewPage.qtyHeader).toBeVisible();
        await expect(checkoutOverviewPage.descHeader).toBeVisible();
        await expect(checkoutOverviewPage.cartItem).toHaveCount(productIds.length);

        // Verify each item purchased displays all expected elements
        const productElements = Object.keys(PRODUCT_ELEMENTS);
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = checkoutOverviewPage.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            // There is no button to remove the product from the cart as we have already purchased it
            if (productElements[j] === 'button') {
              await expect(productElement).toHaveCount(0);
            } else {
              await expect(productElement).toBeVisible();
            }
          }
        }
      });

      test('Text content of items purchased', async () => {
        for (let i = 0; i < productIds.length; i++) {
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(
            PRODUCT_INFO[i].title
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            PRODUCT_INFO[i].description
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
            `\$${PRODUCT_INFO[i].price}`
          );
        }
      });

      test('Purchased item element styling', async () => {
        let element: Locator;
        for (let i = 0; i < productIds.length; i++) {
          element = checkoutOverviewPage.cartItem.nth(i);
          await expect(element).toHaveCSS('background-color', COLORS.backgroundColor);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('border-radius', '8px');
          await expect(element).toHaveCSS('display', 'flex');

          element = checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty);
          await expect(element).toHaveCSS('border', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('box-sizing', 'border-box');
          await expect(element).toHaveCSS('font-size', '14px');
          await expect(element).toHaveCSS('font-weight', '400');
          await expect(element).toHaveCSS('text-align', 'center');

          element = checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await expect(element).toHaveCSS('color', COLORS.itemList.titleColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');

          element = checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.description);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '14px');

          element = checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.price);
          await expect(element).toHaveCSS('border-top', `1px solid ${COLORS.itemList.borderColor}`);
          await expect(element).toHaveCSS('color', COLORS.textColor);
          await expect(element).toHaveCSS('font-size', '20px');
          await expect(element).toHaveCSS('font-weight', '500');
        }
      });

      test('Purchased item title changes style on hover', async () => {
        for (let i = 0; i < productIds.length; i++) {
          const element = checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.title);
          await element.hover();
          await expect(element).toHaveCSS('color', COLORS.itemList.hoverColor);
        }
      });

      test('Cursor is pointer for title link', async ({ browserName }) => {
        test.skip(browserName === 'webkit');
        const productElements = Object.keys(PRODUCT_ELEMENTS).filter((el) => el !== 'button');
        for (let i = 0; i < productIds.length; i++) {
          for (let j = 0; j < productElements.length; j++) {
            const productElement = checkoutOverviewPage.getProductElement(
              i,
              PRODUCT_ELEMENTS[productElements[j] as keyof typeof PRODUCT_ELEMENTS]
            );
            const cursorStyle = productElements[j] === 'title' ? 'pointer' : 'auto';
            await expect(productElement).toHaveCSS('cursor', cursorStyle);
          }
        }
      });

      test('Items purchased match order in which products were added', async ({ page }) => {
        const shuffledProductIds = [...productIds].sort(() => Math.random() - 0.5);
        await setCartContentsInLocalStorage(page, shuffledProductIds, URLS.checkoutOverviewPage);

        for (let i = 0; i < shuffledProductIds.length; i++) {
          const product = PRODUCT_INFO.filter((a) => a.id === shuffledProductIds[i])[0];
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveText('1');
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.title)).toHaveText(product.title);
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.description)).toHaveText(
            product.description
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.price)).toHaveText(
            `\$${product.price}`
          );
        }
      });

      test('Item quantities cannot be edited', async () => {
        // Proving the item quantity isn't editable is a bit tricky as the element isn't an input or textbox so we
        // can't use the .not.toBeEditable() assertion. Instead verify the tag is a div (not an input) and the
        // isContentEditable property is false
        for (let i = 0; i < productIds.length; i++) {
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty(
            'tagName',
            'DIV'
          );
          await expect(checkoutOverviewPage.getProductElement(i, PRODUCT_ELEMENTS.qty)).toHaveJSProperty(
            'isContentEditable',
            false
          );
        }
      });

      test('Item title link does not explicitly reference product page', async () => {
        for (let i = 0; i < productIds.length; i++) {
          // I don't like using locators within tests but this is the easiest way of conducting this test
          const LINK = checkoutOverviewPage.cartItem.nth(i).locator('a');
          await expect(LINK).toHaveCount(1);
          await expect(LINK).toHaveId(new RegExp('item_\\d_title_link'));
          await expect(LINK).toHaveAttribute('href', '#');
        }
      });

      test('Price total info reflects cost of items purchased', async ({ page }) => {
        // Sort products into random order using the Fisher-Yates algorithm
        let products = [...PRODUCT_INFO];
        let j = products.length;
        while (j) {
          const i = Math.floor(Math.random() * j--);
          [products[j], products[i]] = [products[i], products[j]];
        }
        // Slice off first n elements of the array
        const purchasedProducts = products.slice(0, Math.ceil(Math.random() * products.length));
        await setCartContentsInLocalStorage(
          page,
          purchasedProducts.map((prod) => prod.id),
          URLS.checkoutOverviewPage
        );

        const subtotalAmount = purchasedProducts.reduce((n, { price }) => n + Number(price), 0);
        // Tax is charged at 8%
        const taxAmount = (Math.round(subtotalAmount * 100 * 0.08) / 100).toFixed(2);
        const totalAmount = (Math.round((Number(subtotalAmount) + Number(taxAmount)) * 100) / 100).toFixed(2);
        await expect(checkoutOverviewPage.subtotalLabel).toHaveText(
          `${EXPECTED_TEXT.priceInfo.subtotalPrefix}${subtotalAmount}`
        );
        await expect(checkoutOverviewPage.taxLabel).toHaveText(`${EXPECTED_TEXT.priceInfo.taxPrefix}${taxAmount}`);
        await expect(checkoutOverviewPage.totalLabel).toHaveText(
          `${EXPECTED_TEXT.priceInfo.totalPrefix}${totalAmount}`
        );
      });

      test.describe('Visual tests', () => {
        test('Single product purchased', async ({ page }) => {
          await setCartContentsInLocalStorage(page, [0], URLS.checkoutOverviewPage);
          await expect(checkoutOverviewPage.checkoutSummaryContainer).toHaveScreenshot('singleProductPurchased.png');
        });

        test('All products purchased', async () => {
          await expect(checkoutOverviewPage.checkoutSummaryContainer).toHaveScreenshot('allProductsPurchased.png');
        });
      });
    });
  });
});
