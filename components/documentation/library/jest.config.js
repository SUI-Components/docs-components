module.exports = {
  reporters: ['default'],
  rootDir: './src',
  setupFilesAfterEnv: ['jest-extended'],
  moduleNameMapper: {
    '\\.(css|scss|less|sass)$': 'identity-obj-proxy'
  }
  // testResultsProcessor: "./node_modules/jest-stare",
}
