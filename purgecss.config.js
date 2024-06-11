module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx"],
  css: ["./src/App.css"],
  output: "./dist/",
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
};
