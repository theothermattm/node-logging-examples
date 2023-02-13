module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  extends: 'airbnb-base',
  overrides: [
    {
      "files" : ['**/*.js'],
      "rules" : {
        "import/extensions" : "off",
        "no-console" : "off",
        "no-plusplus" : "off"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
