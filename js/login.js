import { setInitialValues } from '../helpers/setInitialValues.js';

// Variables
let form = document.getElementById('form_login');
let username = document.getElementById('username');
let password = document.getElementById('password');


// SET localstorage
if (!localStorage.getItem('users')) {
    setInitialValues();
}


// Funtion
function login(username, password){ 
    // GET users
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users)

    // FIND user
    let findUser = users.find( u => u.firstname === username);
    console.log(findUser)

    // VALIDATE user
    return (findUser !== undefined && findUser.password === password) ? true : false;
}


// Events
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // GET user values
    let user = username.value.toLowerCase().trim();
    let pass = password.value.toLowerCase().trim();

    // VALIDATE user values
    let validate = login(user, pass);
    if (validate) {
        // GET users
        const users = JSON.parse(localStorage.getItem('users'));

        // FIND user index
        let findUserIndex = users.findIndex( u => u.firstname === user);

        // UPDATE user state
        users[findUserIndex].active = true;

        // UPDATE localstorage
        localStorage.setItem('users', JSON.stringify(users));

        window.location.replace('../index.html');
        form.reset();
    } else {
        alert('Username or password incorrect!');
    }
});

