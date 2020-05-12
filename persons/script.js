let personArray = [];
let age = 0;
let averageAge = 0;
const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);
let i = 0;
(function personTable() {


    const person = {};
    person.name = prompt('Please enter name of the ' + (i + 1) + ' person');
    person.age = +prompt('Please enter age of the ' + (i + 1) + 'person');
    personArray[i] = person;
    console.log('Person ' + i + ' Before addition ' + age);
    age += +person.age;
    console.log('Person ' + i + ' After addition ' + age);
    averageAge = age / personArray.length;

    personArray.sort(sortPerson);
    let html = '';
    for (let tmp = 0; tmp < personArray.length; tmp++) {
        html += '<tr><td>' + personArray[tmp].name + '</td><td>' + personArray[tmp].age + '</td></tr>';
    }


    document.getElementsByTagName('tbody')[0].innerHTML = html;
    console.log('Average age of person:' + averageAge);
    document.getElementById('averageAge').innerHTML = 'Average age of ' + personArray.length + ' person ' + averageAge;
    if (++i < personsNumber) {
        setTimeout(personTable, 0);
    }

})();


// const sortedPersons = persons.sort(function (a, b) {
// // if (a.name < b.name) return -1;
// // if (a.name > b.name) return 1;
// // return 0;// });
//


function sortPerson(person1, person2) {

    if (person1.age > person2.age) {
        return -1;
    } else if (person1.age < person2.age) {
        return 1;
    }

    return 0;
}
