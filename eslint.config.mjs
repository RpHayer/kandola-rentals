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
      "unused-imports": (await import("eslint-plugin-unused-imports")).default,
      react: (await import("eslint-plugin-react")).default,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "react/no-unescaped-entities": "error", // ✅ Now works in .tsx files
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect", // ✅ Needed for eslint-plugin-react
      },
    },
  },
];

export default eslintConfig;
