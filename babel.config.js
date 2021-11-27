module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "bugfixes": true
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@emotion",
      {
        "sourceMap": true,
        "autoLabel": "dev-only",
        "labelFormat": "[filename]-[local]",
        "cssPropOptimization": true
      }
    ],
    "@loadable/babel-plugin",
    ["@babel/plugin-proposal-class-properties", { "loose": false }]
  ],
  "ignore": ["node_modules", "build"]
}
