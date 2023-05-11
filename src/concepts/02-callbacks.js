import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 *
 */

export const callbacksComponent = (element) => {

    const id = '5d86371f25a058e5b1c8a65e';
    findHero(id, (error,heroByID) => {
        // validacion rapida 
        //element.innerHTML = herByID?.name || 'No se encontro un heroe con ese id';

        if (error){
            element.innerHTML = error;
            return;
        }
        element.innerHTML = heroByID.name;


    });
}
/**
 *
 * @param {String} id
 * @param {( error: String|Null, hero: Object) => void } callback
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if ( !hero ){
        callback(`Hero with id ${ id} not found`);
        return; //undefine
    }

    callback(null ,hero);

}