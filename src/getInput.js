const getInput = (() => {

    const inputTitle = () => document.querySelector("#inputTitle").value;
    const inputDescription = () => document.getElementById('inputDescription').value
    const inputDueDate = () => document.querySelector("#inputDueDate").value;
    const inputPriority = () => document.querySelector("#inputPriority").value;
    
    
    return {
        inputTitle,
        inputDescription,
        inputDueDate,
        inputPriority
    }

})();

export {
    getInput
}