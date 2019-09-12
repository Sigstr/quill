const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Quill',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        docgenConfig: {},
        menu: ['Home', { menu: ['Color'], name: 'Foundations' }],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/michael/Documents/GitHub/quill/.docz',
        base: '/quill/',
        source: './',
        src: './src/',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: './docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Quill',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/michael/Documents/GitHub/quill',
          templates:
            '/Users/michael/Documents/GitHub/quill/node_modules/docz-core/dist/templates',
          packageJson: '/Users/michael/Documents/GitHub/quill/package.json',
          docz: '/Users/michael/Documents/GitHub/quill/.docz',
          cache: '/Users/michael/Documents/GitHub/quill/.docz/.cache',
          app: '/Users/michael/Documents/GitHub/quill/.docz/app',
          appPublic: '/Users/michael/Documents/GitHub/quill/.docz/public',
          appNodeModules: '/Users/michael/Documents/GitHub/quill/node_modules',
          appPackageJson: '/Users/michael/Documents/GitHub/quill/package.json',
          appYarnLock:
            '/Users/michael/Documents/GitHub/quill/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/michael/Documents/GitHub/quill/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/michael/Documents/GitHub/quill/gatsby-config.js',
          gatsbyBrowser:
            '/Users/michael/Documents/GitHub/quill/gatsby-browser.js',
          gatsbyNode: '/Users/michael/Documents/GitHub/quill/gatsby-node.js',
          gatsbySSR: '/Users/michael/Documents/GitHub/quill/gatsby-ssr.js',
          importsJs:
            '/Users/michael/Documents/GitHub/quill/.docz/app/imports.js',
          rootJs: '/Users/michael/Documents/GitHub/quill/.docz/app/root.jsx',
          indexJs: '/Users/michael/Documents/GitHub/quill/.docz/app/index.jsx',
          indexHtml:
            '/Users/michael/Documents/GitHub/quill/.docz/app/index.html',
          db: '/Users/michael/Documents/GitHub/quill/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
