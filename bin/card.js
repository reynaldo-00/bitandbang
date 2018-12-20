#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Christopher Cedeno /'),
  handle: chalk.cyan('reynld'),
  // work: chalk.white('Software Engineer'),
  twitter: chalk.cyan('https://twitter.com/creynl'),
  codepen: chalk.cyan('https://codepen.io/reynld/'),
  github: chalk.cyan('https://github.com/reynld'),
  linkedin: chalk.cyan('https://linkedin.com/in/reynld'),
  codepen: chalk.cyan('https://codepen.io/reynld/'),
  web: chalk.cyan('https://rey.sh'),
  npx: chalk.white('npx reynld'),
  labelWork: chalk.white.bold('      Software Engineer'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelCodepen: chalk.white.bold('   Codepen:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const codepening = `${data.labelCodepen}  ${data.codepen}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = 
  heading + newline +  
  working + newline + newline +
  githubing + newline + 
  codepening + newline + 
  linkedining + newline + 
  twittering + newline + 
  webing + newline + newline + 
  carding

console.log(chalk.green(boxen(output, options)))
