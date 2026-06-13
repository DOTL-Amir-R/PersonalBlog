import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  prettier,
  perfectionist.configs["recommended-natural"],
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          ecmaVersion: "latest",
          jsx: true,
        },
        projectService: true,
      },
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    rules: {
      "max-len": [
        "error",
        {
          code: 80,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-unused-vars": "off",
      quotes: ["error", "double"],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      semi: ["error", "always"],

    },
  },
  {
    ignores: [
      ".next/",
      "node_modules/",
      "next-env.d.ts",
      "generated/",
      "prisma/",
    ],
  },
]);

export default eslintConfig;
