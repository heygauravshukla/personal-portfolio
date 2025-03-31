// PostCSS JIT Props - To only ship the props we use.
const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");

module.exports = {
  plugins: [postcssJitProps(OpenProps)],
};
