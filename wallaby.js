module.exports = function(wallaby) {
  return {
    files: ['src/**/*.js?(x)', 'src/**/*.json', '!src/**/*.spec.js?(x)'],
    tests: ['src/**/*.spec.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },

    testFramework: 'jest',

    setup: function(wallaby) {
      const jestConfig = require('./package.json').jest;
      jestConfig.modulePaths = jestConfig.modulePaths.map(p =>
        p.replace('<rootDir>', wallaby.projectCacheDir)
      );
      wallaby.testFramework.configure(jestConfig);
    }
  };
};