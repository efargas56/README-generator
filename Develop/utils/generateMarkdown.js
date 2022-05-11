// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
    
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ##Description
  ${data.description}
  ##Table of content
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)
##Installation
${data.installation}
##Usage
${data.usage}
##Tests
${data.tests}
##credits
${data.contributors}
##Contact
Find me on GitHub at ${data.github} or send me an email at ${data.email}
##License
`
}



module.exports = generateMarkdown;
