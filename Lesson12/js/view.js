
import { add } from "./math.js" // для того щоб взяти для використання ідентифікатор з іншого модуля. Або взяти об'єкт, const, function
const output = document.querySelector("#output");

document.querySelector("#add-button").addEventListener("click", function () {
    let value1 = +document.querySelector("#value1").value; // "+"- для того щоб перетворилось на число 
    let value2 = +document.querySelector("#value2").value;


    let result = add(value1, value2);
    output.textContent = result;

})
