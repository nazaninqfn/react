const first ={name: 'John',};
const second ={job : 'doctor'};

const combined ={...first,...second,location:"usa"};
console.log(combined);