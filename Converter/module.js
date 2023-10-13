
export default function weight(value, quantity_enter, quantity_out) {
    let cuantity_gr = ""

    if (quantity_enter == "Gr"){
        cuantity_gr = value

    }else if (quantity_enter == "Lb"){
        cuantity_gr= value * 453.592

    }else if (quantity_enter == "Kg"){
        cuantity_gr= value * 1000

    }else if (quantity_enter == "@"){
        cuantity_gr= value * 11339.8

    }else if (quantity_enter == "Oz"){
        cuantity_gr= value * 28.3495
    }

    let new_quantity = ""
    if (quantity_out == "Gr"){
        new_quantity = cuantity_gr
        return new_quantity

    }else if (quantity_out == "Lb"){
        new_quantity = cuantity_gr / 453.592
        return parseFloat(new_quantity).toFixed(3)

    }else if (quantity_out == "Kg"){
        new_quantity = cuantity_gr / 1000
        return parseFloat(new_quantity).toFixed(3)

    }else if (quantity_out == "@"){
        new_quantity = cuantity_gr / 11339.8
        return parseFloat(new_quantity).toFixed(3)

    }else if (quantity_out == "Oz"){
        new_quantity = cuantity_gr / 28.3495
        return parseFloat(new_quantity).toFixed(3)
    }
}

