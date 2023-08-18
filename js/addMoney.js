import { setCurrentDate } from '../helpers/setCurrentDate.js';

const moneyInput = document.getElementById('addMoney');
const saveMoney = document.getElementById('saveMoney');


saveMoney.addEventListener('click', () => {
    // GET money value FROM input
    const moneyValue = Number(moneyInput.value);

    // VALIDATE user values
    if (moneyValue <= 0) {
        alert('The amount must be greater than 0.');
        return;
    }
    
    // GET saldo FROM localstorage
    const users = JSON.parse(localStorage.getItem('users'));

    // FIND user index
    let findUserIndex = users.findIndex( u => u.active );

    // CREATE movement
    const movement = {
        date: setCurrentDate().date,
        time: setCurrentDate().time,
        amount: moneyValue,
        to: "Me",
        reason: "Loan"
    }

    // SET movements and UPDATE saldo
    users[findUserIndex].cuenta.movements.push( movement );
    users[findUserIndex].cuenta.saldo += moneyValue;

    localStorage.setItem('users', JSON.stringify(users));
    window.location = '../index.html';
});
// let currentMoney = Number(localStorage.getItem('money'));