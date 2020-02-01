const inquirer = require('inquirer');
const { generate } = require('./generateHTML')


function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your github username',
            name: 'username',
        },
        {
            type: 'list',
            message: 'Please choose your favorite color',
            name: 'color',
            choices: [
                {
                    name: 'Red',
                    value: 'red'
                },
                {
                    name: 'Blue',
                    value: 'blue'
                },
                {
                    name: 'Pink',
                    value: 'blue'
                },
                {
                    name: 'Green',
                    value: 'blue'
                },
            ]
        }
    ])
}

async function main() {
    const { username, color} = await getUserInput();
    generate(username, color);
}

main();