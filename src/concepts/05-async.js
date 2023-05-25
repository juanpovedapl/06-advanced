import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = (element) => {

    const id1 = "5d86371f2343e37870b91ef1";
    const id2 = "5d86371f9f80b591f499df32";
    findHeroById(id2)
        .then( name  => element.innerHTML = name)
        .catch( error  => element.innerHTML = error)
}

/**
 *
 * @param {String} id 
 * @returns 
 */
const findHeroById = async (id) => {

    const hero = heroes.find( hero=> hero.id === id);

    if (!hero)
        throw  `Hero with id ${id} not found`;

    return hero.name;
}