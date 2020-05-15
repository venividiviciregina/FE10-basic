function showUsersTable(persons = []) {
    console.log(persons);
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let averageAge = 0;
    let innerHtmlTableBody = '';
        for (let i = 0; i < persons.length; i++) {
            innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td></tr>';
            console.log('Person ' + (i + 1) + ': name = ' + sortedPersons[i].name + ' age = ' + sortedPersons[i].age);
            averageAge += + sortedPersons[i].age;
        }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

    console.log('Average age of person:' + averageAge);
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge;
}

let persons = [];
let averageAge = 0;
const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);


for (let i = 0; i < personsNumber; i++) {
    setTimeout(function() {
        const person = {};
        person.name = prompt('Please enter name of the ' + (i + 1) + ' person');
        person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
        persons[i] = person;

        showUsersTable(persons);
    }, 500)
}    
