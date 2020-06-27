module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  //testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  testPathIgnorePatterns: ['./node_modules'],
  coverageReporters: ['html', 'lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/coverage/',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.tsx',
    '!**/*.test.tsx',
    '!**/index.ts',
  ],
  /*coverageThreshold: {
    global: {
      branches: 94,
      functions: 94,
      lines: 94,
      statements: 94,
    },
  },*/
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};