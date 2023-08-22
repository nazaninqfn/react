

const person = {
    name:"mosh",
    walk(){
        console.log(this);
    }
};

person.walk();
const walk = person.walk.bind(person);
//in JavaScript, functions are objects,person.walk, 
//the person is actually an object

//we can use bind method to bind a function to an object
//With the bind method we can set the value of 'this' permanently

walk();