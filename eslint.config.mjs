import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
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
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "capitalized-comments": ["error", "always"],
      curly: ["error", "multi-or-nest"],
      eqeqeq: ["error", "always"],
      "prefer-template": "error",
      "no-unneeded-ternary": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-throw-literal": "error",
      // Plugins configuration
      // Simple-import-sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Eslint-plugin-import
      "import/first": "error",
      "import/no-duplicates": "error",
      // Unused-imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
