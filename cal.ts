import inquirer from "inquirer";

async function startCalu(){

    console.log(`Mini Calculator \n`)
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter your first number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Your second Number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Add", "Sub", "Multiply", "Divide"],
            message: "Enter Your operator"
        }
    ])

    const userOp = userInput.operator;
    const firstNum = userInput.num1;
    const secondNum = userInput.num2;

    if(userOp == "Add"){
        console.log(`\n The answwer of ${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
    }
    else if(userOp == "Sub"){
        console.log(`\n The answer of ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
    }
    else if(userOp == "Multiply"){
        console.log(`\n The answer of ${firstNum} x ${secondNum} = ${firstNum * secondNum}`);
    }
    else if(userOp == "Divide"){
        console.log(`\n The answer of ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
    }

}

startCalu();
