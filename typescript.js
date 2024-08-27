import * as tsParser from "@typescript-eslint/parser";
import globals from "globals";
import tseslint from "typescript-eslint";

import eslintConfigComparitiko from "./index.js";

export default [
  ...eslintConfigComparitiko,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
  },
  { files: ["**/*.{ts}"] },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
    },
  },
];
