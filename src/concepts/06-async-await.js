

import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwaitComponent = async (element) => {

    const id1 = "5d86371f2343e37870b91ef1";
    const id2 = "5d86371f9f80b591f499df32";
    //hero 1 y hero 2 son objetos y se pueden desestructurar
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);
    element.innerHTML=`${hero1.name} / ${hero2.name}`;
    //El codigo anterior llama a los objetos hero y despues
    //Imprime el nombre de cada uno
    //el siguiente codigo es equivalente empleando
    //des estructuracion, se extrae unicamente el atributo nombre
    // del objeto
    //const {name: name1} = await findHero(id1);
    //const {name: name2} = await findHero(id2);
    //element.innerHTML=`${name1} / ${name2}`;
}


const findHero = async (id) => {
     
    const hero = heroes.find(hero => hero.id === id );
    if (!hero)
        throw ` Hero not found`
    return hero ;
}