import {weight, length , temperature, time} from "./module.js";

document.getElementById("quantity_weight").addEventListener("input", calculate_weight);
document.getElementById("option_weight").addEventListener("change", calculate_weight);
document.getElementById("convers_weight").addEventListener("change", calculate_weight);

document.getElementById("quantity_lenght").addEventListener("input", calculate_lenght);
document.getElementById("option_lenght").addEventListener("change", calculate_lenght);
document.getElementById("convers_lenght").addEventListener("change", calculate_lenght);

document.getElementById("quantity_temperature").addEventListener("input", calculate_temperature);
document.getElementById("option_temperature").addEventListener("change", calculate_temperature);
document.getElementById("convers_temperature").addEventListener("change", calculate_temperature);

document.getElementById("quantity_time").addEventListener("input", calculate_time);
document.getElementById("option_time").addEventListener("change", calculate_time);
document.getElementById("convers_time").addEventListener("change", calculate_time);

function calculate_weight(){
    let input_measure = document.getElementById("option_weight").value;
    let exit_measure = document.getElementById("convers_weight").value;
    let quantity = document.getElementById("quantity_weight").value;

    let value = weight(quantity, input_measure, exit_measure);
    let i_exit = document.getElementById("result_weight");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_lenght(){
    let input_measure = document.getElementById("option_lenght").value;
    let exit_measure = document.getElementById("convers_lenght").value;
    let quantity = document.getElementById("quantity_lenght").value;

    let value = length(quantity, input_measure, exit_measure);
    let i_exit = document.getElementById("result_lenght");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_temperature(){
    let input_measure = document.getElementById("option_temperature").value;
    let exit_measure = document.getElementById("convers_temperature").value;
    let quantity = document.getElementById("quantity_temperature").value;

    let value = temperature(quantity, input_measure, exit_measure);
    let i_exit = document.getElementById("result_temperature");
    i_exit.textContent = value + " " + exit_measure;
}

function calculate_time(){
    let input_measure = document.getElementById("option_time").value;
    let exit_measure = document.getElementById("convers_time").value;
    let quantity = document.getElementById("quantity_time").value;

    let value = time(quantity, input_measure, exit_measure);
    let i_exit = document.getElementById("result_time");
    i_exit.textContent = value + " " + exit_measure;
}

window.addEventListener("load", function(){
    calculate_weight()
    calculate_lenght()
    calculate_temperature()
    calculate_time()
})