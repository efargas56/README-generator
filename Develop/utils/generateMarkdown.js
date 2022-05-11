// function that links to custom badges
// function renderLicenseBadge(data) {
//   let licenseType = `${data.license}`;
//   let licenseBadge = ''
//   if(licenseType === 'MIT') {
//     licenseBadge = '[![License:](https://img.shields.io/badge/License-MIT-yellow.svg)]'
//     return licenseBadge;
//   } else if (licenseType === 'ISC') {
//     licenseBadge = '[![License:](https://img.shields.io/badge/License-ISC-blue.svg)]'
//     return licenseBadge;
//   } else if (licenseType === 'GNU') {
//     licenseBadge = '[![License:](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
//     return licenseBadge;
//   } else if (licenseType === 'APACHE') {
//     licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
//     return licenseBadge;
//   }
//    }
   // function that links to the licenses
//  function renderLicenseLink(data) { 
//   let licenseType = `${data.license}`;
//   let licenseUrl = '';
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
//  function which generates readme
const generateMarkdown = data => {
  return `
  <h1 align="center">${data.title}<h1>

  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]

  ##Description
    ${data.description}

  ##Table of content
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#Questions)

##Installation
  ${data.installation}

##Usage
  ${data.usage}

##Tests
  ${data.tests}

##credits
  ${data.contributors}

##Questions

Find me and my other work on GitHub at ttps://github.com/${data.github} or send me an email at ${data.email}

##License
  ${data.license}
`
}
// I cannot figure out how to get the license to generate with the rest of the page so i am not using this function

// function generateMarkdown(data) {
//   renderLicenseBadge(data).then( license => {
//     return renderLicenseBadge(license);
//   }).then( data => {
//     return renderLicenseLink(data)
//   }).then(data =>{
//     return generatePage(data)
//   });
//   };

module.exports = generateMarkdown;
