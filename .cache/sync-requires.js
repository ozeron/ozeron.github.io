const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ozeron/code/ozeron.github.io/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js": hot(preferDefault(require("/Users/ozeron/code/ozeron.github.io/node_modules/gatsby-theme-blog-core/src/templates/post-query.js"))),
  "component---node-modules-gatsby-theme-blog-core-src-templates-posts-query-js": hot(preferDefault(require("/Users/ozeron/code/ozeron.github.io/node_modules/gatsby-theme-blog-core/src/templates/posts-query.js")))
}

