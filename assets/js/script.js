let employes = {
    tom: {
        salary: 2000,
        hours: 40,
        leascar: false,
    },
    elsa: {
        salary: 1500,
        hours: 24,
        leascar: false,
    },
    jan: {
        salary: 2100,
        hours: 36,
        leascar: true,
    }
}

function getEmployesSalary(name, query) {
    return employes[name][query];
}

console.log(getEmployesSalary("jan", "salary"));


// array in array
let employesSec = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// foreach loop the arrays
employesSec.forEach((numbers) => { // [1,2] [3,4] [5,6]
    numbers.forEach(element => { // 1 2 3 4 5 6
        console.log(element);
    });
});

// foreach oefenen
// .filter()
let count = [1, 2, 3, 4, 5, 6];

const newnumbers = count.filter((number) => number > 3)
console.log(newnumbers); // [4, 5, 6]

// .filter() die ik heb gemaakt en bedacht.
let usersFilter = [
    { id: 1, name: "Klaas" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Kees" },
    { id: 5, name: "Kas" },
    { id: 6, name: "Jan" }
];

let someUsers = usersFilter.filter(item => item.name.toLowerCase().indexOf('k') === 0);

someUsers.forEach((elements) => {
    console.log(elements.name); // Klaas, Kees, Kas
})

// .map()
let arrayFive = ["Bilbo", "Gandalf", "Nazgul"];

let lengths = arrayFive.map(item => item.length);

console.log(lengths); // [5, 7, 6]

// .find()
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name);






