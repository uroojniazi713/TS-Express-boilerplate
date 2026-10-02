import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
  },
//   {
//     rules: {
//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         {
//           argsIgnorePattern: "^_",
//         },
//       ],
//     },
// },
);