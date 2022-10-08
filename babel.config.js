module.exports = {
    presets: [
      ["@babel/preset-env", {targets: {node: "current"}}],
      "@babel/preset-typescript",
      "@babel/preset-flow",
    ],
    plugins: [
      "@babel/plugin-transform-typescript",
      "@babel/plugin-proposal-class-properties",
      "@babel/syntax-module-string-names",
      "@babel/syntax-import-assertions"
    ]
  };