

const CreatePage = (() => {
    console.log('It work');

    let arr = [];

    function createValue() {
        console.log('createValue work');
        let b = JSON.parse(localStorage.getItem('data'));
        for (let x = 0; x < b.length; x++) {
            addDom(b, x);
            deleteBtns(x);
        }

    }

    function addRow() {
        let b = JSON.parse(localStorage.getItem('data'));
        addDom(b, b.length-1);
        //deleteBtns();
    }

    return {
        arr,
        createValue,
        addRow
    }

})();


function addDom(b, num) {
    const main = document.querySelector('#mainContent');
    const title = document.createElement('div'); 
    title.setAttribute('class', 'title');
    title.innerHTML = b[num][0];
        
    const description = document.createElement('div');
    description.setAttribute('class', 'description');
    description.innerHTML = b[num][1];
        
    const dueDate = document.createElement('div');
    dueDate.setAttribute('class', 'due date');
    dueDate.innerHTML = b[num][2];
    
    const priority = document.createElement('div');
    priority.setAttribute('class', 'priority');
    priority.innerHTML = b[num][3];
    
    const del = document.createElement('div');
    del.setAttribute('class', 'delete');
    del.setAttribute('id', num);
    del.innerHTML = 'X';

        
    main.appendChild(title);
    main.appendChild(description);
    main.appendChild(dueDate);
    main.appendChild(priority);
    main.appendChild(del);

    if (priority.innerHTML === 'Medium') {
        title.classList.add('medium');
        description.classList.add('medium');
        dueDate.classList.add('medium');
        priority.classList.add('medium');
    } else if (priority.innerHTML === 'Hard') {
        title.classList.add('hard');
        description.classList.add('hard');
        dueDate.classList.add('hard');
        priority.classList.add('hard');
    } else if (priority.innerHTML === 'Low') {
        title.classList.add('low');
        description.classList.add('low');
        dueDate.classList.add('low');
        priority.classList.add('low');
    }
    
}

function deleteBtns(x) {
    const deleteButns = document.querySelectorAll('.delete');
    deleteButns[x].addEventListener('click', (e) => {
        console.log(e.target);
        let b = JSON.parse(localStorage.getItem('data'));

        b.splice(e.target.id, 1);

        localStorage.setItem('data', JSON.stringify(b));
        
        console.log(JSON.parse(localStorage.getItem('data')));

        window.location.reload();

    });
    //console.log(deleteButns.length - 1);
}

const expand = (() => {
    
})();


export {
    CreatePage
}