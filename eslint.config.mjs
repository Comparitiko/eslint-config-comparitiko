import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintPluginImport,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "capitalized-comments": ["error", "always"],
      curly: ["error", "multi-or-nest"],
      eqeqeq: ["error", "always"],
      "no-unneeded-ternary": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
    },
  },
];
