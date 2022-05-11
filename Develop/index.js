// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require ('.utils/generateMarkdown.js')
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
        choices: ['MIT', 'ISC', 'GNU'],
        default: ['MIT'],
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
        name: 'contributing',
        message: 'how can users contribute? (if applicable)'
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
// if (!README.md)
// function writeToFile(answers.title, data) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(fileName, data, err =>{
            
        
//         if (err) {
//             reject(err);
//             return;
//         }
//         resolve({
//             ok: true,
//             message: 'File Created!'
//         });
//     });
//     });
// };

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
questions().then(answers => {
    return generateMarkdown(answers);
}).then(data => {
    return writeToFile
}).catch (err => {
    console.log(err)
})
