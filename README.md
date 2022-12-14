# Password Generator

## Description

The Password Generator is an application designed to create a random password using a variety of letters, numbers, and special characters. The application features prompted messages where the user is informed of:

* Password length
* Use of special characters
* Any potential error flags

The application is user friendly and compatible with mobile devices.

## User Story

```
As an employee with access to sensitive data, I want to randomly generate a password that meets certain criteria. By using the Password Generator I can create a strong password that provides greater security.
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/IMG/03-javascript-homework-demo.png)

## GitHub Repository Url

https://github.com/AramA89/Password-Generator

## Deployed Webpage Url

https://arama89.github.io/Password-Generator/