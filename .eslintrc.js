module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-shadow": "off", //names functions witch have same name in function
    "react/prop-types": 0, // prop types off
    "jsx-a11y/label-has-associated-control": [ "error", { //.jsx tag label
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],//++ in for
  },
};
