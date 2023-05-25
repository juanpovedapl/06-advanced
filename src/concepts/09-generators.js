

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorsFunctionn = (element) => {

    //const myGenerator = myFirstGeneratorFUnction();
    //console.log(myGenerator.next());
    const genId = idGenerator();

    const button = document.createElement('button');

    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } =genId.next();
        button.innerText = `Click ${value }`;
    }

    button.addEventListener('click', renderButton);
    


}


function* idGenerator() {
    let curredId = 0;
    while(true){
        yield ++curredId;
    }
}

function* myFirstGeneratorFUnction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return `ya no hay valores`;
    yield `este ya no se ejecuta`;
}