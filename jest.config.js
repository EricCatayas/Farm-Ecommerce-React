module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$",
    "\\.(scss|sass)$",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/tests/setupTests.js",
    '<rootDir>/tests/jest.setup.ts'
  ]
};
