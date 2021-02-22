// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
          
  ${data.description}
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
    
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-green.svg "License Badge")
  
  ## Contributing
  ${data.contributing}

  Thank you to the following who have already contributed: ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  
  For more information:
  Visit my GitHub: [https://${data.name}.github.io](https://${data.name}.github.io)

  or Email: ${data.email}`;
}

module.exports = generateMarkdown;
