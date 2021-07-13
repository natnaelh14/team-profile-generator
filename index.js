// import node modules
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

//Manager's Questions List
const managerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager of this team?",
      validate: function (input) {
        if (input === "") {
          console.log("Please enter the manager's name");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the manger's ID?",
      validate: function (input) {
        if (isNaN(input)) {
          console.log("Please enter the manager's ID");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
      validate: function (input) {
        if (input === "") {
          console.log("Please enter the manager's email");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "number",
      message: "What is the manager's office number?",
      validate: function (input) {
        if (isNaN(input)) {
          console.log("Please enter the manager's office number");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
};

const employeeQuestions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please choose your employee's role.",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What's the name of the employee?",
      validate: function () {
        if (input === "") {
          console.log("Please enter employee's name.");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
      validate: function (input) {
        if (isNaN(input)) {
          console.log("Please enter the employee's ID.");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
      validate: function (input) {
        if (input === "") {
          console.log("Please enter the employee's email.");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: async function (input) {
        let githubUrl = `https://api.github.com/users/${input}`;
        try {
          await axios.get(githubUrl);
          return true;
        } catch {
          return "GitHub username is not found";
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
      validate: function (input) {
        if (input === "") {
          console.log("Please enter the intern's school.");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "confirm",
      name: "addMoreEmployees",
      message: "Would you like to add more employees?",
      default: false,
    }
  ]);
};
