// file: jest.config.js
module.exports = {
	transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
	collectCoverage: false,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ]
}