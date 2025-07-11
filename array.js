// ARRAY IN JAVASCRIPT
// let student = "Rizwan"
// let student1 = "Nadeem"
// let student2 = "Namreen"
// let student3 = "Sohaima"
// let student4 = "Muhammad"

// console.log(student);
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// let students = ["Rizwan", "Muhammad" , "Murad"]
// console.log(students);

// // Adding Element to the end of Array

// // students.push("Iqra","Tahir");
// // console.log(students);

// // // Adding Element to the Start of Array
// // students.unshift("Don")
// // console.log(students);


// // // Removing Element to the end of Array

// // students.pop();
// // console.log(students);


// // // Removing Element to the start of Array

// // students.shift();
// // console.log(students);
// students.splice(2,0,"Abdullah")
// console.log(students);


// let newSlice=students.slice(0,3)
// console.log(newSlice);




let names = "rizwan";

// console.log(names[0].toLocaleUpperCase());

// let capName = names[0].toUpperCase() + names.slice(1);
// console.log(capName);


for (let i = 0; i < names.length; i++) {
   if (names[i]==="a") {
    capName = names[i].toUpperCase()
    
   }
   console.log(capName + names[i]);
    
}