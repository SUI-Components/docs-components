module.exports = {
  stories: [
    '../(stories|src|components)/**/*.stories.mdx',
    '../(stories|src|components)/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    './addons/theme-mode/manager.js',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          // modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapContents: true
          }
        }
      }
    }
  ]
}
