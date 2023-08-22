const address = {
    street :'',
    city:'',
    country:'',

};
// const street = address.street;
// const city = address.city;
// const country = address.country;

//restructure ->
const {street, city, country} = address;

//const {street:st} = address;
//we want to call this constant st
//we are setting that to the street property of the address object

