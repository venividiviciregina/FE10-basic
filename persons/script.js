let persons = [];
let averageAge = 0;
const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);


for (let i = 0; i < personsNumber; i++) {
    const person = {};
    person.name = prompt('Please enter name of the ' + (i + 1) + ' person');
    person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
    persons[i] = person;

    console.log('Person ' + i + ' Before addition ' + averageAge);
    averageAge += +person.age; 
    console.log('Person ' + i + ' After addition ' + averageAge);
}
averageAge /= personsNumber;

const sortedPersons = persons.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
});

let innerHtmlTableBody = '';
for (let i = 0; i < personsNumber; i++) {
    innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td></tr>';
    console.log('Person ' + (i + 1) + ': name = ' + sortedPersons[i].name + ' age = ' + sortedPersons[i].age);
}

document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

console.log('Average age of person:' + averageAge);

console.log('Hello, World');