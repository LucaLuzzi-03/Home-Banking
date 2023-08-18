
export const setCurrentDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    return {
        date: `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`,
        time: `${hour < 10 ? '0' + hour : hour}-${minutes < 10 ? '0' + minutes : minutes}-${seconds < 10 ? '0' + seconds : seconds}`
    };
}