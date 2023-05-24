
/**
 *
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderVAlue = (value) => {
        console.log("1");
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]).then(renderVAlue);

}


const slowPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('slow Promise ');
    },200);
});

const mediumPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('medium Promise ');
    },150);
})

const fastPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('Fast Promise ');
    },90);
})
