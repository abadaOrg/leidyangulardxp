require('jest-preset-angular/ngcc-jest-processor');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  displayName: 'leidy-angular-dxp',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/src/test/test-setup.ts',
    '<rootDir>/src/test/browser-mock.ts',
  ],
  coverageReporters: ['text', 'cobertura', 'lcov'],
};
