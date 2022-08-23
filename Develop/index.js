// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description1',
        message: 'What was your motivation? Why did you build this project? What problem does it solve?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your app?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
      },

      {
        type: 'list',
        name: 'License',
        message: 'Which license does this application use?',
        choices: ['MIT', 'GPL', 'Apache'],
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Include guidelines for how you would like other developers to contribute.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application. Then provide examples on how to run them here.',
      },
      {
        type: 'input',
        name: 'userName',
        message: 'Enter Github Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Email Address.',
      },
    ];
  

// Template to be used


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName,data,err=> {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then (function (answer){
            var fileData=generateMarkdown(answer);
            writeToFile("generatedREADME.md",fileData);
        
        })
}

// Function call to initialize app
init();

module.exports = questions;

