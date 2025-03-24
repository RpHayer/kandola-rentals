import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended" // ✅ Ensures JSX rules are active
  ),
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ✅ Critical for JSX lint rules to activate
        },
      },
    },
    plugins: {
      "unused-imports": require("eslint-plugin-unused-imports"),
      react: require("eslint-plugin-react"),
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "react/no-unescaped-entities": "error", // ✅ Now works in .tsx files
    },
    settings: {
      react: {
        version: "detect", // ✅ Needed for eslint-plugin-react
      },
    },
  },
];

export default eslintConfig;
