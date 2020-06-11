let data = [
    {
      id: 1,  
      name: 'a',
      email: 'c@gmail.com',  
    },
    {
      id: 2,
      name: 'c',
      email: 'a@gmail.com'
    },
    {
      id: 3,
      name: 'b',
      email: 'b@gmail.com'
    },
];

renderFeedbackTable(data);

let sortedByName = 0; // state: 0 - not sorted, 1 - sorted ASC, -1 sorted DSC;

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    let feedback = {};

    // Extract data from form
    feedback.id = data.length + 1;
    feedback.name = document.querySelector('form input[name=name]').value;
    feedback.email = document.querySelector('form input[name=email]').value;
    feedback.feedback = document.querySelector('form textarea[name=feedback]').value;

    // Saving current date
    const date = new Date();
    feedback.date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    // Adding new feedback object to the data array
    data.push(feedback);

    event.target.reset();

    // Drawing table body
    renderFeedbackTable(data);
})

function renderFeedbackTable(data) {
    let tbody = '';

    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}

function sort(column) {
    let sortedData = [...data];
    if (sortedByName === 0) {
        sortedData.sort((a, b) => {
            if (a[column] > b[column]) return 1;
            if (a[column] < b[column]) return -1;
            return 0;
        });
        sortedByName = 1;
        document.getElementById(column).innerHTML = document.getElementById(column).innerHTML + '\u2193';
    } else if (sortedByName === 1) {
        sortedData.sort((a, b) => {
            if (a[column] > b[column]) return -1;
            if (a[column] < b[column]) return 1;
            return 0;
        });
        sortedByName = -1;
        document.getElementById(column).innerHTML = document.getElementById(column).innerHTML.substr(0, document.getElementById(column).innerHTML.length - 1) + '\u2191';
    } else {
        document.getElementById(column).innerHTML = document.getElementById(column).innerHTML.substr(0, document.getElementById(column).innerHTML.length - 1);
        sortedByName = 0;
    }

    renderFeedbackTable(sortedData);
}

document.querySelector('#name').addEventListener('click', function() {
    sort('name');
})

// document.querySelector('#name') === document.getElementById('name')
