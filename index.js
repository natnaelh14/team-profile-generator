// import node modules
const fs = require("fs");
const inquirer = require("inquirer");

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
      }
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
      }
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
        }
      }
  ]);
};
