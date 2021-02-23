// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateBadge = function (license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license.replace(/\s+/g, "")}-green.svg)`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseSection = function (license) {
  if (license == 'BSD 3') {
    return '[BSD 3 License](https://choosealicense.com/licenses/bsd-3-clause/)'
  }
  else if (license !== 'none') {
    return `[${license} License](https://choosealicense.com/licenses/${license.toLowerCase().replace(/\s+/g, "-")}/)`
  }
  else {
    return "No license"
  }
}

//TODO: Create a function that returns the deployed URL. If there is no deployed URL, return
//TODO: Create a function that splits the image URL string into separate URLs and add to description section


// Generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}

  ${generateBadge(answers.license)}
  
  ## Description
          
  ${answers.description}
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
    
  ## Installation
  ${answers.install}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${licenseSection(answers.license)}
  
  ## Contributing
  ${answers.contributing}

  Thank you to the following who have already contributed: ${answers.contributors}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  
  For more information:
  Visit my GitHub: [https://${answers.name}.github.io](https://${answers.name}.github.io)

  or Email: ${answers.email}`;
}

module.exports = generateMarkdown;

