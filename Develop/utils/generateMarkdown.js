const fs = require('fs');
const index=require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge='';
  if(license==="MIT")
    badge='![GitHub License](https://www.channelfutures.com/files/2017/04/3_0.png)'
  else if(license==='Apache')
    badge='![GitHub License](https://media-exp1.licdn.com/dms/image/C4D12AQG4iOEV4ytsKg/article-cover_image-shrink_720_1280/0/1633953703308?e=2147483647&v=beta&t=zHRGYnZU2Xf30Bo4_ewpm9gpLSUjaa6rK94jdPn_1vQ)'
  else if(license==="GPL")
    badge='![GitHub License](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPLv3_Logo.svg/1200px-GPLv3_Logo.svg.png)'

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link='';
  if(license==="MIT")
    link='https://choosealicense.com/licenses/mit';
  else if(license==='Apache')
   link='https://www.apache.org/licenses/LICENSE-2.0';
  else if(license==="GPL")
    link='https://www.gnu.org/licenses/gpl-3.0.en.html';

  return link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description:

  ${data.description1}
  ${data.description2}
  ${data.description3}


  ## Table of Contents:
  ### * [License](#License)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contribution Guidelines](#contributing)
  ### * [Tests](#Tests)
  ### * [Questions](#Questions)

  ## License
  ### This application uses the ${data.License} license
  ### ${renderLicenseBadge(data.License)}
  ### Link: ${renderLicenseLink(data.License)};

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contribution Guidelines
  ${data.Contributing}

  ## Tests
  ${data.Tests}


  ## Questions
  ### For any queries contact me at
  ### Github: https://github.com/${data.userName}
  ### or
  ### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
