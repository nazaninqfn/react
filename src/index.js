//to render a list of items use the map method of arrays

// const colors =['red', 'green', 'blue'];
// const items = colors.map( color =>'<li>'+color +'</li>');

//So this is what we want to call a template literal
const colors =['red', 'green', 'blue'];
const items = colors.map( color =>`<li>${color}</li>`);
                                    //what we put in 
                                    //between the braces
                                    // will be rendered dynamically
                                    // at run time.
console.log(items);