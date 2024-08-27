<h1 align="center">
  🔥 Comparitiko's ESLint + Prettier configuration 🔥
</h1>

<p align="center">
    <a href="https://github.com/Comparitiko"><img src="https://img.shields.io/badge/Comparitiko-green.svg?style=flat-square" alt="Comparitiko"/></a>
</p>

<p align="center">
  Opinionated linting configuration. Valid for your JavaScript or TypeScript projects 🤟
  <br />
	<br />
	<a href="https://github.com/Comparitiko/eslint-config-comparitiko/stargazers">Stars are free 😊</a>

</p>

# 👀 How to use

1. Install the dependency
   ```bash
   npm install --save-dev eslint-config-comparitiko
   ```
2. Add it to your `eslint.config.mjs` file:

   ```js
   {
     import eslintConfigComparitiko from "eslint-config-comparitiko";

     export default [...eslintConfigComparitiko];
   }
   ```

3. If you are using TypeScript, just import the TypeScript configuration instead:

   ```js
   import eslintConfigComparitiko from "eslint-config-comparitiko/typescript";

   export default [...eslintConfigComparitiko];
   ```

## 🤔 What it does

- Lints JavaScript using [`eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended) and [Prettier](https://prettier.io/)
- Additionally, lints TypeScript using [`@typescript-eslint/recommended`](https://typescript-eslint.io/docs/linting/configs)
- Uses the following [JavaScript rules](https://github.com/Comparitiko/eslint-config-comparitiko/blob/main/eslint.config.mjs) and [TypeScript rules](https://github.com/Comparitiko/eslint-config-comparitiko/blob/main/typescript.js)
- Uses the following plugins:

  - [`import`](https://github.com/import-js/eslint-plugin-import/): helps validate proper imports

  - [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort/): sorts imports
