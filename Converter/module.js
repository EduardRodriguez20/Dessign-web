export {weight, length, temperature, time}

function weight(value, quantity_enter, quantity_out) {
    let quantity_gr = value
    if (!value){
        quantity_gr = 0
    }
    if (quantity_enter == "Lb"){
        quantity_gr= value * 453.592

    }else if (quantity_enter == "Kg"){
        quantity_gr= value * 1000

    }else if (quantity_enter == "@"){
        quantity_gr= value * 11339.8

    }else if (quantity_enter == "Oz"){
        quantity_gr= value * 28.3495
    }

    let new_quantity = quantity_gr

    if (quantity_out == "Lb"){
        new_quantity = quantity_gr / 453.592

    }else if (quantity_out == "Kg"){
        new_quantity = quantity_gr / 1000

    }else if (quantity_out == "@"){
        new_quantity = quantity_gr / 11339.8

    }else if (quantity_out == "Oz"){
        new_quantity = quantity_gr / 28.3495
    }

    if (new_quantity % 1 == 0){
        return parseInt(new_quantity)
    }

    return parseFloat(new_quantity).toFixed(3)
}

function length(value, quantity_enter, quantity_out) {
    let quantity_meter = value
    if (!value){
        quantity_meter = 0
    }
    if (quantity_enter == "Yarda"){
        quantity_meter= value / 1.09361

    }else if (quantity_enter == "Codos"){
        quantity_meter= value * 2.247191011

    }else if (quantity_enter == "Km"){
        quantity_meter= value * 1000

    }else if (quantity_enter == "Milla"){
        quantity_meter= value * 1609.34
    }

    let new_quantity = quantity_meter

    if (quantity_out == "Yarda"){
        new_quantity= quantity_meter * 1.09361

    }else if (quantity_out == "Codos"){
        new_quantity= quantity_meter / 2.247191011

    }else if (quantity_out == "Km"){
        new_quantity= quantity_meter / 1000

    }else if (quantity_out == "Milla"){
        new_quantity= quantity_meter / 1609.34
    }

    if (new_quantity % 1 == 0){
        return parseInt(new_quantity)
    }
    return parseFloat(new_quantity).toFixed(4)
    
}

function temperature (value, quantity_enter, quantity_out) {
    let quantity_celsius = value
    if (!value){
        quantity_celsius = 0
    }
    if (quantity_enter == "K"){
        quantity_celsius= value - 273.15

    }else if (quantity_enter == "R"){
        quantity_celsius= value * 1.8 + 491.67 
    }

    let new_quantity = quantity_celsius

    if (quantity_out == "K"){
        new_quantity= quantity_celsius + 273.15

    }else if (quantity_out == "R"){
        new_quantity= quantity_celsius / 1.8 - 491.67
    }

    if (new_quantity % 1 == 0){
        return parseInt(new_quantity)
    }

    return parseFloat(new_quantity).toFixed(3)
}

function time (value, quantity_enter, quantity_out) {
    let seg = value
    if (!value){
        seg = 0
    }
    if (quantity_enter == "Min"){
        seg = value * 60

    }else if (quantity_enter == "Hora"){
        seg = value * 3600
    }

    let new_quantity = seg
    
    if (quantity_out == "Min"){
        new_quantity= seg / 60

    }else if (quantity_out == "Hora"){
        new_quantity= seg / 3600
    }

    if (new_quantity % 1 == 0){
        return parseInt(new_quantity)
    }

    return parseFloat(new_quantity).toFixed(3)
}