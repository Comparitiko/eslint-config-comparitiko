import tseslint from "typescript-eslint";
import globals from "globals";
import eslintConfigComparitiko from "./index.js";

export default [
  ...eslintConfigComparitiko,
  ...tseslint.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ["**/*.{ts}"] },
  {
    rules: {},
  },
];
