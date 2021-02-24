// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateBadge = function (license) {
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license.replace(/\s+/g, "")}-green.svg)`;
  }
  else {
    return "";
  }
}

// Function that returns a link to the appropriate license information
// If there is no license, return an empty string
const linkLicenseInfo = function (license) {
  if (license == 'BSD 3') {
    return '[BSD 3 License](https://choosealicense.com/licenses/bsd-3-clause/)';
  }
  else if (license !== 'none') {
    return `[${license} License](https://choosealicense.com/licenses/${license.toLowerCase().replace(/\s+/g, "-")}/)`;
  }
  else {
    return "No license";
  }
}
//Function checks if there is a deployed url included and adds it to the description section
const renderUrl = function (url) {
  if (url !== 'none') {
    return `[Deployed application](${url})`;
  }
  else {
    return "";
  }
}
//Function that splits the image URL string into separate URLs and adds to usage section
const renderImgUrl = function (imgUrl) {
  if (imgUrl !== 'none') {
    const imgArr = imgUrl.split(" ");
    const images = imgArr.map(imgUrl => `![application image](${imgUrl})`).join('\n');
    return images;
  }
  else {
    return "";
  }
}

// Generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}

  ${generateBadge(answers.license)}
  
  ## Description
  ${renderUrl(answers.url)}
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
  Run ${answers.install}
  
  ## Usage
  ${answers.usageSteps}
  ${renderImgUrl(answers.imgUrl)}
  
  ## License
  ${linkLicenseInfo(answers.license)}
  
  ## Contributing
  To contribute to this repo:
  ${answers.contributeSteps}

  Thank you to the following who have already contributed: ${answers.contributors}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  
  For more information:
  Visit my GitHub: [https://${answers.name}.github.io](https://${answers.name}.github.io)

  or Email: ${answers.email}`;
}

module.exports = generateMarkdown;

