const fs = require("fs");
const babel = require("@babel/core");

const presetEnvOpts = {
  targets: ["ie 11"],
  exclude: [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-regenerator"
  ]
};

const pluginAsyncOpts = {
  inlineHelpers: true
};

const babelOpts = {
  presets: [
    ["@babel/preset-env", presetEnvOpts]
  ],
  plugins: [
    ["babel-plugin-transform-async-to-promises", pluginAsyncOpts]
  ],
  filename: 'input.js'
};

const code = fs.readFileSync("./input.js");

babel.transform(code, babelOpts, function(err, result) {
  if (err) {
    throw Error(err);
  }

  fs.writeFileSync("./output.js", result.code);
});
