import { test, expect, Locator } from '@playwright/test';
import ProductCategoryPage from '../pages/productCategoryPage';
import {
  ExpectedText,
  ProductCategories,
  Links,
  Filters,
  Products,
  Defaults,
  QueryParams,
  SecondaryProductCategories,
  PrimaryProductCategories,
} from '../data/productCategoryPage';
import { ProductItemElements } from '../pages/components/productItem';
import { Colors, Links as HeaderLinks, MenuItemText, SubMenuKeys } from '../data/pageHeader';
import * as dotenv from 'dotenv';

function getProductCategories(lvl: number, ...args: string[]): string[] {
  if (lvl === 0) return process.env.TEST_MODE === 'full' ? Object.keys(ProductCategories) : ['Women'];
  if (lvl === 1)
    return process.env.TEST_MODE === 'full'
      ? PrimaryProductCategories.hasOwnProperty(args[0])
        ? Object.keys(ProductCategories[args[0]])
        : ['']
      : ['Tops'];
  if (lvl === 2)
    return process.env.TEST_MODE === 'full'
      ? args[1].endsWith('SubMenu')
        ? Object.keys(ProductCategories[args[0]][args[1]])
        : ['']
      : [''];
  else return [''];
}

function getUrl(lvl0Category: string, lvl1Category: string, lvl2Category: string): string {
  return lvl1Category
    ? lvl2Category
      ? ProductCategories[lvl0Category][lvl1Category][lvl2Category]
      : ProductCategories[lvl0Category][lvl1Category]
    : ProductCategories[lvl0Category];
}

function getCategory(lvl0Category: string, lvl1Category: string, lvl2Category: string): string {
  return lvl1Category
    ? lvl2Category
      ? `${lvl0Category}${lvl2Category}`
      : `${lvl0Category}${lvl1Category}`
    : lvl0Category;
}

function getPageName(lvl0Category: string, lvl1Category: string, lvl2Category: string): string {
  return lvl1Category
    ? lvl2Category
      ? `${lvl0Category} > ${lvl1Category.replace('SubMenu', '')} > ${lvl2Category}`
      : `${lvl0Category} > ${lvl1Category}`
    : lvl0Category;
}

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

function buildQueryParams(...args: string[]) {
  const queryParams = args.filter((arg) => arg != '');
  return queryParams.length === 0 ? '' : `?${queryParams.join('&')}`;
}

const Timeouts = {
  Test: 30000,
  Visual: 20000,
};

dotenv.config();
for (const lvl0Category of getProductCategories(0)) {
  for (const lvl1Category of getProductCategories(1, lvl0Category)) {
    for (const lvl2Category of getProductCategories(2, lvl0Category, lvl1Category)) {
      const category = getCategory(lvl0Category, lvl1Category, lvl2Category);
      const pageName = getPageName(lvl0Category, lvl1Category, lvl2Category);

      test.describe(`${pageName} page tests`, () => {
        let productCategoryPage: ProductCategoryPage;
        let url: string;
        test.beforeEach(async ({ page }) => {
          productCategoryPage = new ProductCategoryPage(page);
          url = getUrl(lvl0Category, lvl1Category, lvl2Category);
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

          test('Text content of main page elements', async () => {
            const categoryExpectedText = ExpectedText[category];
            await expect.soft(productCategoryPage.breadcrumbsContainer).toHaveText(categoryExpectedText.Breadcrumbs);
            await expect.soft(productCategoryPage.pageTitle).toHaveText(categoryExpectedText.Title);
            const sidebarBlocks = productCategoryPage.sidebarBlock;
            await expect.soft(sidebarBlocks).toHaveCount(ExpectedText.SidebarBlocks.length);
            for (let i = 0; i < ExpectedText.SidebarBlocks.length; i++) {
              await expect.soft(sidebarBlocks.nth(i)).toHaveText(ExpectedText.SidebarBlocks[i], { useInnerText: true });
            }
            await expect
              .soft(productCategoryPage.productCount)
              .toHaveText(categoryExpectedText.ProductCount, { useInnerText: true });
          });

          // Filters split into separate test to avoid making the above test really hard to read (& develop)
          test('Text content of filters', async () => {
            await expect.soft(productCategoryPage.filtersTitle).toHaveText(ExpectedText.FiltersTitle);
            const filterCategories = productCategoryPage.filterCategory;
            const expectedFilters = Filters[category];
            await expect.soft(filterCategories).toHaveCount(expectedFilters.length);
            for (let i = 0; i < expectedFilters.length; i++) {
              await expect
                .soft(await productCategoryPage.getFilterCategoryElement(filterCategories.nth(i), 'title'))
                .toHaveAttribute('aria-expanded', 'false');
              await expect.soft(filterCategories.nth(i)).toHaveText(expectedFilters[i].title, { useInnerText: true });
              const filterItems = await productCategoryPage.getFilterItems(
                filterCategories.nth(i),
                expectedFilters[i].title,
              );
              await expect.soft(filterItems).toHaveCount(expectedFilters[i].options.length);
              for (let j = 0; j < expectedFilters[i].options.length; j++) {
                const expectedTitle = expectedFilters[i].options[j].title;
                const expectedText = `${expectedFilters[i].options[j].title} ${expectedFilters[i].options[j].count}\n item`;
                if (['SIZE', 'COLOR'].includes(expectedFilters[i].title)) {
                  await expect.soft(filterItems.nth(j)).toHaveAttribute('aria-label', expectedTitle);
                } else {
                  await expect.soft(filterItems.nth(j)).toHaveText(expectedText, {
                    useInnerText: true,
                  });
                }
              }
            }
          });

          test('Only one filter can be expanded at a time', async ({}, testInfo) => {
            test.setTimeout(testInfo.timeout + Timeouts.Test);
            const filterCategories = productCategoryPage.filterCategory;
            const numFilterCategories = Object.keys(Filters[category]).length;
            await expect.soft(filterCategories).toHaveCount(numFilterCategories);
            await expect
              .soft(await productCategoryPage.getFilterCategoryElement(filterCategories.first(), 'title'))
              .toHaveAttribute('aria-expanded', 'false');
            for (let i = 0; i < numFilterCategories; i++) {
              await filterCategories.nth(i).click();
              for (let j = 0; j < numFilterCategories; j++) {
                const categoryTitle = await productCategoryPage.getFilterCategoryElement(
                  filterCategories.nth(j),
                  'title',
                );
                const categoryContent = await productCategoryPage.getFilterCategoryElement(
                  filterCategories.nth(j),
                  'content',
                );
                await expect.soft(categoryTitle).toHaveAttribute('aria-selected', (i === j).toString());
                await expect.soft(categoryTitle).toHaveAttribute('aria-expanded', (i === j).toString());
                await expect.soft(categoryContent).toHaveAttribute('aria-hidden', (i !== j).toString());
              }
            }
          });

          test('Product item details', async ({}, testInfo) => {
            testInfo.setTimeout(testInfo.timeout * 2);
            const pageSize = Defaults.PageSize.Grid;
            for (let p = 0; p < Math.ceil(Products[category].length / pageSize); p++) {
              if (p > 0) await productCategoryPage.page.goto(`${url}?${QueryParams.Page}=${p + 1}`);
              const productDetails = Products[category].slice(p * pageSize, (p + 1) * pageSize);
              const productItems = productCategoryPage.productItem;
              await expect.soft(productItems).toHaveCount(productDetails.length);
              for (let i = 0; i < productDetails.length; i++) {
                await expect
                  .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                  .toHaveText(productDetails[i].name);
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
                  for (let j = 0; j < productDetails[i].sizes!.length; j++) {
                    await expect.soft(sizes.nth(j)).toHaveText(productDetails[i].sizes![j]);
                  }
                }
                if (productDetails[i].colors) {
                  const colors = productCategoryPage.getProductItemElement(i, ProductItemElements.Colors);
                  await expect.soft(colors).toHaveCount(productDetails[i].colors!.length);
                  for (let j = 0; j < productDetails[i].colors!.length; j++) {
                    await expect.soft(colors.nth(j)).toHaveCSS('background-color', productDetails[i].colors![j]);
                  }
                }
              }
            }
          });

          test('Corresponding topnav item highlighted', async ({}, testInfo) => {
            testInfo.skip(
              SecondaryProductCategories.hasOwnProperty(category),
              `${pageName} has no corresponding topnav item so skip test`,
            );
            const pageHeader = productCategoryPage.pageHeader;
            const lvl0MenuItems = await pageHeader.getTopnavMenuItem(pageHeader.topnav, 0);
            const lvl0Keys = SubMenuKeys(HeaderLinks.Topnav);
            await expect.soft(lvl0MenuItems).toHaveCount(lvl0Keys.length);
            for (let i = 0; i < lvl0Keys.length; i++) {
              const link = await pageHeader.getTopnavMenuLink(lvl0MenuItems.nth(i));
              if ((await MenuItemText(link)) === lvl0Category) {
                await verifyMenuItemHighlighting(link, 'bottom');

                const lvl1MenuItems = await pageHeader.getTopnavMenuItem(lvl0MenuItems.nth(i), 1);
                const lvl1Keys = SubMenuKeys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`]);
                await expect.soft(lvl1MenuItems).toHaveCount(lvl1Keys.length);

                for (let j = 0; j < lvl1Keys.length; j++) {
                  const link = await pageHeader.getTopnavMenuLink(lvl1MenuItems.nth(j));
                  const lvl2MenuItems = await pageHeader.getTopnavMenuItem(lvl1MenuItems.nth(j), 2);
                  if ((await MenuItemText(link)) === lvl1Category.replace('SubMenu', '')) {
                    if (url.split('/').length === 3) {
                      // Lvl1 category e.g. Women > Tops highlighted in topnav but no child menu items highlighted
                      await verifyMenuItemHighlighting(link, 'left');

                      if (
                        Object.keys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`]).includes(`${lvl1Category}SubMenu`)
                      ) {
                        const lvl2Keys = Object.keys(
                          HeaderLinks.Topnav[`${lvl0Category}SubMenu`][`${lvl1Category}SubMenu`],
                        );
                        await expect.soft(lvl2MenuItems).toHaveCount(lvl2Keys.length);
                        for (let k = 0; k < lvl2Keys.length; k++) {
                          const link = await pageHeader.getTopnavMenuLink(lvl2MenuItems.nth(k));
                          await verifyMenuItemHighlighting(link);
                        }
                      }
                    }
                    if (url.split('/').length === 4) {
                      // Lvl2 category e.g. Women > Tops > Jackets highlighted in topnav but parent menu item not highlighted
                      await verifyMenuItemHighlighting(link);

                      const lvl2Keys = Object.keys(HeaderLinks.Topnav[`${lvl0Category}SubMenu`][lvl1Category]);
                      await expect.soft(lvl2MenuItems).toHaveCount(lvl2Keys.length);
                      for (let k = 0; k < lvl2Keys.length; k++) {
                        const link = await pageHeader.getTopnavMenuLink(lvl2MenuItems.nth(k));
                        if ((await MenuItemText(link)) === lvl2Category) {
                          await verifyMenuItemHighlighting(link, 'left');
                        } else {
                          await verifyMenuItemHighlighting(link);
                        }
                      }
                    }
                  } else {
                    await verifyMenuItemHighlighting(link);
                  }
                }
              } else {
                await verifyMenuItemHighlighting(link);
              }
            }
          });

          test('Display of pagination controls', async () => {
            if (Products[category].length > 12) {
              const numPages = Math.ceil(Products[category].length / Defaults.PageSize.Grid);
              // First page
              await expect.soft(productCategoryPage.previousPageButton).not.toBeVisible();
              expect.soft(await productCategoryPage.numberedPageButton.count()).toBeGreaterThan(0);
              await expect.soft(productCategoryPage.nextPageButton).toBeVisible();
              // Other pages
              for (let i = 1; i < numPages; i++) {
                await productCategoryPage.nextPageButton.click();
                await expect.soft(productCategoryPage.previousPageButton).toBeVisible();
                if (i < numPages - 1) {
                  await expect.soft(productCategoryPage.nextPageButton).toBeVisible();
                } else {
                  await expect.soft(productCategoryPage.nextPageButton).not.toBeVisible();
                }
              }
            } else {
              await expect.soft(productCategoryPage.previousPageButton).not.toBeVisible();
              await expect.soft(productCategoryPage.numberedPageButton).not.toBeVisible();
              await expect.soft(productCategoryPage.nextPageButton).not.toBeVisible();
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

          test('Filter links', async ({ baseURL }) => {
            const filterCategories = productCategoryPage.filterCategory;
            const expectedFilters = Filters[category];
            await expect.soft(filterCategories).toHaveCount(expectedFilters.length);
            for (let i = 0; i < expectedFilters.length; i++) {
              await expect
                .soft(await productCategoryPage.getFilterCategoryElement(filterCategories.nth(i), 'title'))
                .toHaveAttribute('aria-expanded', 'false');
              const filterItems = await productCategoryPage.getFilterItems(
                filterCategories.nth(i),
                expectedFilters[i].title,
              );
              await expect.soft(filterItems).toHaveCount(expectedFilters[i].options.length);
              for (let j = 0; j < expectedFilters[i].options.length; j++) {
                const expectedUrl = `${baseURL}${expectedFilters[i].options[j].link}`;
                await expect.soft(filterItems.nth(j)).toHaveAttribute('href', expectedUrl);
              }
            }
          });

          test('Product links', async ({ baseURL }, testInfo) => {
            testInfo.setTimeout(testInfo.timeout * 2);
            const pageSize = Defaults.PageSize.Grid;
            for (let p = 0; p < Math.ceil(Products[category].length / pageSize); p++) {
              if (p > 0) await productCategoryPage.page.goto(`${url}?${QueryParams.Page}=${p + 1}`);
              const productDetails = Products[category].slice(p * pageSize, (p + 1) * pageSize);
              const products = productCategoryPage.productItem;
              await expect.soft(products).toHaveCount(productDetails.length);
              for (let i = 0; i < productDetails.length; i++) {
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
            }
          });

          test('Pagination button links', async ({ baseURL }) => {
            // Page 1 will be displayed by default and the currently selected page doesn't have a link
            const pageNumButtons = productCategoryPage.numberedPageButton;
            const expectedNumPages = Math.ceil(Products[category].length / Defaults.PageSize.Grid);
            await expect.soft(pageNumButtons).toHaveCount(expectedNumPages - 1);
            for (let i = 0; i < expectedNumPages - 1; i++) {
              await expect
                .soft(pageNumButtons.nth(i))
                .toHaveAttribute('href', `${baseURL}${url}?${QueryParams.Page}=${i + 2}`);
            }

            if (expectedNumPages > 1) {
              await expect
                .soft(productCategoryPage.nextPageButton)
                .toHaveAttribute('href', `${baseURL}${url}?${QueryParams.Page}=2`);
              for (let i = 2; i <= expectedNumPages; i++) {
                await productCategoryPage.nextPageButton.click();
                await expect
                  .soft(productCategoryPage.previousPageButton)
                  .toHaveAttribute('href', `${baseURL}${url}?${QueryParams.Page}=${i - 1}`);
                if (i < expectedNumPages) {
                  await expect
                    .soft(productCategoryPage.nextPageButton)
                    .toHaveAttribute('href', `${baseURL}${url}?${QueryParams.Page}=${i + 1}`);
                }
              }
            }
          });
        });

        test.describe('Visual tests', () => {
          test('Product category page appearance', async ({ browserName }) => {
            const imageName = `${category.replace(category.charAt(0), category.charAt(0).toLowerCase())}.png`;
            // I don't like having any differences when comparing screenshots but Firefox can render the colour swatches slightly differently
            const maxDiffPixels = browserName === 'firefox' ? 600 : 0;
            await expect(productCategoryPage.mainContent).toHaveScreenshot(imageName, {
              timeout: Timeouts.Visual,
              maxDiffPixels: maxDiffPixels,
            });
          });
        });

        test.describe('Display options tests', () => {
          test('Sort options', async () => {
            const sortOptions = ExpectedText.SortOptions.join('\n');
            await expect.soft(productCategoryPage.sortByDropdown).toHaveText(sortOptions, { useInnerText: true });
          });

          test('Page size options', async () => {
            const gridPageSizes = ExpectedText.PageSizes.Grid.join('\n');
            await expect.soft(productCategoryPage.pageSizeDropdown).toHaveText(gridPageSizes, { useInnerText: true });

            do {
              await productCategoryPage.displayAsListButton.click();
            } while (!productCategoryPage.page.url().endsWith(`?${QueryParams.DisplayMode.List}`));
            await expect.soft(productCategoryPage.productsList).toBeVisible();
            const listPageSizes = ExpectedText.PageSizes.List.join('\n');
            await expect.soft(productCategoryPage.pageSizeDropdown).toHaveText(listPageSizes, { useInnerText: true });
          });

          test('Display options tooltips', async () => {
            // It seems the 'title' attribute is used to determine what to display in the tooltips
            const tooltips = ExpectedText.Tooltips;
            await expect.soft(productCategoryPage.displayAsGridButton).toHaveAttribute('title', tooltips.Grid);
            await expect.soft(productCategoryPage.displayAsListButton).toHaveAttribute('title', tooltips.List);
            await expect
              .soft(productCategoryPage.sortDirectionButton)
              .toHaveAttribute('title', tooltips.SortDescending);
            do {
              await productCategoryPage.sortDirectionButton.click();
            } while (productCategoryPage.page.url().endsWith('#'));
            await expect.soft(productCategoryPage.sortDirectionButton).toHaveAttribute('title', tooltips.SortAscending);
            if (Products[category].length > Defaults.PageSize.Grid) {
              await expect.soft(productCategoryPage.nextPageButton).toHaveAttribute('title', tooltips.NextPage);
            }
          });

          test('Display as list/grid', async ({ baseURL }) => {
            do {
              await productCategoryPage.displayAsListButton.click();
            } while (!productCategoryPage.page.url().endsWith(`?${QueryParams.DisplayMode.List}`));
            await expect.soft(productCategoryPage.productsGrid).not.toBeVisible();
            await expect.soft(productCategoryPage.productsList).toBeVisible();
            await expect.soft(productCategoryPage.page).toHaveURL(`${baseURL}${url}?${QueryParams.DisplayMode.List}`);

            // Verify the same products are displayed just as a list rather than a grid
            let pageSize = Defaults.PageSize.List;
            let productDetails = Products[category].slice(0, pageSize);
            let productItems = productCategoryPage.productItem;
            await expect.soft(productItems).toHaveCount(productDetails.length);
            for (let i = 0; i < productDetails.length; i++) {
              // Only check name as we check the full product details in another test
              await expect
                .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                .toHaveText(productDetails[i].name);
            }

            do {
              await productCategoryPage.displayAsGridButton.click();
            } while (productCategoryPage.page.url().endsWith(`?${QueryParams.DisplayMode.List}`));
            await expect.soft(productCategoryPage.productsList).not.toBeVisible();
            await expect.soft(productCategoryPage.productsGrid).toBeVisible();
            await expect.soft(productCategoryPage.page).toHaveURL(`${baseURL}${url}`);

            // Verify the original products are displayed
            pageSize = Defaults.PageSize.Grid;
            productDetails = Products[category].slice(0, pageSize);
            productItems = productCategoryPage.productItem;
            await expect.soft(productItems).toHaveCount(productDetails.length);
            for (let i = 0; i < productDetails.length; i++) {
              await expect
                .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                .toHaveText(productDetails[i].name);
            }
          });

          test('Sort by', async ({ baseURL }) => {
            // Some product categories have complicated/incorrect price data that affects the sort order so skip the sort by price test for those categories
            const incorrectPriceDataCategories = [
              'WomenBottoms',
              'MenBottoms',
              'GearBags',
              'GearFitnessEquipment',
              'Yoga',
              'ErinRecommends',
            ];
            const sortOptions = incorrectPriceDataCategories.includes(category)
              ? ExpectedText.SortOptions.slice(0, -1)
              : ExpectedText.SortOptions;
            for (const sortOption of sortOptions) {
              let productDetails = [...Products[category]];
              let queryParams: string = '';
              if (sortOption !== 'Position') {
                const sortKey = sortOption === 'Product Name' ? 'name' : 'price';
                productDetails.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
                queryParams = `?${QueryParams.SortBy}=${sortKey}`;
              }
              productDetails = productDetails.slice(0, Defaults.PageSize.Grid);
              do {
                await productCategoryPage.sortByDropdown.selectOption(sortOption);
              } while (!productCategoryPage.page.url().endsWith(queryParams));
              // This should be a standard "hard" assertion as there is no point continuing if the URL isn't correct
              await expect(productCategoryPage.page).toHaveURL(`${baseURL}${url}${queryParams}`);
              const productItems = productCategoryPage.productItem;
              await expect.soft(productItems).toHaveCount(productDetails.length);
              for (let i = 0; i < productDetails.length; i++) {
                await expect
                  .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                  .toHaveText(productDetails[i].name);
              }
            }
          });

          test('Sort direction', async ({ baseURL }) => {
            // The sort effect is much easier to see and verify when sorted by product name
            const sortByQueryParam = 'product_list_order=name';
            // Navigate to the page sorted by product name directly to ensure the rest of the test waits until the page is fully loaded
            await productCategoryPage.page.goto(`${url}?${sortByQueryParam}`);
            for (const sortDirection of ['descending', 'ascending']) {
              let productDetails = [...Products[category]];
              productDetails.sort((a, b) => a['name'].localeCompare(b['name']));
              if (sortDirection === 'descending') productDetails.reverse();
              productDetails = productDetails.slice(0, Defaults.PageSize.Grid);
              const sortDirectionQueryParam =
                sortDirection === 'descending' ? QueryParams.SortDir.Descending : QueryParams.SortDir.Ascending;
              do {
                await productCategoryPage.sortDirectionButton.click();
              } while (productCategoryPage.page.url().endsWith('#'));
              await expect(productCategoryPage.page).toHaveURL(
                `${baseURL}${url}${buildQueryParams(sortByQueryParam, sortDirectionQueryParam)}`,
              );
              const productItems = productCategoryPage.productItem;
              await expect.soft(productItems).toHaveCount(productDetails.length);
              for (let i = 0; i < productDetails.length; i++) {
                await expect
                  .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                  .toHaveText(productDetails[i].name);
              }
            }
          });

          test('Page size', async ({ baseURL }) => {
            for (const pageSize of ExpectedText.PageSizes.Grid) {
              let productDetails = [...Products[category]];
              const queryParams = pageSize === 12 ? '' : `?${QueryParams.PageSize}=${pageSize}`;
              await productCategoryPage.pageSizeDropdown.selectOption(pageSize.toString());
              productDetails = productDetails.slice(0, pageSize);
              await expect(productCategoryPage.page).toHaveURL(`${baseURL}${url}${queryParams}`);
              const productItems = productCategoryPage.productItem;
              await expect.soft(productItems).toHaveCount(productDetails.length);
              for (let i = 0; i < productDetails.length; i++) {
                await expect
                  .soft(productCategoryPage.getProductItemElement(i, ProductItemElements.Name))
                  .toHaveText(productDetails[i].name);
              }
            }
          });
        });
      });
    }
  }
}
