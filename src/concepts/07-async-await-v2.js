
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component = async (element) => {

    console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
    //El codigo anterior no es optimo ya que debe esperar a que se
    //ejecuten todas las promesas secuencialmente asi una no dependa de la otra
    //En el siguiente codigo las dispara todas al mismo tiempo 
    // reduciendo el tiempo de ejecucion
    // este  codigo solo es util si y solo si 
    // una promesa o varias promesas no dependen otra
    const [value1,value2,value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])


    element.innerHTML = `
        value1:  ${value1}<br>
        value2:  ${value2}<br>
        value3:  ${value3}<br>
    `;
    console.timeEnd('Start');

}

const slowPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('slow Promise ');
    },1100);
});

const mediumPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('medium Promise ');
    },500);
})

const fastPromise = () => new Promise (resolve => {
    setTimeout(()=>{
        resolve ('Fast Promise ');
    },400);
})