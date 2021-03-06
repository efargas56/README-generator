// Necessary Packages
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require ('./utils/generateMarkdown');
// questions array with all questions for README

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
    

// function that writes file to README.md
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function with all necessary functions to run app
 function init() { 
     questions()
     .then(answers => {  
    return generateMarkdown(answers);
})
.then(data => {
    return writeToFile(data);
})
.catch (err => {
    console.log(err)
})
 }
// Function call to initialize app
 init();
