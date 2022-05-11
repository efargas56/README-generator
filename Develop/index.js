// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const { resolve } = require('path');

const generateMarkdown = require ('./utils/generateMarkdown');

const renderLicenseBadge = require ('./utils/licensing');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([ 
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description about your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please write a descriptive description about your project!');
                return false; 
            }
        }

    },
    // {
    //     type: 'input',
    //     name: 'table of Content',
    //     message: 'Please include a tabe of contents which links to different parts of README',
    //     validate: nameInput => {
    //         if (nameInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter your email address!');
    //             return false; 
    //         }
    //     }
        
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please include steps to install your project!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description on how to use this app!');
                return false; 
            }
        }

        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses does your project use?',
        choices: ['MIT', 'ISC', 'GNU', 'APACHE 2.0'],
        default: ['MIT'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }

        
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? (if applicable)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands can you use to test your project if any?',
        default: 'npm test'
        
    },
    ])
    }
// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err =>{
            
        
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File Created!'
        });
      });
    });
}
const appendToFile = renderLicenseBadge => {
    fs.appendFile('README.md', renderLicenseBadge, (err) =>{
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'file appended!'
        });
    });
}
// function renderLicenseBadge(license) {  let licenseType = `${data.license}`;
// let licenseBadge = ''
// if(licenseType === 'MIT') {
//   licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
//   return licenseBadge;
// } else if (licenseType === 'ISC') {
//   licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
//   return licenseBadge;
// } else if (licenseType === 'GNU') {
//   licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
//   return licenseBadge;
// } else if (licenseType === 'APACHE') {
//   licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] `
//   return licenseBadge;
// }
//  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { 
//   let licenseType = `${data.license}`;
//   let licenseUrl = ''
//   if(licenseType === 'MIT') {
//    licenseUrl = `(https://opensource.org/licenses/MIT)`
//    return licenseUrl;
//   } else if (licenseType === 'ISC') {
//    licenseUrl = `(https://opensource.org/licenses/ISC)`
//    return licenseUrl;
//   } else if (licenseType === 'GNU') {
//    licenseUrl = `(https://www.gnu.org/licenses/gpl-3.0)`
//    return licenseUrl;
//   } else if (licenseType === 'APACHE') {
//    licenseUrl = `(https://opensource.org/licenses/Apache-2.0)`
//    return licenseUrl;
//   }
//    }
// TODO: Create a function to initialize app
 function init() { 
     questions().then(answers => {  
    return generateMarkdown(answers);
}).then(data => {
    return writeToFile(data)
}).then(renderLicenseBadge =>{
    return appendToFile(renderLicenseBadge)
}).catch (err => {
    console.log(err)
})
 }
// Function call to initialize app
 init();
