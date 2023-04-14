const addPlus = (() => {
    const addPlusDom = document.querySelector("#add");
    addPlusDom.addEventListener('click', () => {
        console.log('addPlusDom Work');
        let inp = document.querySelector('#inp');
        if (inp.getAttribute('class', 'hide' === false)) {
            inp.removeAttribute('class', 'hide');
        } else {
            inp.setAttribute('class', 'hide');
        }
    });
})();

export {
    addPlus
}