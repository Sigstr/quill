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
        root: '/Users/michael/Documents/quill/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
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
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/Users/michael/Documents/quill',
          templates:
            '/Users/michael/Documents/quill/node_modules/docz-core/dist/templates',
          packageJson: '/Users/michael/Documents/quill/package.json',
          docz: '/Users/michael/Documents/quill/.docz',
          cache: '/Users/michael/Documents/quill/.docz/.cache',
          app: '/Users/michael/Documents/quill/.docz/app',
          appPublic: '/Users/michael/Documents/quill/.docz/public',
          appNodeModules: '/Users/michael/Documents/quill/node_modules',
          appPackageJson: '/Users/michael/Documents/quill/package.json',
          appYarnLock:
            '/Users/michael/Documents/quill/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/michael/Documents/quill/node_modules/docz-core/node_modules',
          gatsbyConfig: '/Users/michael/Documents/quill/gatsby-config.js',
          gatsbyBrowser: '/Users/michael/Documents/quill/gatsby-browser.js',
          gatsbyNode: '/Users/michael/Documents/quill/gatsby-node.js',
          gatsbySSR: '/Users/michael/Documents/quill/gatsby-ssr.js',
          importsJs: '/Users/michael/Documents/quill/.docz/app/imports.js',
          rootJs: '/Users/michael/Documents/quill/.docz/app/root.jsx',
          indexJs: '/Users/michael/Documents/quill/.docz/app/index.jsx',
          indexHtml: '/Users/michael/Documents/quill/.docz/app/index.html',
          db: '/Users/michael/Documents/quill/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
