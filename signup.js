function submitForm() {
    const name = document.getElementById('user').value;
    const email = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    const message = document.getElementById('email').value;
    const responseMessage = document.getElementById('radio').value;

    if (name && email && cpass && message) {
        text.textContent = `Thank you for your submission, ${name}!`;
        text.style.color = 'black';

        // Clear the form fields
        document.getElementById('myForm').reset();
    } else {
        text.textContent = 'Please fill out all fields.';
        text.style.color = 'red';
    }
}
const menu = document.querySelector('.menu')
const menuList = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})