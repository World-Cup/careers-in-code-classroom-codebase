
for (let i = 0; i < 10; i++){
    console.log(`current: ${i}`);
    if (i === 5){
        break
    } 
}
const myNum = 2; 
switch(myNum){
    case 1:
    case 2:
        console.log('It\'s one or two');
        break;
    case 3:
        console.log('It\'s three!');
        break;
    default:
        console.log('It\'s something else!');
        break;
}
//object is a reference, same with array. changing a reference changes all copies of that reference. 
const original = {a:5, b:7};
let copy = original; 
copy[0]=2;   

original ===6;

console.log(copy);
console.log(original);
// //shalow copy straight foward, deep copy needs a library. 
// //shallow coppy
// const original={
//     myLuckyNumber:7, 
//     moreLuckyThings: {
//         otherNumbers:{
//             //deeper copy. 
//             runnersUp:[8, 9, 10],
//             bigNumber: Infinity
//         }
//     }
// }

