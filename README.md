# User event bug

This repo showcases a bug caused by deep imports.

## Reproduction
1. Clone repo
2. `npm install`
3. You might have to initialize [Playwright](https://playwright.dev/docs/intro#installing-playwright)
4. `npm run test`

### Expected
Working test

### Actual
the following error:
`SyntaxError: The requested module './../../../../../dom/dist/helpers.js' does not provide an export named 'getWindowFromNode'`

### Extra info
See the file `node_modules/@testing-library/user-event/dist/esm/setup/setup.js` and import `import '@testing-library/dom/dist/helpers.js';`.
This will work for commonjs as the file that is import using a deep import is common js.
In the [@web/test-runner](https://github.com/modernweb-dev/web), rollup and esbuild plugins are used to bundle (technically not actual plugins, but they work similar).
Doing deep imports of commonjs files, throws the build of, causing the error as described above.

### Possible fix
Remove all deep import from @testing-library/user-event and only import the stuff @testing-library/dom exposes via the `main` and `module` in the `package.json`.
This will make sure that bundlers are able to pick the correct version.
