#!/usr/bin/env node

/**
 * TWANTS CLI
 * A Modern Tailwind UI System for Everywhere.
 *
 * Usage:
 *   twants init        Initialize TWANTS in current project
 *   twants tokens      Print CSS tokens to stdout
 *   twants version     Print version
 *   twants help        Show help
 */

import { readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "..", "package.json"), "utf-8")
);

const args = process.argv.slice(2);
const command = args[0];

function help() {
  console.log(`
  TWANTS v${pkg.version} — A Modern Tailwind UI System for Everywhere.

  Usage:
    twants <command> [options]

  Commands:
    init        Copy TWANTS CSS files into your project
    tokens      Print CSS design tokens to stdout
    version     Print version number
    help        Show this help message

  Examples:
    twants init
    twants tokens > src/styles/twants-tokens.css
    twants version
  `);
}

function version() {
  console.log(pkg.version);
}

function tokens() {
  const tokensPath = resolve(__dirname, "..", "src", "styles", "tokens.css");
  try {
    const content = readFileSync(tokensPath, "utf-8");
    console.log(content);
  } catch {
    console.error("Error: Could not read tokens.css");
    process.exit(1);
  }
}

async function init() {
  console.log("TWANTS init — copying styles to ./src/styles/twants/ ...\n");

  const srcDir = resolve(__dirname, "..", "src", "styles");
  const destDir = resolve(process.cwd(), "src", "styles", "twants");

  await mkdir(destDir, { recursive: true });

  const files = ["tokens.css", "theme.css", "components.css", "index.css"];
  for (const file of files) {
    const src = resolve(srcDir, file);
    const dest = resolve(destDir, file);
    try {
      const content = await readFile(src, "utf-8");
      await writeFile(dest, content, "utf-8");
      console.log(`  ✓ ${file}`);
    } catch {
      console.log(`  ✗ ${file} (not found)`);
    }
  }

  console.log("\nDone! Import in your CSS:\n");
  console.log('  @import "./src/styles/twants/index.css";\n');
}

switch (command) {
  case "init":
    init();
    break;
  case "tokens":
    tokens();
    break;
  case "version":
  case "-v":
  case "--version":
    version();
    break;
  case "help":
  case undefined:
    help();
    break;
  default:
    console.error(`Unknown command: ${command}\n`);
    help();
    process.exit(1);
}
