var student1 = {
    ID: 18301041,
    Name: "Eftykhar Rahman",
    Department: "CSE"
};
var student2 = {
    ID: 18301040,
    Name: "Mansura Akter",
    Department: "CSE"
};

// Printing all values 
console.log(student1);
console.log(student2);

// One way to print
var id = student1.ID;

console.log(id);

// Second way
var id = student1["ID"];

console.log(id);

// Third way
var identification = "ID";
var iD = student2[identification];

console.log(iD);

// Update way 1
student2.Department = "BBA";
console.log(student2);

// Update way 2
student2["Department"] = "ENH";
console.log(student2);

// Adding new properties way 1
student2.favSong = "Demons";
console.log(student2);

// Adding new properties way 2
student2["favPerson"] = "Nanu";
console.log(student2);