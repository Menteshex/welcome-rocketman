// Get form values
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const email = document.querySelector('#email').value;
const number = document.querySelector('#phone').value;
const num3 = number.slice(0, 3);

function fillform() {
    // Validate
    if (firstName === '' || lastName === '' || email === '') {
        console.log('Please fill in all fields');
    } else {
        // Instantiate
        if (firstName.lenght <= 2 || lastName.lenght <= 2 || email.lenght <= 2) {
            console.log('Not enough letters');
        }
    }
}

fillform();

function numvalidator() {
    if (num3 != '+995' && number.lenght != 12) {
        console.log('Please fill in right format');
    }
}

numvalidator();