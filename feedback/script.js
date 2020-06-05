let data = [];

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
    renderFeedbackTable();
})

function renderFeedbackTable() {
    let tbody = '';

    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}

 

