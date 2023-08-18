import { setCurrentDate } from '../helpers/setCurrentDate.js';

// Variables
const nombreTransfer = document.getElementById('nombreTransfer');
const montoTransfer = document.getElementById('montoTransfer');
const transferBtn = document.getElementById('transferBtn');


// Function
const transfer = () => {
    // GET transfer values
    const nombre = nombreTransfer.value.toLowerCase();
    const monto = Number(montoTransfer.value);

    // GET users
    const users = JSON.parse(localStorage.getItem('users'));

    // FIND user index
    let findUserIndex = users.findIndex( u => u.active);

    // VALIDATE user values
    if (users[findUserIndex].cuenta.saldo < monto) {
        alert('Insufficient funds, please try again!');
        return;
    } else if (monto <= 0) {
        alert('The amount must be greater than 0.');
        return;
    } else if (nombre.length < 3) {
        alert('The name must have at least 3 characters.');
        return;
    }

    // UPDATE saldo
    users[findUserIndex].cuenta.saldo -= monto;

    // CREATE user movement
    const newMovement = {
        date: setCurrentDate().date,
        time: setCurrentDate().time,
        amount: monto,
        to: nombre,
        reason: "Transfer"
    }

    // UPDATE user movements
    users[findUserIndex].cuenta.movements.push(newMovement);

    localStorage.setItem('users', JSON.stringify(users));

    window.location = '../index.html';
}


// Events
transferBtn.addEventListener('click', transfer);