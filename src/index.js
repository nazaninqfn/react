class Person {
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("walk");
    }
}

//teacher class inherit from the person class
//, and this means it will inherit all the
//methods defined in this person class

//extend make inherite

//whenever we add the constructor in a child
//class we need to call the constructor of it's parent class.
class Teacher extends Person {
    constructor(name,degree){

//whenever we add the constructor in a child
//class we need to call the constructor of it's parent class.
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('john','msc');

