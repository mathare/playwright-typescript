# Playwright (TypeScript)

- [Playwright (TypeScript)](#playwright-typescript)
  - [Introduction](#introduction)
  - [Website Under Test](#website-under-test)
    - [Important](#important)
  - [Test Suite](#test-suite)
    - [Application Pages](#application-pages)
    - [Types of Test:](#types-of-test)
    - [Test Data](#test-data)
    - [Page Object Model](#page-object-model)
    - [BDD](#bdd)
    - [Google Ads](#google-ads)
  - [CI Pipelines](#ci-pipelines)
  - [Further Development](#further-development)

## Introduction

This repo is an example Playwright test suite written in TypeScript. It has been put together to demonstrate my approach
to UI testing and also as a practical example of how Playwright can be used, incorporating various techniques and tricks
I have learned throughout my professional career.

## Website Under Test

This project uses a third-party dummy retail website ([Luma](https://magento.softwaretestingboard.com/)) as the software
under test. The website is MUCH bigger than is ideal for this sort of exercise but if it works (which it seems to) then
that puts it streets ahead of various other websites and options I have tried.

Playwright does offer an example "to do" app that can be used for testing but the Playwright installation also includes
a sample test suite for the "to do" app so what would I be adding that hasn't already been done? I'm not showcasing my
own skills and approach if I use an app that already has a full test suite publicly available.

Also by using a third-party deployed website like the Luma store then it is easier to show how different test tools and
frameworks can be used together.

There are a couple of major drawbacks to using a third-party website for this test suite. Firstly, being unable to edit
the application source code means I can't make it more testable e.g. by adding attributes to web elements. As as result
the tests herein use `page.locator()` far more than I would like because many web elements don't have IDs, test ID
attributes, roles etc. Secondly, the lack of access to the developers to help understand certain aspects of the system
means I have been unable to write certain types of tests. For example, based on Chrome dev tools, I can't see any
obvious requests being made when a user signs in so I have been unable to write tests to verify the correct API requests
are made and the right response received. Something must be providing auth but I haven't been able to figure out how it
has been implemented and don't have access to the team that wrote the application to ask them.

### Important

In **October 2024** the website under test added Google ads to support the running costs and keep the site free. While I
understand the need for this and appreciate the resource being made available in the first place these adverts have
unfortunately had an impact on several tests in my test suite which have had to be skipped as a result. See
[below](#google-ads) for more details.

## Test Suite

In an ideal world many of the test cases in this test suite would be executed further down the test pyramid rather than
at UI level. However, I wanted to illustrate my thinking around various test scenarios and the types of test I would
implement and executing them at UI level is the only option open to me given I am using a third-party application for
this project.

The test suite has been designed to run on three of the most popular browsers - Chrome, Firefox and Safari. Between them
they hold nearly 90% of the browser market share so by testing across these three browsers we can have some confidence
that the application under test will work as expected for the vast majority of users.

### Application Pages

The Luma retail site is divided into a number of distinct pages, as one would expect. The home page represents the
storefront advertising special offers and the types of products available in the store. There are pages for each
category of product e.g. women's hoodies, men's shorts etc. as well as pages for each individual product. There are also
pages for different collections of products such as women's clothing, fitness equipment and eco-friendly products. In
addition there are the usual pages one would expect for an online retail store such as a log in page, the "My Account"
page, account creation/management pages etc.

Many of the pages in the store use a template with common elements i.e. a base page. The same is true of the tests with
the [Page Object Model](#page-object-model) classes inheriting from a base page class. This allows for common elements
such as the page header and footer to be tested once, for the base page, without needing to test them for all pages.

In addition to the base page template there are other templates used by a number of pages within the Luma store. For
example, product category pages displaying all the relevant products along with various filters to allow shoppers to
more easily find the products they are after use a common template for all product categories. Similarly, product
collection pages use a common template, as do the individual product pages. As such, we can test the common elements of
these templates for one page without having to run the same tests for every such page.

As stated above, this is not a complete test suite for the application under test and this project will remain a work in
progress. This means there is not currently full coverage of all pages within the test suite although I have tried to
provide decent coverage of most pages. At the time of writing the notable omissions are:

- shopping cart page
- checkout page
- product comparison page
- search results page

### Types of Test:

The test suite includes a number of different types of test, including:

- **visibility** i.e. are the expected elements visible? Such tests act as a quick verification that the right page is
  displayed in the right state. If visibility tests are failing then that means later, more detailed tests will also
  fail, most likely because the expected element isn't displayed correctly
- **style** i.e. do elements have the expected CSS style? This is generally limited to things like background colour,
  font colour etc. providing a quick check on the visual appearance of key elements
- **text content** i.e. is the text displayed in certain elements correct? This type of testing is used for elements
  such as page headers and footers, product details, section titles etc.
- **link verification** i.e. where there are links, do they point to the expected URL? These tests don't click the links
  to verify the desitination URL but check the target `href` attribute against the expected value
- **data validation** i.e. do inputs validate correctly and display the expected error message for invalid values? Good
  candidates for this type of testing include email/password inputs, product quantity inputs and product size/colour
  options
- **image source verification** i.e. where elements display an image is the `src` attribute of that image as expected?
  These tests don't verify that the displayed image is correct (that's covered by the visual tests), just that the `src`
  attribute is correct
- **visual tests** i.e. verifying the page/element appearance against a baseline snapshot using a pixel by pixel
  comparison. Visual tests confirm that pages display as expected and can be used to verify all aspects (colours,
  positioning, size etc) of page elements at once. These tests tend to be relatively slow and potentially flaky compared
  to other test types as different browsers can render elements slightly differently. To counteract some of this
  flakiness, different baseline screenshots are used for each browser and operating system combination
- **display options** i.e. where the page layout can be customised, verify that the various options have the desired
  effect. This type of testing applies to options such as page size, displaying as a list or grid, sort options etc.

### Test Data

The test data for the various tests has been split into separate modules from the test code itself. This is a pattern I
have only adopted fairly recently and this project has been a real proving ground for the pattern. The separation
between the tests and the data means it is much easier to share data between tests where necessary and also to write
more generic tests that can apply to all pages using a common template such as the product category pages.

Each data module contains the relevant test data for a given page. Using the product categories e.g men's tanks as an
example, the [corresponding module](tests\data\productCategories\menTanks.ts) contains objects detailing the expected
text for certain page elements (for the text content tests), expected URLs (for the link verification tests), details of
all the filters (for the text content tests again) and details of all products in that category (again, text content
tests). There are also parent data modules (e.g. for the [product category page](tests\data\productCategoryPage.ts))
that group together data from the individual data modules.

This particular pattern of data modules allows for greater flexibility in the tests themselves. For example, in order to
test the product category pages we need only write a single relatively generic spec which can be run against any product
category page using the relevant data module to obtain the expected results. Such a test spec can then be run singularly
against any given product category page, which could be chosen at random from the available pages, or we can iterate
over all product category pages testing the specifics of each, substituting in the relevant data module each time. This
allows for maximum test coverage without writing duplicate tests.

Storing the data in individual modules within the repo is not how I would normally manage the test data. I would prefer
to use a database or similar but for ease and convenience I have gone down the route of modules within the repo. I am
also testing a third-party website in the production environment so I don't have access to the underlying database which
somewhat limits the choices available for storing and managing the test data.

### Page Object Model

The test suite uses the Page Object Model (POM), a common design pattern for automated UI tests. Each page within the
application has a corresponding POM class defining the locators for the various elements under test on that page. By
defining the locators in the POM class rather than in the test itself we have separation between the test logic and the
page implementation. Therefore, should something change on the page which requires us to update the corresponding
locator then we only need change it in one place (the POM) and the test code remains unchanged.

There are several different implementations of the POM pattern within Playwright examples. I have opted to follow the
example from the [Playwright docs](https://playwright.dev/docs/pom) with the locator constants being declared as
readonly and then set in the constructor.

### BDD

This particular project does not use behaviour-driven development (BDD) as I deemed it unnecessary in this case. I
believe the tests themselves are pretty easy to read and understand as they are written, especially given the separation
between the test code and test data as well as the use of the Page Object Model. This all makes for clean test code that
is straightforward to follow.

BDD could be layered on top of this project relatively easily without having to make significant changes. However, BDD
has most value in a setting where test scenarios are reviewed (or even written) by "non-technical" team members e.g. the
Product Owner, which isn't the case here.

### Google Ads

Google ads were added to the Luma website in October 2024. As a result, the visual tests I had written now failed as
they were including dynamic adverts. Unfortunately, several attempts to handle these adverts were unsuccessful so I have
had to skip the visual tests. I tried using an [adblocker](https://www.npmjs.com/package/@cliqz/adblocker-playwright)
but ads were still displayed regardless of what I used as the ads/tracking list. I also tried blocking Google ad API
requests (see [here](https://playwrightsolutions.com/network-abort-request-playwright-tutorial-part-59/) for an example)
but again ads were still being displayed, even if I aborted all requests to URLs outside of the domain under test.

In addition to the adverts displayed on the website, Google AdSense was interfering with some of my assertions by
embedding search links into text elements to make it easier for users to search for related content. This was
particularly evident in some product descriptions so I have had to comment out the assertion on the product description
text. Commenting out an assertion is not best practice at all as it means there is no evidence in the test reports and
logs of the assertion being omitted, unlike a skipped test for example. However, the remainder of the product test in
question still has value so I didn't want to skip the whole test.

## CI Pipelines

This project includes two CI pipelines:

- [Playwright Tests](https://github.com/mathare/playwright-typescript/actions/workflows/playwright.yml)
- [Visual Tests](https://github.com/mathare/playwright-typescript/actions/workflows/visual.yml)

The Playwright Tests pipeline is the main pipeline, usually running the whole test suite on all three browsers (Chrome,
Firefox and Safari) in parallel. There are three triggers: a cron job to run the full test suite at 8am UTC every day
Monday to Friday; a manual trigger to again run the full test suite; and a trigger for pull requests into the `main`
branch which runs a subset of the test suite against Chrome.

The PR trigger is intended to provide some quick confidence in the latest changes without waiting for the full test
suite to run. This was especially important when the run time of the full test suite across all browsers was in excess
of 45 minutes despite the browsers being tested in parallel. The run time of the test suite has been reduced to below 25
minutes now but often the changes in a PR don't require the full test suite to be run in order to prove they work as
expected which is why only a subset of the tests are run. The manual trigger allows all tests to be run should that be
required prior to merging changes into `main`. The scheduled cron job ensures the tests are run regularly and acts as an
alert system for any changes in the data for any of the products in the online store, as happens from time to time and
is a hazard of working with a third-party application.

The Visual Tests pipeline only runs the visual (image comparison) tests and has a manual trigger. This primarily exists
as a way of running the visual tests on Linux (the tests have been developed on Windows but run on Linux in CI) to
capture new/updated baseline snapshots for that OS so they can be added to the repo prior to running the full test
suite. This pipeline is only run when new visual tests are added or existing Linux snapshots need to be updated.

## Further Development

The test suite has been written to showcase my approach to UI testing and to capture certain skills and learnings rather
than provide a full and comprehensive test of the relevant website. As such there is significant room for further
development of this project, including but not limited to:

- Tests for customers in different states e.g. with order history, reviews, wishlist etc
  - Could this be done with API stubbing of responses including known test data?
- Adding products to a shopping cart
  - With size/color/quantity validation error
  - Non-integer quantities
  - Successful
- Adding products to a wish list
- Comparing products
- Searching for products
- Filtering and navigation via the sidenav

In addition the CI pipelines could be updated to make more use of dependency caching.

However, I feel this project is sufficient to fulfill the purpose I intended it to be used for and as such I plan to
park it for now and focus on other projects.
