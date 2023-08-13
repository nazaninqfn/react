//this
//this always returns a reference to the current object.

//If we call a function as a method in an object, this will always return a reference to that object.

const person = {
    name:"mosh",
    walk(){
        console.log(this);
    }
};
//example
person.walk();
const walk = person.walk;

//if we call a function as a stand alone object, or outside of an object, this will return the global object which is the window object in browsers
walk();