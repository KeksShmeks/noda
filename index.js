const colors = require('colors');

const startNum = process.argv[2];
const finishNum = process.argv[3];


if(isNaN(startNum) || isNaN(finishNum)){
    console.log('No correct number!!');
    return;
}

function isSimple(num) {
    if (num <= 0)  {
        return false;
    }
    if (Number.isInteger(num)){
        return true;
    }
    return true; 
}

for (let i = startNum; i <= finishNum; i++){
    if (isSimple(i)) {
        colorNum(i)
    } else {
        console.log('No correct ranges')
    }
}

function colorNum (num){
    if (num % 3 === 0) {
            console.log(colors.red(num));
        } else if ((num + 1) % 3 === 0) {
            console.log(colors.green(num));
        } else if (num % 3 === 1) {
            console.log(colors.yellow(num));
        } else {
            console.log(colors.green(num));
        }
}




