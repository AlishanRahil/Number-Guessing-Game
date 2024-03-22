#!/usr/bin/env

import inquirer from "inquirer";

let random = Math.floor(Math.random() * 6 + 1);

let answer = await inquirer.prompt([{
    name:"user",
    type:"number",
    message:"Guess The Number Between 1-6"
}]);


if(answer.user === random){
    console.log("Conratulations You Gueesd Right")
}else{
    console.log("You Guessed Wrong")
}

