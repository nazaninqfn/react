
// So instead of writing all the code in one file, we write our code 
// in multiple files, we call each file a module.

//when working with modules, the objects we define in a module 
//are private by default

import { Teacher } from "./teacher";


const teacher = new Teacher('john','msc');

teacher.teach();
