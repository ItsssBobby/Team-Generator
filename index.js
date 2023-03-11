const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/createHtml');
const createHtml = require('./src/createHtml');

const newTeam = []

function manager(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
]).then(response =>{
   const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
   newTeam.push(manager)
   addMember()
})
}

function engineer(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is the Engineer's github?"
    }
    ]).then(response =>{
       const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)
       newTeam.push(engineer)
       addMember()
    })
}

function intern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?"
      }

    ]).then(response => {
       const intern = new Intern(response.name, response.id, response.email, response.school);
       newTeam.push(intern);
       addMember();
    });
}


function addMember(){
    inquirer.prompt([{
        type: "list",
        name: "newMember",
        message: "What type of employee would you like to add",
        choices: ["Manager", "Engineer", "Intern", "Team is full"]
    }]).then(response =>{
        if (response.newMember === "Manager"){
            manager()
        }
        else if(response.newMember === "Engineer"){
            engineer()
        }
        else if(response.newMember === "Intern"){
            intern()
        }
        else {fs.writeFileSync("./dist/index.html", createHtml(newTeam))}
    })
}

addMember()