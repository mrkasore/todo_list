import { getInput } from "./getInput";
import { CreatePage } from "./createPage";

const add = (() => {
    document.querySelector("#addGoal").addEventListener('click', () => {

        CreatePage.arr = JSON.parse(localStorage.getItem('data'));
        if (CreatePage.arr === null) {
            CreatePage.arr = [];
        }
        if ((getInput.inputTitle() != '') && (getInput.inputDescription() != '') && (getInput.inputDueDate() != '') &&  (getInput.inputPriority() != '')){
            console.log(getInput.inputTitle());
            CreatePage.arr.push([getInput.inputTitle(), getInput.inputDescription(), getInput.inputDueDate(), getInput.inputPriority()]);
            localStorage.setItem('data', JSON.stringify(CreatePage.arr));
            CreatePage.addRow();
        }
        
        
    });
})();

export {
    add
}