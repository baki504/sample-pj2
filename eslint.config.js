module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      "semi": ["error", "always"],
      "max-len": ["error", { "code": 80 }],
      "eqeqeq": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"]
    }
  }
];