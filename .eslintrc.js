
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "plugins": ["react", "react-hooks"],
  "rules": {
    "linebreak-style": 0,
    "max-classes-per-file": ["error", 3],
    "import/no-cycle": [0, { maxDepth: 1 }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": "off",
    "import/extensions": "off"

  },
  "parser": "babel-eslint",

};
