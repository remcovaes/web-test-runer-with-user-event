# User event bug

This repo showcases a bug caused by deep imports.

## reproduction:
1. Clone repo
2. `npm install`
3. You might have to initialize [Playwright](https://playwright.dev/docs/intro#installing-playwright)
4. `npm run test`

### Expected:
Working test

### Actual:
the following error:
`SyntaxError: The requested module './../../../../../dom/dist/helpers.js' does not provide an export named 'getWindowFromNode'`
