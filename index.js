// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    'Enter the title of the project?',
    'Enter a brief discription of the project?',
    'How does the user install the application?',
    'How does the user use the application?',
    'What license do you want to use?',
    'Who helped contribute to the project?',
    'Add any tests here:',
    'Enter your GitHub username:'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('File Created Successfully!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'fileTitle',
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'desc'
        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'install'
        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'usage'
        },
        {
            type: 'list',
            message: `${questions[4]}`,
            name: 'license',
            choices: [
                'MIT License 2.0',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'BSD 2-Clause License',
                'BSD 3-Clause License',
                'Creative Commons Zero v1.0 Universal',
                'None']
        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'contributing'
        },
        {
            type: 'input',
            message: `${questions[6]}`,
            name: 'tests'
        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'github'
        },
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'email'
        },

    ])
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
