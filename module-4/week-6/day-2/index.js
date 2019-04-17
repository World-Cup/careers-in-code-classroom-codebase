//Control Flow:
// var myNumber=6;
// if (myNumber>5);{
//     console.log('my number');
// }
// console.log (Math.pow(4,4));
// const input='7 5 5 + *';
// const separatedInput=input.split(' ');
// console.log (separatedInput);

const stack =[];
for (let i = 0; i < separatedInput.length; i++){
    const token =separatedInput[i];
    console.log(token);
    const attemptAtNumber = parseFloat(token)
    if (attemptAtNumber !== NaN){
        //knows its a number and saves it on stack 
        stack.push(attemptAtNumber);
    } else if (toke=== '+'){
        const a = stack.pop();
        const b =stack.pop();
        stack.push(a+b);
    }else if (toke=== '-'){
        const a = stack.pop();
        const b =stack.pop();
        stack.push(a-b);
    }else if (toke=== '*'){
        const a = stack.pop();
        const b =stack.pop();
        stack.push(a*b);
    }else if (toke=== '/'){
        const a = stack.pop();
        const b =stack.pop();
        stack.push(a/b);
        stack.push (Math.pow(a,b));
    }else{
        throw new Error('Inalid Input!');
    }if (stack.length > 1){
        throw  new Error('Inalid Input!'); 
    }
}


