const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
askQuestions = async () => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.'
        },
        {
            type: 'input',
            name: 'url',
            message: 'If your project is deployed, what is the URL of the deployed application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3-CLAUSE', 'None'],
            default: 'none'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be entered to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What steps should the user take to use the repo?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How should the user contribute to the repo?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who has contributed to the repo?'
        }
    ]);
};

// Function to write README file
writeToFile = async (fileName, data) => {
    const writeFileAsync = util.promisify(fs.writeFile);

    await writeFileAsync(fileName, data);
};

// Function to initialize app
init = async () => {
    const answers = await askQuestions();
    const markdown = generateMarkdown(answers);
    await writeToFile(fileName, markdown);
};

init();
