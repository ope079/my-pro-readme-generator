// function to generate markdown for README
function generateDescription(description) {
  return `
    ## Description
    ${description}
    `;
}

function licenceDescription(licence){
    return  licence === 'MIT' ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` :  
            licence === 'GNU GPL v3' ? `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)` :
            licence === 'GNU FDL v1.3' ? `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`:
            licence === 'Bsd-2-Clause' ? `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`:
            `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;

}

function generateMarkdown(data) {
    return `
  ${licenceDescription(data.license)}
    
  # ${data.title}
    ${data.description !== '' ? generateDescription(data.description) : ''}
  ## Table of Contents
    
  [Installation](#installation)

  [Usage](#usage)

  [License](#licence)

  This item is covered under the ${data.license} license.

  [Contribution](#contribution)

  [Tests](#tests)

  [Questions](#questions)


  ## Installation 
    ${data.installation}

  ## Usage 
    ${data.usage}

  ## License 
    ${data.license}

  ## Contribution 
    ${data.contribution}
    
  ## Tests 
    ${data.tests}

  ## Questions
    The link to other github repos and projects is here... https://github.com/${data.username}
    Please reach me on my email address ${data.email} for further questions about the 
    application/ project.
    
    Thank you!
    `;
}

module.exports = generateMarkdown;
