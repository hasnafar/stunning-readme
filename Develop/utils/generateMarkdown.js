const fs = require("fs");
const index=require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description:

  ${data.description1}
  ${data.description2}
  ${data.description3}


  ## Table of Contents:
  ### [License](#license)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contributors](#contributing)
  ### [Tests](#tests)
  ### [Questions](#questions)

  ##License

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.Usage}

  ## Credits:
  ${data.Contributing}

  ## Test Instructions:
  ${data.Tests}


  ##Questions:
  ### For any queries contact me at
  ### Github: https://github.com/${data.userName}
  ### or
  ### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
