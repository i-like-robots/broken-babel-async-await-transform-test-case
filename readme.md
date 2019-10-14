# Broken Babel `async/await` transform test case

This repo contains a small test case which demonstrates a compatibility problem between the [`babel-plugin-transform-async-to-promises`](https://github.com/rpetrich/babel-plugin-transform-async-to-promises) and [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) packages.

This issue commonly manifests itself as:

```
ReferenceError: assignment to undeclared variable
```

## About

When using the `babel-plugin-transform-async-to-promises` and `@babel/preset-env` targeting an ES5 environment (such as IE 11) variables can be assigned without first being declared.

There appears to be several ways to mitigate the issue:

- Change the preset env target to an ES6 compatible environment
- Move the `export default` statement onto a separate line to the to-level function declaration
- Avoid using any of the undeclared variables within the scope of a function generated by the `babel-plugin-transform-async-to-promises` plugin

## Installation

After cloning this repository:

1. Run `npm install` to install of the required dependencies
2. Build the test file with `npm run build` or `npm start`
3. Open the generated `output.js` file