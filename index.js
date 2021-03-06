const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// array of questions for user
const questions = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Please provide a description of your application",
            name: "description"
        },

        {
            type: "input",
            message: "Please provide instructions as to the inquirer installation process",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide details as to the usage of the application",
            name: "usage"
        },
        {
            type: "input",
            message: "Please state if you are open to contributions and what your requirements are for accepting them",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please provide details as to the test instructions of your application",
            name: "test"
        },
        {
            type: "list",
            message: "Please choose a license type for your application",
            name: "license",
            choices: [
                "Apache License 2.0",
                "Boost Software License 1.0",
                "BSD 3-Clause License",
                "Eclipse Public License 1.0"
            ]
        },
        {
            type: "input",
            message: "Please state your GitHub username",
            name: "gitHub"
        },
        {
            type: "input",
            message: "Please provide your email address",
            name: "email"
        }


    ]).then(function (data) {

        fs.writeFile("README.md", generateMarkDown(data), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("README.md file created");

        });

    }).catch(function (err) {
        console.log(err);
    })













// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
