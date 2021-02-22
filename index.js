// Include packages needed for this application
import { prompt } from 'inquirer';
import { writeFile } from 'fs';
import { promisify } from 'util';
import { generateMarkdown } from './utils/generateMarkdown';

// Array of questions for user input
(async () => {
    const questions = await prompt([
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
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
            name: 'using',
            message: 'What steps should the user take to use the repo?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How should the user contribute to the repo?'
        }
    ])
}

);

// Function to write README file
async function writeToFile(fileName, data) {
    const writeFileAsync = promisify(writeFile);

    await writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
