function showUsersTable(sortedPersons = []) {

    let averageAge = 0;
    let minAge = sortedPersons[0].age;
    let maxAge = sortedPersons[0].age;
    let innerHtmlTableBody = '';

    for (let i = 0; i < sortedPersons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td><td>' + sortedPersons[i].city + '</td></tr>';
        averageAge += +sortedPersons[i].age;
        if (sortedPersons[i].age > maxAge)
            maxAge = sortedPersons[i].age;
        if (sortedPersons[i].age < minAge)
            minAge = sortedPersons[i].age;
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge + ' Min age: ' + minAge + ' Max age: ' + maxAge;
}

let persons = [];

let sortasc = true;

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.age = document.querySelector('input[name=age]').value;
    person.city = document.querySelector('input[name=city]').value;

    persons.push(person);

    sort(persons);
    showUsersTable(persons);

    document.querySelector('input[name=name]').value = '';
    document.querySelector('input[name=age]').value = '';
    document.querySelector('input[name=city]').value = '';
});

const ageHeader = document.getElementById('header_age');

ageHeader.addEventListener('click', function (event) {

    sortasc = !sortasc;

    document.getElementById('sort').innerHTML = sortasc ? ' asc' : ' desc';

    sort(persons);
    showUsersTable(persons);
    console.log('Age header clicked');
});


function sort(person = []) {

    person.sort(function (a, b) {
        let sort = 0;
        if (sortasc) {
            sort = a.age - b.age;
        } else {
            sort = b.age - a.age;
        }
        return sort;
    });
}
