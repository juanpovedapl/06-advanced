import {heroes} from '../data/heroes.js'
/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseComponent = (element) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }


    const renderTwoHeroes  = (hero1,hero2 ) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
            `;
    }

    const renderError = ( error) => {
        element.innerHTML = `
            <h1>Error: </h1>
            <h3>${error}</h3>
            `;
    }
    //usando promesa
    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f233c9f2425f16916';

    //! Forma 3. Cuando una promesa no depende  otra promesa anterior
    // el then solo se ejecutra si  toas las promesas se cumplen correctamente.
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1,hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
    //! Forma 2. Es más eficiente que la anterior y se usa cuando una promesa depende de otra
    // let hero1;

    // findHero( id1 )
    //     .then( (hero) =>{
    //         hero1= hero;
    //         return findHero(id2);

    // })
    // .then(hero2 => {
    //     renderTwoHeroes(hero1,hero2);
    // })
    // .catch(renderError);

    //! Forma 1. 
    // findHero( id1 )
    //     .then( (hero1) =>{

    //         findHero( id2 )
    //             .then(hero2 => {
    //                 renderTwoHeroes(hero1,hero2)
    //             })
    //             .catch( renderError);
    //     })
    //     .catch( renderError);
        //El codigo  comentado es equivalente a la linea anterior
        //En caso de que la promesa llamada tenga como parametro
        // una funcion con los mismos parametros de entrada, en el mismo
        //orden en este caso se puede presindir de la variable superHero
        // ya que  se pasaba como parametro de renderHero
        //.then( superHero => renderHero(superHero));
        
}

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise ((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id);
        if ( hero ){
            resolve(hero);
            return;
        }

        reject(` Hero with id ${ id } not found`);
    });

    //return promise;
    //const hero = heroes.find( hero => hero.id === id );
}