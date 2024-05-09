# Playwright (TypeScript)

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
the tests herein use `page.locator()` far more than I would ideally because many web elements don't have IDs, test ID
attributes, roles etc. Secondly, the lack of access to the developers to help understand certain aspects of the system
means I have been unable to write certain types of tests. For example, based on Chrome dev tools, I can't see any
obvious requests being made when a user signs in so I have been unable to write tests to verify the correct API requests
are made and the right response received. Something must be providing auth but I haven't been able to figure out how it
has been implemented and don't have access to the team that wrote the application to ask them.

## Test Suite

NB In an ideal world many of the test cases in this test suite would be executed further down the test pyramid rather
than at UI level. However, I wanted to illustrate my thinking around various test scenarios and the types of test I
would implement and executing them at UI level is the only option open to me given I am using a third-party application
for this project.

Work in progress...
