// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title:
  ${data.projectTitle}
  
  ## Description 
  ${data.description}

  ## Installation Instructions: 
  ${data.installation}

  ## Usage Information 
  ${data.usage}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Test Instructions 
  ${data.test}


`;
}

module.exports = generateMarkdown;
