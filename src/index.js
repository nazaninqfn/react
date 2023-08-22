//  arrow functions don't rebind this
// const person ={
//     talk(){
//set time out will execute this function after this delay.
//         setTimeout(function(){
//             console.log("this",this);
//         },1000);

        
//     }
// };
// person.talk();

//arrow functions////////////////////////////////////
const person ={
    talk(){
        //set time out will execute this function after this delay.
        setTimeout(() =>{
            console.log("this",this);
        },1000);

        
    }
};
person.talk();
//Arrow functions don't rebind the this keyword.
