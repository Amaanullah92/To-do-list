#!/usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "toDo",
            type: "input",
            message: "What do you want to add in your To-do list?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        },
    ]);
    todoList.push(addTask.toDo);
    condition = addTask.addMore;
    console.log("Your to-do list:");
    console.log(todoList);
}
