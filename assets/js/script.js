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

// console.log(employes.tom.sallery);
console.log(getEmployesSalary("jan", "salary"));


// array methods
let employesSec = [
    { name: "Tom", salary: "2000", hours: "40", leascar: false },
    { name: "Elsa", salary: "1500", hours: "24", leascar: false },
    { name: "Jan", salary: "2100", hours: "36", leascar: true }
];

console.log(employesSec[0].hours);
