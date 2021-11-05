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

//Variable so the user can decide if they want to add a new member or not




//Function for asking the questions to generate the html
function questionAsker() {
    function newManager(){
        inquirer.prompt([{
            type: "input",
            name: "mName",
            message: "What is the managers name?"
        },
        
        {
            type: "input",
            name: "mEmail",
            message: "What is the managers email?"
        },
        
        {
            type: "input",
            name: "mId",
            message: "What is the managers id?"
        },
        
        {
            type: "input",
            name: "mOffice",
            message: "What is the managers office number?"
        }]).then((response) => {
            const newManager = new Manager(response.mName, response.mId, response.mEmail, response.mOffice);
            newTeamArray.push(newManager);
            //Place new employee function
            newEmployee();
        })
    }
    function newEmployee(){
 //       var addNew = true;

//Runs while the user still wants to add a new member
//while(addNew){
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
//} 
    }
    function createCards(){
        fs.writeFileSync(filePath, writeHtml(newTeamArray), "utf-8")
    }
    newManager();

}
questionAsker();