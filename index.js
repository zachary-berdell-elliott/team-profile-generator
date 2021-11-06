//Import the neccessary modules and libraries
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const writeToDist = path.resolve(__dirname, "dist");
const filePath = path.join(writeToDist, "new-team.html");
const writeHtml = require("./src/htmlTemplate");
const newTeamArray = [];

//Function for asking the questions to generate the html
function questionAsker() {
    //Function for creating the manager card
     function newManager(){
        inquirer.prompt([{
            type: "input",
            name: "mName",
            message: "What is the manager's name?"
        },
        
        {
            type: "input",
            name: "mEmail",
            message: "What is the manager's email?"
        },
        
        {
            type: "input",
            name: "mId",
            message: "What is the manager's id?"
        },
        
        {
            type: "input",
            name: "mOffice",
            message: "What is the manager's office number?"
        }]).then((response) => {
            const newManager = new Manager(response.mName, response.mId, response.mEmail, response.mOffice);
            newTeamArray.push(newManager);
            //Place new employee function
            newEmployee();
        })
    }

    function newIntern(){
        inquirer.prompt([{
            type: "input",
            name: "iName",
            message: "What is the intern's name?"
        },
        
        {
            type: "input",
            name: "iEmail",
            message: "What is the intern's email?"
        },
        
        {
            type: "input",
            name: "iId",
            message: "What is the intern's id?"
        },
        
        {
            type: "input",
            name: "iSchool",
            message: "What is the intern's school?"
        }]).then((response) => {
            const newIntern = new Intern(response.iName, response.iId, response.iEmail, response.iSchool);
            newTeamArray.push(newIntern);
            //Place new employee function
            newEmployee();
        })
    }

    function newEngineer(){
        inquirer.prompt([{
            type: "input",
            name: "eName",
            message: "What is the engineer's name?"
        },
        
        {
            type: "input",
            name: "eEmail",
            message: "What is the engineer's email?"
        },
        
        {
            type: "input",
            name: "eId",
            message: "What is the engineer's id?"
        },
        
        {
            type: "input",
            name: "eGithub",
            message: "What is the engineer's Github?"
        }]).then((response) => {
            const newIntern = new Engineer(response.eName, response.eId, response.eEmail, response.eSchool);
            newTeamArray.push(newIntern);
            //Place new employee function
            newEmployee();
        })
    }

    function newEmployee(){
    inquirer
    .prompt({
        type: "list",
        message: "Would you like to add a new member?",
        name: "userCheck",
        choices: ["Engineer", "Intern", "No"]
    })
    .then((data) => {
        if(data.userCheck === "Engineer"){
            newEngineer();
        }
        if(data.userCheck === "Intern"){
            newIntern();
        }
        else{
            createCards();
        }
    })
    }
    function createCards(){
        fs.writeFileSync(filePath, writeHtml(newTeamArray), "utf-8")
    }
    newManager();

}
questionAsker();