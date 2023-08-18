
export const setInitialValues = async () => {
    // GET users FROM JSON
    const response = await fetch('../users/users.json');
    const { users } = await response.json();
    
    // SET users into localstorage
    localStorage.setItem('users', JSON.stringify(users));
}