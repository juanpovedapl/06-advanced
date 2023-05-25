

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorsFunctionn = (element) => {

    const myGenerator = myFirstGeneratorFUnction();

    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
}

function* myFirstGeneratorFUnction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return `ya no hay valores`;
    yield `este ya no se ejecuta`;
}