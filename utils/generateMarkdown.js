// function to generate markdown for README

const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const boost = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
const bsd = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
const eclipse = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

function generateMarkdown(data) {

  let badge;
  if (data.license === "Apache License 2.0") {
    badge = apache;

  } else if (data.license === "Boost Software License 1.0") {
    badge === boost

  } else if (data.license === "BSD 3-Clause License") {
    badge === bsd

  } else if (data.license === "Eclipse Public License 1.0") {
    badge === eclipse
  }


  return `# Project Title:
  ${data.projectTitle}

  # License:
  ${data.license} ${badge}
  
  # Description 
  ${data.description}

  # Table of Contents: 
  [Installation](#-installation-instructions)
  [Usage](#-usage-information)
  [Contribution](#-contribution-guidelines)
  [Test](#-test-instructions)
  [Github](#-github-username)
  [Email](#-email)
  

  # Installation Instructions: 
  ${data.installation}

  # Usage Information: 
  ${data.usage}

  # Contribution Guidelines: 
  ${data.contribution}

  # Test Instructions: 
  ${data.test}

  # Github Username:
  https://github.com/${data.gitHub}

  # Email: 
  https://${data.email}


`;
}

module.exports = generateMarkdown;






