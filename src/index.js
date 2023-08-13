//use the const keyword to define a variable
//objects in JavaScript are collections of key value pairs
const person = {
    name :'mosh';
   //key:value->string
    walk :function(){
    //key:value->function=method
    //function in a object->method
    //walk is a method in the person object

    //another method in es6 way
    talk (){}
    }
};

//two ways to access these members
//.
//If you know ahead of time what property or method we're going to access

person.talk();
person.name = '';
//[]
//when we don't know ahead of time what property or method we're going to access

person['name'] = 'john';
//example
const targetMember = 'name';
person[targetMember.value] = 'John';