global.js

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
        console.log(data)
        module.exports = {
        questions();
        writeToFile();
        }