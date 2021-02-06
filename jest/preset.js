const tsJestPreset = require("ts-jest/presets/js-with-ts/jest-preset");
const puppeteerJestPreset = require("jest-puppeteer/jest-preset");

module.exports = Object.assign(tsJestPreset, puppeteerJestPreset);
