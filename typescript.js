import globals from "globals";
import tseslint from "typescript-eslint";

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
