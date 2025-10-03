import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	modulePathIgnorePatterns: ['<rootDir>/__tests__/data/'],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	resolver: 'jest-ts-webcompat-resolver'
};

export default config;
