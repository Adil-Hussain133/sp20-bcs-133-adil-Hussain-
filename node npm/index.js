const  {sum, subtract} =  require("./calculater/index.js"); // this is how we do maltiple exports 
// and this is the way to destructure the objects


// const calculater =  require("./calculater/index.js");
// const {sum, subtract}=calculater;
console.clear();
console.log("code is starting");

console.log(__dirname);
console.log(__filename);
console.log(sum(3,9));  //we can use the value by directr refrence
console.log(subtract(9,3));   //we can use the value by directr refrence
console.log(sum(4,3));    // we can destruct the object and place the vale in the saprate variable
console.log(subtract(9,8));   // we can destruct the object and place the vale in the saprate variable

