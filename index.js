#!/usr/bin/env node
// to test locally run this file inside directory
// of choice with node <index.js path>

// comment out installing dependencies and
// initGit lines to quicken test

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const folder = './';
const loc = path.resolve('./');
const folderName = path.basename(loc);

setupFiles(folder);
installDependencies(folder);
initGit(folder);

function setupFiles(folder) {
    console.log(chalk.green('Setting up files'));
    fs.copySync(path.join(__dirname, 'files'), folder);

    const packageJSON = fs.readFileSync(path.join(folder, 'package.json'), { encoding: 'utf8' });
    const updatedPackageJSON = packageJSON.replace('FOLDER_NAME', folderName);
    fs.writeFileSync(path.join(folder, 'package.json'), updatedPackageJSON);

    fs.writeFileSync(path.join(folder, '.env'), `
  MONGODB_URI=mongodb://localhost:27017/${folderName}
  `.trim());
}

function installDependencies(folder) {
    const devDependencies = [
        'eslint',
        '@types/jest',
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
