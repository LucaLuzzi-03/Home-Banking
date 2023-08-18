
// Variables
const usernameEl = document.getElementById('usernameEl');
const userMoneyEl = document.getElementById('userMoneyEl');

const addMoneyBtn = document.getElementById('addMoneyBtn');
const logoutBtn = document.getElementById('logoutBtn');
const fundTransferBtn = document.getElementById('fundTransferBtn');

const activity = document.querySelector('.list_activity');
const thisDay = document.getElementById('thisDay');
const thisYear = document.getElementById('thisYear');
const thisMonth = document.getElementById('thisMonth');
const all = document.getElementById('All');


// Functions
const setUserValues = () => {
    // GET active uset
    const users = JSON.parse(localStorage.getItem('users'));
    const activeUser = users.find( x => x.active );

    // SET movements INTO html
    activeUser.cuenta.movements.forEach(mov => {
        const html = 
        `
        <li class="mov">
            <div>
                <div class="container_movimient">
                    <i class="bi bi-arrow-up-right"></i>
                    <div>
                        <h3>To ${mov.to} - ${mov.reason} <span>${mov.time.slice(0, 5)} Hs</span></h3>
                        <small class="movDate">${mov.date}</small>
                    </div>
                </div>
                <span>${mov.reason === 'Loan' ? '+' : '-'}${mov.amount}</span>
            </div>
        </li>
        `;

        activity.insertAdjacentHTML("afterbegin", html);
    });

    // SET active user info into HTML
    usernameEl.textContent = activeUser.firstname.toUpperCase();
    userMoneyEl.textContent = `${activeUser.cuenta.saldo} ARS`;
}


// Events
window.addEventListener('load', setUserValues);

addMoneyBtn.addEventListener('click', () => {
    window.location = './pages/addMoney.html';
});

logoutBtn.addEventListener('click', () => {
    // GET active uset
    const users = JSON.parse(localStorage.getItem('users'));
    const activeUser = users.findIndex( x => x.active );

    // UPDATE active user
    users[activeUser].active = false;

    // UPDATE localstorage
    localStorage.setItem('users', JSON.stringify(users));

    window.location.replace('./pages/form_login.html');
});

fundTransferBtn.addEventListener('click', () => {
    window.location = './pages/fundTransfer.html';
});

//! REFACTORIZAR
thisDay.addEventListener('click', () => {
    // SET initial styles
    document.querySelectorAll('.list_activity li').forEach(mov => {
        if (mov.classList.contains('hidden')) {
            mov.classList.remove('hidden');
        }
    });     

    // GET movement dates
    const movDates = document.querySelectorAll('.movDate');

    // FILTER dates
    movDates.forEach(dateEl => {
        // GET dateEl value and thisDate
        const date = dateEl.textContent;
        const thisDay = String(new Date().getDate());
        const month = String(new Date().getMonth() + 1);
        const thisMonth = month < 10 ? `0${month}` : month;
        const thisYear = String(new Date().getFullYear());
        const fullDate = [thisDay, thisMonth, thisYear].join('-');

        // FILTER
        if (date !== fullDate) {
            dateEl.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
        }
    });
});

thisMonth.addEventListener('click', () => {
    // SET initial styles
    document.querySelectorAll('.list_activity li').forEach(mov => {
        if (mov.classList.contains('hidden')) {
            mov.classList.remove('hidden');
        }
    });

    // GET movement dates
    const movDates = document.querySelectorAll('.movDate');

    // FILTER dates
    movDates.forEach(dateEl => {
        // GET dateEl value and thisDate
        const date = dateEl.textContent;
        const month = String(new Date().getMonth() + 1);
        const thisMonth = month < 10 ? `0${month}` : month;
        const thisYear = String(new Date().getFullYear());

        // FILTER
        if (date.substring(6,10) !== thisYear) {
            dateEl.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
        }
        
        if (date.substring(3,5) !== thisMonth) {
            dateEl.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
        }
    });
});

thisYear.addEventListener('click', () => {
    // SET initial styles
    document.querySelectorAll('.list_activity li').forEach(mov => {
        if (mov.classList.contains('hidden')) {
            mov.classList.remove('hidden');
        }
    });

    // GET movement dates
    const movDates = document.querySelectorAll('.movDate');

    // FILTER dates
    movDates.forEach(dateEl => {
        // GET dateEl value and thisYear
        const date = dateEl.textContent;
        const thisYear = String(new Date().getFullYear());

        // FILTER
        if (date.substring(6, 10) !== thisYear) {
            dateEl.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
        }
    });

});

all.addEventListener('click', () => {
    document.querySelectorAll('.list_activity li').forEach(mov => {
        if (mov.classList.contains('hidden')) {
            mov.classList.remove('hidden');
        }
    });
});