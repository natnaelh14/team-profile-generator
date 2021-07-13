// import node modules
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

//Imported classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const htmlGenerator = require("./src/htmlGenerator");

const membersArray = [];

//Manager's Questions List
const managerQuestions = () => {
  console.log('prompt function')
  return inquirer
    .prompt([
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
        name: "officeNumber",
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
    ])
    .then((data) => {
      let { name, id, email, officeNumber } = data;
      const manager = new Manager(name, id, email, officeNumber);
      membersArray.push(manager);
      console.log('membersArray', membersArray)
    });
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
        validate: function (input) {
          if (input === "") {
            console.log("Please enter employee's name.");
            return false;
          } else {
            return true;
          }
        }
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
        }
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
        message: "What is the employee's github username?",
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
        when: (input) => input.role === "Intern",
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
      },
    ])
    .then(data => {
      let { role, name, id, email, github, school, addMoreEmployees } = data;
      let employeeType;
      if (role === "Engineer") {
        employeeType = new Engineer(name, id, email, github)
      } else if (role === "Intern") {
        employeeType = new Intern(name, id, email, school)
      }
      membersArray.push(employeeType);
      if (addMoreEmployees) {
        employeeQuestions(membersArray);
      }
      console.log('membersArrayTwo', membersArray)
      return membersArray;
    });
};

//Generate index html file.

function writeFile(data) {
  fs.writeFile("./dist/about.html", data, (err) => {
    err
      ? console.log("Something went wrong. Please try again.")
      : console.log("Your team profile has been successfully created.");
  });
}

function init() {
  managerQuestions()
  .then(employeeQuestions)
  .then((membersArray) => {
    return htmlGenerator(membersArray);
  })
  .then((cardsRender) => {
    return writeFile(cardsRender);
  })
  .catch((err) => {
    console.log(err, "Something went wrong. Please try again");
  });
}

init();
