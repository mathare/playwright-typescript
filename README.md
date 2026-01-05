# Playwright (TypeScript) Demo Project

## Introduction

This repo is an example Playwright test suite written in TypeScript. It has been put together to demonstrate my approach to automated UI testing and also as a practical example of how Playwright can be used, incorporating various techniques and tricks I have learned throughout my professional career.

## Application Under Test

This project uses a third-party dummy e-commerce website ([Swag Labs](https://www.saucedemo.com/)) as the application under test. The website is a simple retail website offering several products for sale but with a dummy checkout workflow.

Playwright does offer an example "to do" app that can be used for testing but the Playwright installation also includes a sample test suite for the "to do" app so what would I be adding that hasn't already been done? I'm not showcasing my own skills and approach if I use an app that already has a full test suite publicly available which is why I have chosen to use a third-party website for this project.

There are a couple of major drawbacks to using a third-party website for this test suite. Firstly, being unable to edit the application source code means I can't make it more testable e.g. by adding attributes to web elements. As as result the test suite uses `page.locator()` more than I would like because while many web elements do have a useful locator (e.g. ID, test ID attribute, role etc.) some don't. Secondly, the lack of documentation for the application and/or access to the developers means I may not fully understand certain aspects of the application. I have applied my exploratory testing skills to identify as many test cases as possible but some may have been missed, especially for the non-standard users.

## Project Design

This project follows the popular Page Object Model (POM) design pattern with separate classes per page of the application. This is a common best practice design decision as the POM pattern abstracts the UI selectors and certain interaction methods away from the tests themselves such that the tests can then focus on assertions i.e. it separates the test logic and UI implementation details. Applying the POM pattern also follows the DRY (Don't Repeat Yourself) principle by declaring the selectors for each element in the POM classes. Should something change on the page which requires us to update the corresponding locator then we only need change it in one place (the POM) and the test code remains unchanged. Overall the POM pattern results in much cleaner tests and a test suite/framework that is easier to maintain and scale in the future.

In addition to the POM classes per page of the website under test I have created POM classes for components that are common to each page e.g. the page header, page footer and menu. These component classes are then instantiated within each page POM class. This has the advantage of following the DRY principle and means any UI changes to these common components will affect the corresponding component POM only and not each page POM.

There are several different implementations of the POM pattern within Playwright examples. I have opted to follow the example from the [Playwright docs](https://playwright.dev/docs/pom) with the locator constants being declared as readonly and then set in the constructor.

However, I have deviated somewhat from the recommended element selectors in some places. The recommended way of getting elements in Playwright is often by text/role with a filter applied to ensure the correct element is selected. I have found such selectors to be troublesome when it comes to debugging tests that are failing due to changes to the UI. Tests fail with an "element not found" type error if the text of an element changes and I have found during my time using Playwright that such errors can be misleading and engineers can struggle to correctly investigate them effectively and efficiently. As such I favour other selectors e.g. `.getByTestId()` and `.locator()`. The test suite contains explicit assertions on the text content of key UI elements which I feel results in more obvious failures and easier debugging should there be UI changes.

## Test Suite

The test suite is made up of a test spec file for each of the POM modules - pages and components. Each spec is focused solely on the corresponding page/component to provide detailed testing of the UI elements therein.

In an ideal world many of the test cases in this test suite would be executed further down the test pyramid rather than at UI level. However, I wanted to illustrate my thinking around various test scenarios and the types of test I would implement and executing them at UI level is the only option open to me given I am using a third-party application for this project.

### Test Types:

The test suite comprises three main types of test:

- **appearance** - individual tests focused on how the UI looks rather than how it functions. Such tests cover things like element visibility, text content of elements and element styling
- **visual** - pixel-by-pixel comparisons of the actual UI with an existing baseline image. The visual tests effectively duplicate the appearance tests but are a quicker way of comparing the full UI. Many of the visual tests are limited to only key elements of the UI or mask UI elements that are subject to change (e.g. the footer which contains a copyright year).
  - NB There are currently no MacOS (`darwin`) baseline snapshots as the project was developed on Windows and CI runs on Linux but MacOS snapshots could easily be generated by running the visual tests locally on a Mac.
- **behavioural** - these tests focus on the functionality of the UI e.g. what happens when buttons are clicked etc.

Each test spec within the test suite is divided into `describe` blocks for each of the above test types to group similar tests.

### Supported Browsers

The test suite has been designed to run on three of the most popular browsers - Chrome, Firefox and Safari. Between them they hold nearly 90% of the [browser market share](https://gs.statcounter.com/browser-market-share) so by testing across these three browsers we can have some confidence that the application under test will work as expected for the vast majority of users.

### Supported Users

The Swag Labs store supports multiple different users (credentials for which can be seen on the front page of the site). Obviously a normal e-commerce site would allow new users to register but that is not the case here. This is a dummy web store with each pre-registered user serving a specific purpose, at least as far as I can tell, but there is no documentation describing each user available to confirm that.

Given the supported user accounts have already been created, I have written tests to verify and document how the site looks and behaves for each user, something I wouldn't do for a standard e-commerce store (where I would test the register user flow and the store itself as a registered user plus any other special user types e.g. admin user). The test suite comprises over 900 tests split into separate `describe` blocks per user so as to provide excellent coverage for all supported user accounts in a structured and easy-to-run manner.

For the majority of tests the relevant user is logged in to the web store by setting a cookie. This mirrors the application behaviour when a user logs in via the UI but it is faster and best practice to avoid logging in via the UI unless necessary. The [login page test spec](tests\loginPage.spec.ts) contains detailed tests for the login UI for all users including verifying the cookies set on logging in, validating the approach used elsewhere in the test suite.

All supported user accounts share the same password. Even though this password is freely available on the login page of the site under test it is treated as sensitive data throughout this project. As such the password has not been committed to the repo and is set via a `.env` file which must be created and populated with the relevant value prior to running the tests. This is a design choice made to help showcase my understanding and management of sensitive data.

## Running the Tests

1. Clone the repo e.g.

```
git clone https://github.com/mathare/playwright-typescript.git
```

2. Navigate into the directory created above and install dependencies

```
cd playwright-typescript
npm ci
```

3. Create a `.env` file using the example supplied in the repo ([.env.example](.env.example)) and set the `PASSWORD` variable to the relevant value (see the [Swag Labs login page](https://www.saucedemo.com/) for details)
4. Run the tests via your preferred method e.g CLI, Playwright extension in VSCode etc. Several scripts have been configured to help with running the tests from the CLI

```
npm run test                  //Run the full test suite on all supported browsers (Chrome, Firefox & Webkit)
npm run test:chromium         //Run the full test suite in Chrome
npm run test:firefox          //Run the full test suite in Firefox
npm run test:webkit           //Run the full test suite in Webkit
npm run test:visual           //Run the visual tests (only) on all supported browsers
npm run test:<user>           //Run the full test suite as the specified user
where <user> = standardUser | problemUser | errorUser | visualUser | performanceUser
```

## Version Control

The GitHub repository for this project showcases my approach to version control. All development was carried out on feature branches which were then merged to the `main` branch via a pull request (PR) detailing the changes made and the rationale behind key design decisions. As the sole autohor of this project the PRs were not peer reviewed but the repo settings are such that they could only be merged to `main` on a successful run of the test suite.

### CI Pipelines

This project includes two CI pipelines:

- [Playwright Tests](https://github.com/mathare/playwright-typescript/actions/workflows/playwright.yml)
- [Visual Tests](https://github.com/mathare/playwright-typescript/actions/workflows/visual.yml)

The Playwright Tests pipeline is the main pipeline, usually running the whole test suite on all three browsers (Chrome, Firefox and Safari) in parallel. There are three triggers: a cron job to run the full test suite at 8am UTC every day Monday to Friday; a manual trigger to again run the full test suite; and a trigger for pull requests into the `main` branch which runs the test suite against Chrome only.

The PR trigger is intended to provide some quick confidence in the latest changes without waiting for the full test suite to run on all browsers. The manual trigger allows all tests to be run on all browsers should that be required prior to merging changes into `main`. The scheduled cron job ensures the tests are run regularly and acts as an alert system for any changes in the online store, as happens from time to time and is a hazard of working with a third-party application.

The Visual Tests pipeline only runs the visual (image comparison) tests and has a manual trigger. This primarily exists as a way of running the visual tests on Linux (the tests have been developed on Windows but run on Linux in CI) to capture new/updated baseline snapshots for that OS so they can be added to the repo prior to running the full test suite. This pipeline is only run when new visual tests are added or existing Linux snapshots need to be updated.

## Use of AI

All code in this project was written by myself **without** the use of AI tools (e.g Copilot, ChatGPT etc.)
