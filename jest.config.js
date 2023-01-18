/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.m?[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "./__tests__/tsconfig.json",
      },
    ],
  },
};
