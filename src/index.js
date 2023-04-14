import { CreatePage } from "./createPage";
import { add } from "./addButton";
import { addPlus } from "./addPlus";

let b = JSON.parse(localStorage.getItem('data'));
if (b != null) {
    CreatePage.createValue();
}

console.log('Hello, World!');