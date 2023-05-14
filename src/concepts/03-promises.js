import {heroes} from '../data/heroes.js'
/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseComponent = (element) => {

    console.log('que chimba sog')
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