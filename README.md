# My Professional README Generator titled:
# my-pro-readme-generator application

## The Task

The task was to create an application that would assist in creating a professional readme.md file for a github repository. This would be in the form of a command line application that dynamically generates a professional README file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). The [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) was reviewed as a reminder of everything that a high-quality, professional README should contain.

The application is invoked by using the following command:

```bash
node index.js
```

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

* A command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of the project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters various entries for description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added, titled after the relevant sections of the README the user has filled in information for.
    * When a user chooses a license for their application from a list of options then a badge for that license is added at the top of the README and a notice is added to the section of the README entitled **License** that details which license the application is covered under
    * When a user enters their GitHub username and their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions at the email address
    * When a user clicks on the links in the **Table of Contents** they are taken to the corresponding section of the README of which they clicked


## Sample Video of walk through of application

A sample video of a walk through f the application is here: [sample video](video\pro-readme-example-video.mp4)

## Link to Repository

The repository can be found here: [repository](https://github.com/ope079/my-pro-readme-generator)

## Example Readme generated by the app can be found in the link below:

A README.md generated by the app is here: [test ReadMe](starter\README.md)