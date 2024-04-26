import { test, expect } from '@playwright/test';
import ProductCategoryPage from '../pages/productCategoryPage';
import { ExpectedText, ProductCategories, Links, Products } from '../data/productCategoryPage';
import { ProductItemElements } from '../pages/components/productItem';

test.describe('Product category page tests', () => {
  let productCategoryPage: ProductCategoryPage;
  let category: string;
  test.beforeEach(async ({ page }) => {
    productCategoryPage = new ProductCategoryPage(page);
    const topLvlCategory =
      Object.keys(ProductCategories)[Math.floor(Math.random() * Object.keys(ProductCategories).length)];
    const subCategory = Object.keys(ProductCategories[topLvlCategory])[
      Math.floor(Math.random() * Object.keys(ProductCategories[topLvlCategory]).length)
    ];
    category = `${topLvlCategory}${subCategory}`;
    await productCategoryPage.open(ProductCategories[topLvlCategory][subCategory]);
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
        await productItems.nth(i).hover();
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.AddToCartButton))
          .toBeVisible();
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.AddToWishListButton))
          .toBeVisible();
        await expect
          .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.AddToCompareButton))
          .toBeVisible();
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
