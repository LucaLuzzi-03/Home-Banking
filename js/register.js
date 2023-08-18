import { setCredentials } from '../helpers/setCredentials.js';


// Variables
const firstnameEl = document.getElementById('firstname');
const lastnameEl = document.getElementById('lastname');
const passwordEl = document.getElementById('password');
const emailEl = document.getElementById('email');

const form = document.querySelector('.registerForm');
const registerBtn = document.querySelector('.registerForm button');


// Function
const register = (firstname, lastname, password, email) => {
    // CREATE user
    const user = {
        firstname,
        lastname,
        password,
        email,
        active: false
    }

    // SET credentials
    user.cuenta = setCredentials(firstname, lastname);

    // GET users
    const users = JSON.parse(localStorage.getItem('users'));

    // SET user INTO users
    users.push(user);

    // UPDATE localstorage
    localStorage.setItem('users', JSON.stringify(users));
}


// Events
registerBtn.addEventListener('click', () => {
    //GET input values
    const firstname = firstnameEl.value.toLowerCase().trim();
    const lastname = lastnameEl.value.toLowerCase().trim();
    const password = passwordEl.value.toLowerCase().trim();
    const email = emailEl.value.toLowerCase().trim();

    // REGISTER new user
    register(firstname, lastname, password, email);

    form.reset();
    window.location = './form_login.html';
})