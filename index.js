#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv;
const folderName = args[args.length - 1];
const folder = folderName;

fs.mkdirSync(folder);

setupFiles(folder);
installDependencies(folder);
initGit(folder);

function setupFiles(folder) {
  console.log(chalk.green('Setting up files'));
  fs.copySync(path.join(__dirname, 'files'), folder);

  const packageJSON = fs.readFileSync(path.join(folder, 'package.json'), { encoding: 'utf8' });
  const updatedPackageJSON = packageJSON.replace('FOLDER_NAME', folder);
  fs.writeFileSync(path.join(folder, 'package.json'), updatedPackageJSON);

  fs.writeFileSync(path.join(folder, '.gitignore'), `
node_modules
.env
  `.trim());

  fs.writeFileSync(path.join(folder, '.env'), `
  MONGODB_URI=mongodb://localhost:27017/${folder}
  `.trim());
}

function installDependencies(folder) {
  const devDependencies = [
    'eslint',
    'jest',
    'nodemon',
    'supertest'
  ];

  const dependencies = [
    'express',
    'mongoose',
    'dotenv'
  ];

  console.log(chalk.green('Installing devDependencies'));
  execSync(`npm i -D ${devDependencies.join(' ')}`, {
    cwd: folder,
    stdio: 'inherit'
  });

  console.log(chalk.green('Installing dependencies'));
  execSync(`npm i ${dependencies.join(' ')}`, {
    cwd: folder,
    stdio: 'inherit'
  });
}

function initGit(folder) {
  console.log(chalk.green('Initializing git'));

  execSync('git init', {
    cwd: folder,
    stdio: 'inherit'
  });

}
