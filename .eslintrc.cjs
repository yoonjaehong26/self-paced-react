module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks", // 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'가 여기에 포함됩니다.
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
     "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
