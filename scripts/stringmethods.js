let fullname = "Chinaza000 Chukwu";

// let firstname = fullname.slice(0,8);

// console.log(firstname);

// DYNAMIC SPLICING
let firstname = fullname.slice(0, fullname.indexOf(" "))
let lastname = fullname.slice(fullname.indexOf(" ") + 1)
console.log(firstname);
console.log(lastname);