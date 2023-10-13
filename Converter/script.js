import weight from "./module.js";

document.getElementById("quantity_weight").addEventListener("input", calculate_weight);
document.getElementById("option_weight").addEventListener("change", calculate_weight);
document.getElementById("convers_weight").addEventListener("change", calculate_weight);

function calculate_weight(){
    let input_measure = document.getElementById("option_weight").value;
    let exit_measure = document.getElementById("convers_weight").value;
    let quantity = document.getElementById("quantity_weight").value;

    let value = weight(quantity, input_measure, exit_measure);
    let i_exit = document.getElementById("result_weight");
    i_exit.textContent = value + " " + exit_measure;
}
