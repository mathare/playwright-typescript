import { test, expect, Locator } from '@playwright/test';
import ProductCategoryPage from '../pages/productCategoryPage';
import { ExpectedText, ProductCategories, Links, Products } from '../data/productCategoryPage';
import { ProductItemElements } from '../pages/components/productItem';
import { Colors, Links as HeaderLinks, SubMenuKeys } from '../data/pageHeader';

async function verifyMenuItemHighlighting(link: Locator, position?: 'left' | 'bottom') {
  if (!position) {
    await expect.soft(link).toHaveCSS('border-color', Colors.Border.Inactive);
    await expect.soft(link).toHaveCSS('border-width', '0px');
  } else {
    const borderWidth = position === 'bottom' ? '0px 0px 3px' : '0px 0px 0px 3px';
    await expect.soft(link).toHaveCSS('border-color', Colors.Border.Active);
    await expect.soft(link).toHaveCSS('border-width', borderWidth);
  }
}

test.describe('Product category page tests', () => {
  let productCategoryPage: ProductCategoryPage;
  let lvl0Category: string;
  let lvl1Category: string;
  let lvl2Category: string;
  let category: string;
  let url: string;
  test.beforeEach(async ({ page }) => {
    productCategoryPage = new ProductCategoryPage(page);
    lvl0Category = Object.keys(ProductCategories)[Math.floor(Math.random() * Object.keys(ProductCategories).length)];
    lvl1Category = Object.keys(ProductCategories[lvl0Category])[
      Math.floor(Math.random() * Object.keys(ProductCategories[lvl0Category]).length)
    ];
    lvl2Category = lvl1Category.endsWith('SubMenu')
      ? Object.keys(ProductCategories[lvl0Category][lvl1Category])[
          Math.floor(Math.random() * Object.keys(ProductCategories[lvl0Category][lvl1Category]).length)
        ]
      : '';
    category = lvl2Category ? `${lvl0Category}${lvl2Category}` : `${lvl0Category}${lvl1Category}`;
    console.log(category);
    url = lvl2Category
      ? ProductCategories[lvl0Category][lvl1Category][lvl2Category]
      : ProductCategories[lvl0Category][lvl1Category];
    await productCategoryPage.open(url);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(productCategoryPage.globalMessage).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.header).toBeVisible();
      await expect.soft(productCategoryPage.pageHeader.topnav).toBeVisible();
      await expect.soft(productCategoryPage.breadcrumbsContainer).toBeVisible();
      await expect.soft(productCategoryPage.filters).toBeVisible();
      await expect.soft(productCategoryPage.sidebar).toBeVisible();
      await expect.soft(productCategoryPage.displayToolbar).toBeVisible();
      await expect.soft(productCategoryPage.productsGrid).toBeVisible();
      await expect.soft(productCategoryPage.paginationToolbar).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.footer).toBeVisible();
      await expect.soft(productCategoryPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Text content of page elements', async () => {
      const categoryExpectedText = ExpectedText[category];
      await expect.soft(productCategoryPage.breadcrumbsContainer).toHaveText(categoryExpectedText.Breadcrumbs);
      await expect.soft(productCategoryPage.pageTitle).toHaveText(categoryExpectedText.Title);
      await expect.soft(productCategoryPage.filtersTitle).toHaveText(ExpectedText.FiltersTitle);
      const filterOptions = productCategoryPage.filterOption;
      await expect.soft(filterOptions).toHaveCount(categoryExpectedText.Filters.length);
      for (let i = 0; i < (await filterOptions.count()); i++) {
        await expect.soft(filterOptions.nth(i)).toHaveText(categoryExpectedText.Filters[i], { useInnerText: true });
      }
      await expect
        .soft(productCategoryPage.productCount)
        .toHaveText(categoryExpectedText.ProductCount, { useInnerText: true });
    });

    test('Default product item details', async () => {
      //There are a maximum of 12 products displayed by default
      const productDetails = Products[category].slice(0, 12);
      const productItems = productCategoryPage.productItem;
      await expect.soft(productItems).toHaveCount(productDetails.length);
      for (let i = 0; i < (await productItems.count()); i++) {
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
          .toHaveText(productDetails[i].title);
        if (productDetails[i].rating) {
          await expect
            .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Rating))
            .toHaveText(productDetails[i].rating!);
        }
        if (productDetails[i].reviews) {
          await expect
            .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Reviews))
            .toHaveText(productDetails[i].reviews!);
        }
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Price).first())
          .toHaveText(productDetails[i].price);
        if (productDetails[i].sizes) {
          const sizes = productCategoryPage.getProductItemElement(i, ProductItemElements.Sizes);
          await expect.soft(sizes).toHaveCount(productDetails[i].sizes!.length);
          for (let j = 0; j < (await sizes.count()); j++) {
            await expect.soft(sizes.nth(j)).toHaveText(productDetails[i].sizes![j]);
          }
        }
        if (productDetails[i].colors) {
          const colors = productCategoryPage.getProductItemElement(i, ProductItemElements.Colors);
          await expect.soft(colors).toHaveCount(productDetails[i].colors!.length);
          for (let j = 0; j < (await colors.count()); j++) {
            await expect.soft(colors.nth(j)).toHaveCSS('background-color', productDetails[i].colors![j]);
          }
        }
      }
    });

    test('Corresponding topnav item highlighted', async () => {
      const pageHeader = productCategoryPage.pageHeader;
      const lvl0MenuItems = await pageHeader.getTopnavMenuItem(pageHeader.topnav, 0);
      const lvl0Keys = SubMenuKeys(HeaderLinks.Topnav);
      await expect.soft(lvl0MenuItems).toHaveCount(lvl0Keys.length);
      for (let i = 0; i < (await lvl0MenuItems.count()); i++) {
        const link = await pageHeader.getTopnavMenuLink(lvl0MenuItems.nth(i));
        if ((await link.textContent())!.replace(/\W+/g, '') === lvl0Category) {
          await verifyMenuItemHighlighting(link, 'bottom');

          const lvl1MenuItems = await pageHeader.getTopnavMenuItem(lvl0MenuItems.nth(i), 1);
          const lvl1Keys = SubMenuKeys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`]);
          await expect.soft(lvl1MenuItems).toHaveCount(lvl1Keys.length);

          if (url.split('/').length === 3) {
            // Lvl1 category e.g. Women > Tops highlighted in topnav but no child menu items highlighted
            for (let j = 0; j < (await lvl1MenuItems.count()); j++) {
              const link = await pageHeader.getTopnavMenuLink(lvl1MenuItems.nth(j));
              if ((await link.textContent())!.replace(/\W+/g, '') === lvl1Category.replace('SubMenu', '')) {
                await verifyMenuItemHighlighting(link, 'left');

                if (Object.keys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`]).includes(`${lvl1Category}SubMenu`)) {
                  const lvl2MenuItems = await pageHeader.getTopnavMenuItem(lvl1MenuItems.nth(j), 2);
                  const lvl2Keys = Object.keys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`][`${lvl1Category}SubMenu`]);
                  await expect.soft(lvl2MenuItems).toHaveCount(lvl2Keys.length);
                  for (let k = 0; k < (await lvl2MenuItems.count()); k++) {
                    const link = await pageHeader.getTopnavMenuLink(lvl2MenuItems.nth(k));
                    await verifyMenuItemHighlighting(link);
                  }
                }
              } else {
                await verifyMenuItemHighlighting(link);
              }
            }
          }
          if (url.split('/').length === 4) {
            // Lvl2 category e.g. Women > Tops > Jackets highlighted in topnav but parent menu item not highlighted
            for (let j = 0; j < (await lvl1MenuItems.count()); j++) {
              const link = await pageHeader.getTopnavMenuLink(lvl1MenuItems.nth(j));
              if ((await link.textContent())!.replace(/\W+/g, '') === lvl1Category.replace('SubMenu', '')) {
                await verifyMenuItemHighlighting(link);

                const lvl2MenuItems = await pageHeader.getTopnavMenuItem(lvl1MenuItems.nth(j), 2);
                const lvl2Keys = Object.keys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`][lvl1Category]);
                await expect.soft(lvl2MenuItems).toHaveCount(lvl2Keys.length);
                for (let k = 0; k < (await lvl2MenuItems.count()); k++) {
                  const link = await pageHeader.getTopnavMenuLink(lvl2MenuItems.nth(k));
                  if ((await link.textContent())!.replace(/\W+/g, '') === lvl2Category) {
                    await verifyMenuItemHighlighting(link, 'left');
                  } else {
                    await verifyMenuItemHighlighting(link);
                  }
                }
              }
            }
          }
        } else {
          await verifyMenuItemHighlighting(link);
        }
      }
    });
  });

  test.describe('Link tests', () => {
    test('Breadcrumb links', async ({ baseURL }) => {
      const breadcrumbs = (await productCategoryPage.breadcrumbsContainer.innerText()).split('  ');
      // The last breadcrumb doesn't have a link as it is the current page
      for (let i = 0; i < breadcrumbs.length - 1; i++) {
        await expect
          .soft(productCategoryPage.breadcrumb.nth(i))
          .toHaveAttribute('href', `${baseURL}${Links[category].Breadcrumbs[breadcrumbs[i]]}`);
      }
    });

    test('Default product links', async ({ baseURL }) => {
      //There are a maximum of 12 products displayed by default
      const productDetails = Products[category].slice(0, 12);
      const products = productCategoryPage.productItem;
      await expect.soft(products).toHaveCount(productDetails.length);
      for (let i = 0; i < (await products.count()); i++) {
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.PhotoLink))
          .toHaveAttribute('href', `${baseURL}${productDetails[i].link}`);
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.NameLink))
          .toHaveAttribute('href', `${baseURL}${productDetails[i].link}`);
        if (productDetails[i].reviews) {
          await expect
            .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.ReviewsLink))
            .toHaveAttribute('href', `${baseURL}${productDetails[i].link}#reviews`);
        } else {
          await expect
            .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.ReviewsLink))
            .not.toBeVisible();
        }
      }
    });
  });
});
