function submitForm() {
    const name = document.getElementById('user').value;
    const email = document.getElementById('pass').value;
    const message = document.getElementById('email').value;
    const responseMessage = document.getElementById('radio').value;

    if (name && email && message) {
        text.textContent = `Thank you for your submission, ${name}!`;
        text.style.color = 'lightgreen';

        // Clear the form fields
        document.getElementById('myForm').reset();
    } else {
        text.textContent = 'Please fill out all fields.';
        text.style.color = 'red';
    }
}