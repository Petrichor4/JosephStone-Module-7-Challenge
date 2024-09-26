// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case "MIT License 2.0":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 2-Clause License":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause License":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    default:
      licenseBadge = "";
  } return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Do I need this if the link is attached to the badge?
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License 2.0":
      data.licenseLink = '';
      break;
    case "Apache License 2.0":
      data.licenseLink = '';
      break;
    case "GNU General Public License v3.0":
      data.licenseLink = '';
      break;
    case "BSD 2-Clause License":
      data.licenseLink = '';
      break;
    case "BSD 3-Clause License":
      data.licenseLink = '';
      break;
    case "Creative Commons Zero v1.0 Universal":
      data.licenseLink = '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License

  ${license}

  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.fileTitle}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.desc}
  ## Table of contents

  - Installation
  * Usage
  * Licsense
  * Contributing
  * Tests
  * Question
  ## Installation

  ${data.install}
  ## Usage

  ${data.usage}
  ## Contributing

  ${data.contributing}
  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.tests}
  ## Questions

  ${data.questions}
`;
}

export default generateMarkdown;
