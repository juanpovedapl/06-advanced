import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;;

    do {
        const { value, done} = await heroGenerator.next();
        isFinished = done;

        //if ( isFinished ) break;

        element.innerHTML =value;

    }while(!isFinished)
}


async function * getHeroGenerator(){


    for (const hero of heroes){
        await sleep();
        yield hero.name;
    }

    return `Devuélveme, pues, también aquellos tiempos <br\>
            en que yo mismo estaba en flor, en que un copioso<br\>
            manantial de cantis nacía de nuevo sin cesar,<br\>
            en que las nieblas me velaban el mundo, en que el capullo<br\>
            me prometía aún maravillas, y cogía yo amiles de las flores <br\>
            que con profusión llenaban todos los valles.Nada tenía entonces <br\>
            y sin embargo, tenía lo suficiente:  afán de verdad y placer en la ilusíon<br\>
            Tórname aquellos indómitos impulsos, aquella íntima felicidad llena de dolor,<br\>
            la fuerza del odio, la potencia del amor:      <br\>
            ¡devuelvélveme la juventud!
            `;
}

const sleep = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        }, 500);
    })
}