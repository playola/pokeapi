module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFiles: ['./jest.setup.js'],
};
