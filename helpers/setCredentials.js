
// SETTING credentials
export const setCredentials = (firstname, lastname) => {
    // CREATE credentials
    const alias = `ALIAS.${firstname}${lastname[0].toUpperCase()}`;
    const CBU = setCBU();

    return {
        alias,
        CBU,
        movements: [],
        saldo: 0
    }
}



const setCBU = () => {
    // CREATE empty CBU
    let CBU = [];

    // SET CBU values
    for (let i = 1; i <= 24; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        CBU.push(randomNum);    
    }

    // RETURN CBU
    return CBU.join('');
}