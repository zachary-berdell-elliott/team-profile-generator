//Import the neccessary modules and libraries
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//Variable so the user can decide if they want to add a new member or not
var addNew = true;

//Runs while the user still wants to add a new member
while(addNew){
    inquirer
    .prompt({
        type: "list",
        message: "Would you like to add a new member?",
        name: "userCheck",
        choices: ["Yes", "No"]
    })
    .then((data) => {
        if(data.userCheck == "Yes"){
            questionAsker();
        }
        else{
            addNew = false;
        }
    })
}

//Function for asking the questions to generate the html
function questionAsker() {
    
}