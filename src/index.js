// const square =function(number){
//     return number * number;
// }

//if we have only a single parameter we can exclude the parenthesis/ number =>{}
//if you have 0 parameters you have to add empty parenthesis./()=>{}
//we have a single parameter number
//now if the body of our function includes only a single line and returns a value can
//we can get rid of the return key word As well as the curly braces

const square = number =>  number * number;

console.log(square(5));

