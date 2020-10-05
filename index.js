const inquirer = require("inquirer");


// array of questions for user
const questions = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please provide a description of your application",
            name: "description"
        },
        {
            type: "input",
            message: "What was the reason you created this application for?",
            name: "tableOfContents"
        },
        {
            type: "checkbox",
            message: "What coding languages did you use when completing this task?",
            name: "stack",
            choices: [
                "CSS",
                "HTML",
                "JavaScript",
                "Node.JS"
            ]
        }

    ]).then(function (data) {
        console.log(data);
    });

    // const fileName = "README" + ".md";











// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
