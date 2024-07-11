import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { ProductPage, ReviewDetails } from '../pages/productPage';
import { ExpectedText, Products, SimilarProducts } from '../data/productPage';
import { ProductItemElements } from '../pages/components/productItem';

function verifyImageSrcEquality(actualSrc: string, expectedSrc: string) {
  // The images can be in different folders in the media cache so can't compare the src attributes directly
  // Instead just compare the filenames which will be the last element of the array split by slash
  expect.soft(actualSrc?.split('/').pop()).toEqual(expectedSrc?.split('/').pop());
}

type BoundingBox = { x: number; y: number; width: number; height: number } | null;
const range = (midpoint: number, tolerance: number) =>
  Array.from({ length: 2 * tolerance + 1 }, (_, i) => midpoint - tolerance + i);
function verifyBoundingBoxEquality(actualBox: BoundingBox, expectedBox: BoundingBox) {
  // NB x & y are not checked for equality as they can vary based on scroll position, which can
  // change during a test so only check width & height of the element
  // Widths can be up to 1px different, heights should match exactly
  const tolerance = { width: 1, height: 0 };
  expect.soft(range(Math.round(expectedBox!.width), tolerance.width)).toContain(Math.round(actualBox!.width));
  expect.soft(range(Math.round(expectedBox!.height), tolerance.height)).toContain(Math.round(actualBox!.height));
}

dotenv.config();
const products = process.env.TEST_MODE === 'full' ? Object.keys(Products) : ['RadiantTee'];
for (const product of products) {
  test.describe(`${product} page tests`, () => {
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
      productPage = new ProductPage(page);
      await productPage.open(Products[product].link);
    });

    test.describe('Appearance tests', () => {
      // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
      // The tests could be combined but I have split them here to make them easier to read and maintain

      test('Main page elements displayed', async () => {
        await expect.soft(productPage.globalMessage).toBeVisible();
        await expect.soft(productPage.pageHeader.header).toBeVisible();
        await expect.soft(productPage.pageHeader.topnav).toBeVisible();
        await expect.soft(productPage.breadcrumbsContainer).toBeVisible();
        await expect.soft(productPage.imageCarousel).toBeVisible();
        await expect.soft(productPage.productInfo).toBeVisible();
        await expect.soft(productPage.addToCartButton).toBeVisible();
        await expect.soft(productPage.addToWishlistButton).toBeVisible();
        await expect.soft(productPage.addToCompareButton).toBeVisible();
        await expect.soft(productPage.secondaryInfo).toBeVisible();
        await expect.soft(productPage.similarProductsGrid).toBeVisible();
        await expect.soft(productPage.pageFooter.footer).toBeVisible();
        await expect.soft(productPage.pageFooter.copyrightFooter).toBeVisible();
      });

      test('Product details', async ({ baseURL }) => {
        // The breadcrumbs will vary depending on the route taken to the page but by navigating to the product page
        // directly the breadcrumbs will always be Home > {Product Name}
        const breadcrumbsExpectedText = `Home  ${Products[product].name}`;
        await expect.soft(productPage.breadcrumbsContainer).toHaveText(breadcrumbsExpectedText);

        await expect.soft(productPage.productName).toHaveText(Products[product].name);
        if (Products[product].reviews) {
          await expect.soft(productPage.reviews).toHaveText(Products[product].reviews!);
        }
        if (Products[product].rating) {
          await expect.soft(productPage.rating).toHaveAttribute('title', Products[product].rating!);
        }
        if (Products[product].reviewDetails) {
          await expect.soft(productPage.reviews).toHaveText(`${Products[product].reviewDetails!.length} Reviews`);
        }
        await expect.soft(productPage.price).toHaveText(Products[product].price);
        const availability = Products[product].inStock ? 'In stock' : 'Out of stock';
        await expect.soft(productPage.availability).toHaveText(availability);
        await expect.soft(productPage.sku).toHaveText(Products[product].sku!);

        if (Products[product].sizes) {
          await expect.soft(productPage.sizeSwatch).toHaveCount(Products[product].sizes!.length);
          for (let i = 0; i < Products[product].sizes!.length; i++) {
            await expect.soft(productPage.sizeSwatch.nth(i)).toHaveText(Products[product].sizes![i]);
          }
        }

        if (Products[product].colors) {
          await expect.soft(productPage.colorSwatch).toHaveCount(Products[product].colors!.length);
          for (let i = 0; i < Products[product].colors!.length; i++) {
            await expect
              .soft(productPage.colorSwatch.nth(i))
              .toHaveCSS('background-color', Products[product].colors![i]);
          }
        }

        await expect.soft(productPage.quantityInput).toHaveValue('1');

        if (Products[product].description) {
          await expect.soft(productPage.description).toHaveText(Products[product].description!, { useInnerText: true });
        }
        if (Products[product].additionalInfo) {
          await expect.soft(productPage.additionalInfo).toHaveText(Products[product].additionalInfo!);
        }
        if (Products[product].reviewDetails) {
          // Reviews only loaded when tab selected
          await productPage.reviewsTab.click();
          await expect(productPage.review).toHaveCount(Products[product].reviewDetails!.length);
          for (let i = 0; i < Products[product].reviewDetails!.length; i++) {
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.title))
              .toHaveText(Products[product].reviewDetails![i].title);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.rating))
              .toHaveText(Products[product].reviewDetails![i].rating, { useInnerText: true });
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.description))
              .toHaveText(Products[product].reviewDetails![i].reviewText);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.reviewer))
              .toHaveText(Products[product].reviewDetails![i].reviewer);
            await expect
              .soft(productPage.getReviewDetail(i, ReviewDetails.date))
              .toHaveText(Products[product].reviewDetails![i].date);
          }
        }

        if (SimilarProducts[product]) {
          const similarProductItems = productPage.similarProductItem;
          await expect.soft(similarProductItems).toHaveCount(SimilarProducts[product].length);
          for (let i = 0; i < SimilarProducts[product].length; i++) {
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.Name))
              .toHaveText(SimilarProducts[product][i].name);
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.Price).first())
              .toHaveText(SimilarProducts[product][i].price);
          }
        }
      });

      test('Product info tabs', async () => {
        // Description/details tab selected by default
        await expect.soft(productPage.descriptionTab).toHaveClass(/active/);
        await expect.soft(productPage.descriptionTab).toHaveAttribute('aria-expanded', 'true');
        await expect.soft(productPage.additionalInfoTab).not.toHaveClass(/active/);
        await expect.soft(productPage.additionalInfoTab).toHaveAttribute('aria-expanded', 'false');
        await expect.soft(productPage.reviewsTab).not.toHaveClass(/active/);
        await expect.soft(productPage.reviewsTab).toHaveAttribute('aria-expanded', 'false');

        const tabs = [productPage.additionalInfoTab, productPage.reviewsTab, productPage.descriptionTab];
        for (let i = 0; i < tabs.length; i++) {
          await tabs[i].click();
          for (let j = 0; j < tabs.length; j++) {
            if (i === j) {
              await expect.soft(tabs[j]).toHaveClass(/active/);
            } else {
              await expect.soft(tabs[j]).not.toHaveClass(/active/);
            }
            await expect.soft(tabs[j]).toHaveAttribute('aria-expanded', (i === j).toString());
          }
        }
      });
    });

    test.describe('Product image carousel tests', () => {
      test('First thumbnail selected by default', async () => {
        const thumbnailSrc = await productPage.productThumbnail.first().getAttribute('src');
        const mainImageSrc = await productPage.productImage.getAttribute('src');
        verifyImageSrcEquality(mainImageSrc!, thumbnailSrc!);

        // The selected thumbnail has an orange border but this is a separate DOM element drawn over the thumbnail
        // rather than being a property of the thumbnail element itself. As such it's difficult to assert that the
        // border is applied to correct thumbnail but we can compare the bounding box for the elements
        expect
          .soft(await productPage.productThumbnailBorder.boundingBox())
          .toEqual(await productPage.productThumbnail.nth(0).boundingBox());
      });

      test('Product image changes when thumbnail selected', async () => {
        await expect.soft(productPage.productThumbnail).toHaveCount(Products[product].images!.thumbnails.length);
        for (let i = 1; i < (await productPage.productThumbnail.count()); i++) {
          await productPage.selectThumbnail(i);
          const thumbnailSrc = await productPage.productThumbnail.nth(i).getAttribute('src');
          const mainImageSrc = await productPage.productImage.getAttribute('src');
          verifyImageSrcEquality(mainImageSrc!, thumbnailSrc!);
          expect
            .soft(await productPage.productThumbnailBorder.boundingBox())
            .toEqual(await productPage.productThumbnail.nth(i).boundingBox());
        }

        // Reselect first thumbnail
        await productPage.selectThumbnail(0);
        const thumbnailSrc = await productPage.productThumbnail.nth(0).getAttribute('src');
        const mainImageSrc = await productPage.productImage.getAttribute('src');
        verifyImageSrcEquality(mainImageSrc!, thumbnailSrc!);
        expect
          .soft(await productPage.productThumbnailBorder.boundingBox())
          .toEqual(await productPage.productThumbnail.nth(0).boundingBox());
      });

      test('Previous/next image buttons cycle through product images', async () => {
        await expect.soft(productPage.productThumbnail).toHaveCount(Products[product].images!.thumbnails.length);
        for (let i = 0; i < (await productPage.productThumbnail.count()) - 1; i++) {
          await productPage.selectNextImage();
          const thumbnailSrc = await productPage.productThumbnail.nth(i + 1).getAttribute('src');
          const mainImageSrc = await productPage.productImage.getAttribute('src');
          verifyImageSrcEquality(mainImageSrc!, thumbnailSrc!);
          expect
            .soft(await productPage.productThumbnailBorder.boundingBox())
            .toEqual(await productPage.productThumbnail.nth(i + 1).boundingBox());
        }
        for (let i = (await productPage.productThumbnail.count()) - 1; i > 0; i--) {
          await productPage.selectPreviousImage();
          const thumbnailSrc = await productPage.productThumbnail.nth(i - 1).getAttribute('src');
          const mainImageSrc = await productPage.productImage.getAttribute('src');
          verifyImageSrcEquality(mainImageSrc!, thumbnailSrc!);
          expect
            .soft(await productPage.productThumbnailBorder.boundingBox())
            .toEqual(await productPage.productThumbnail.nth(i - 1).boundingBox());
        }
      });

      test('Image carousel fullscreen behaviour', async () => {
        await expect.soft(productPage.imageCarousel).not.toHaveClass(/fotorama--fullscreen/);
        const origBox = await productPage.imageCarousel.boundingBox();
        await productPage.imageCarousel.click();
        await expect.soft(productPage.imageCarousel).toHaveClass(/fotorama--fullscreen/);
        const fullscreenBox = await productPage.imageCarousel.boundingBox();
        expect.soft(fullscreenBox!.width).toBeGreaterThan(origBox!.width);
        expect.soft(fullscreenBox!.height).not.toEqual(origBox!.height);

        // Exit fullscreen via Esc key
        await productPage.imageCarousel.press('Escape');
        await expect.soft(productPage.imageCarousel).not.toHaveClass(/fotorama--fullscreen/);
        verifyBoundingBoxEquality(await productPage.imageCarousel.boundingBox(), origBox);

        // Exit fullscreen via x button
        await productPage.imageCarousel.click();
        await expect.soft(productPage.imageCarousel).toHaveClass(/fotorama--fullscreen/);
        await productPage.exitFullscreenButton.click();
        await expect.soft(productPage.imageCarousel).not.toHaveClass(/fotorama--fullscreen/);
        verifyBoundingBoxEquality(await productPage.imageCarousel.boundingBox(), origBox);
      });

      test('Image carousel zoom behaviour', async () => {
        const maxZooms = 6;
        await productPage.imageCarousel.click();
        await expect.soft(productPage.imageCarousel).toHaveClass(/fotorama--fullscreen/);
        await expect.soft(productPage.productImage).toBeVisible();
        const origBox = await productPage.productImage.boundingBox();

        // Cannot zoom out from default image size
        await productPage.zoomOut();
        verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), origBox);

        // Can zoom in 6 times max
        for (let i = 0; i <= maxZooms; i++) {
          const box = await productPage.productImage.boundingBox();
          await productPage.zoomIn();
          if (i < maxZooms) {
            expect.soft((await productPage.productImage.boundingBox())!.width).toBeGreaterThan(box!.width);
            expect.soft((await productPage.productImage.boundingBox())!.height).toBeGreaterThan(box!.height);
          } else {
            verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), box);
          }
        }
        const maxBox = await productPage.productImage.boundingBox();
        // Can zoom out 5 times max. Why it's not 6 as for zooming in I have no idea!
        for (let i = 0; i < maxZooms; i++) {
          const box = await productPage.productImage.boundingBox();
          await productPage.zoomOut();
          if (i < maxZooms - 1) {
            expect.soft((await productPage.productImage.boundingBox())!.width).toBeLessThan(box!.width);
            expect.soft((await productPage.productImage.boundingBox())!.height).toBeLessThan(box!.height);
          } else {
            verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), box);
          }
        }
        // Zoom level is returned to the original setting
        verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), origBox);

        // Double-clicking product image zooms in to the max
        await productPage.productImage.dblclick();
        await new Promise((r) => setTimeout(r, 1000));
        verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), maxBox!);
        // Double-clicking again returns to the original zoom level
        await productPage.productImage.dblclick();
        await new Promise((r) => setTimeout(r, 1000));
        verifyBoundingBoxEquality(await productPage.productImage.boundingBox(), origBox);
      });

      test('Product image sources', async ({ baseURL }, testInfo) => {
        testInfo.skip(!Products[product].images, 'Product has no images defined');
        const mediaDir = `${baseURL}/pub/media/catalog/product/cache/[0-9a-f]+`;
        await expect
          .soft(productPage.productImage)
          .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images!.default));
        await expect.soft(productPage.productThumbnail).toHaveCount(Products[product].images!.thumbnails.length);
        for (let i = 0; i < Products[product].images!.thumbnails.length; i++) {
          await expect
            .soft(productPage.productThumbnail.nth(i))
            .toHaveAttribute('src', new RegExp(mediaDir + Products[product].images!.thumbnails[i]));
        }
        if (Products[product].images!.sizes) {
          for (let i = 0; i < Products[product].sizes!.length; i++) {
            await productPage.sizeSwatch.nth(i).click();
            const imageSrc = Array.isArray(Products[product].images!.sizes)
              ? new RegExp(mediaDir + Products[product].images!.sizes[i])
              : new RegExp(mediaDir + Products[product].images!.sizes);
            await expect.soft(productPage.productImage).toHaveAttribute('src', imageSrc);
          }
          await productPage.sizeSwatch.first().click();
        }
        if (Products[product].images!.colors) {
          for (let i = 0; i < Products[product].colors!.length; i++) {
            await productPage.colorSwatch.nth(i).click();
            const imageSrc = new RegExp(mediaDir + Products[product].images!.colors[i]);
            await expect.soft(productPage.productImage).toHaveAttribute('src', imageSrc);
          }
        }
      });
    });

    test.describe('Link tests', () => {
      // I have chosen to omit the breadcrumbs link test for individual product pages as such a test would be of low
      // value since the breadcrumbs can vary depending on the route taken to the product page, although as these
      // tests navigate to the product page directly the breadcrumbs are always Home > {Product Name}. I could verify
      // the Home breadcrumb link is correct but is it worth it?

      test('Product details links', async ({ baseURL }) => {
        if (Products[product].reviews) {
          await expect.soft(productPage.reviews).toHaveAttribute('href', `${baseURL}${Products[product].link}#reviews`);
        } else {
          await expect.soft(productPage.reviews).not.toBeVisible();
        }
        await expect
          .soft(productPage.addReview)
          .toHaveAttribute('href', `${baseURL}${Products[product].link}#review-form`);
        // The tab links don't include the product page URL in the href attribute for some reason
        await expect.soft(productPage.getTabLink(productPage.descriptionTab)).toHaveAttribute('href', '#description');
        await expect.soft(productPage.getTabLink(productPage.additionalInfoTab)).toHaveAttribute('href', '#additional');
        await expect.soft(productPage.getTabLink(productPage.reviewsTab)).toHaveAttribute('href', '#reviews');
      });

      test('Similar product item links', async ({ baseURL }) => {
        if (SimilarProducts[product]) {
          for (let i = 0; i < SimilarProducts[product].length; i++) {
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.PhotoLink))
              .toHaveAttribute('href', `${baseURL}${SimilarProducts[product][i].link}`);
            await expect
              .soft(productPage.getSimilarProductItemElement(i, ProductItemElements.NameLink))
              .toHaveAttribute('href', `${baseURL}${SimilarProducts[product][i].link}`);
          }
        }
      });
    });

    test.describe('Data validation tests', () => {
      test('Quantity validation', async () => {
        const errorClass = /mage-error/;
        // No validation error shown initially
        await expect.soft(productPage.quantityInput).not.toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).not.toBeVisible();

        // Quantity below min (1)
        await productPage.quantityInput.fill('0');
        // Validation error not triggered until "Add to cart" button clicked
        await expect.soft(productPage.quantityInput).not.toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).not.toBeVisible();
        await productPage.addToCartButton.click();
        await expect.soft(productPage.quantityInput).toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).toBeVisible();
        await expect.soft(productPage.quantityValidationError).toHaveText(ExpectedText.Quantity.BelowMin);

        // Reset quantity to default
        await productPage.quantityInput.fill('1');
        // Validation error not cleared until "Add to cart" button clicked
        await expect.soft(productPage.quantityInput).toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).toBeVisible();
        await productPage.addToCartButton.click();
        await expect.soft(productPage.quantityInput).not.toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).not.toBeVisible();

        // Quantity above max (10000)
        await productPage.quantityInput.fill('10001');
        await productPage.addToCartButton.click();
        await expect.soft(productPage.quantityInput).toHaveClass(errorClass);
        await expect.soft(productPage.quantityValidationError).toBeVisible();
        await expect.soft(productPage.quantityValidationError).toHaveText(ExpectedText.Quantity.AboveMax);

        // The quantity should be an integer value but there is no validation of that within the quantity
        // input itself. Non-integer quantities cannot be added to the cart but this is a separate test
      });
    });
  });
}
