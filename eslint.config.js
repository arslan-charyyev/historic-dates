import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    // Fix for this issue: https://github.com/jsx-eslint/eslint-plugin-react/issues/3862
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      // Styled components use css attribute
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
    },
  },
]);
