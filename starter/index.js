const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project here.'
    },
    // Installation guide
    {
        type: 'input',
        name: 'installation',
        message: 'Please give an installation guide here.'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please decribe how your application will be used.'
    },
    // License 
    {
        type: 'list',
        choices: ['MIT', 'GNU GPL v3', 'GNU FDL v1.3', 'Bsd-2-Clause', 'Creative Commons'],
        name: 'license',
        message: 'What type of licence do you want?'
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Please decribe how contributions can be made.'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please put your tests here.'
    },
    // username
    {
        type: 'input',
        name: 'username',
        message: 'Please put your username here.'
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Please put your email address here.'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const markdown = generateMarkdown(answers);
            console.log(markdown);
            writeToFile('README.md', markdown) 
        });
}

// function call to initialize program
init();