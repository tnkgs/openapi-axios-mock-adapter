#!/usr/bin/env node

if (process.argv.length !== 4) {
  console.log('usage: generate-axios-mock-adapter {schemaPath} {outputPath}');
} else {
  const generateAxiosMockAdapter = require('../lib').default;

  generateAxiosMockAdapter(process.argv[2], process.argv[3]);
}
