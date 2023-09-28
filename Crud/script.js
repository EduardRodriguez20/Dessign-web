function create(){
    let name = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    
    if (name.trim() === "" || date.trim() === ""){
        alert("No dejes campos vacios")
    }else{
        let permission = validation(name, date);
        if (permission){
            alert("La tarea/hora ya existe, valida")
        }else{
            const container = document.getElementById("works");
            let name_h2 = document.createElement("h2");
            name_h2.textContent = name;
            let date_h2 = document.createElement("h2");
            date_h2.setAttribute("id", "hour");
            date_h2.textContent = date;
            let work = document.createElement("div");
            work.classList.add("work");
            let checker = document.createElement("input");
            checker.setAttribute("onclick", "check_checkbox(this)");
            checker.type = "checkbox";
            let b_delete = document.createElement("button");
            b_delete.textContent = "Eliminar";
            b_delete.setAttribute("onclick", "remove(this)");
            work.appendChild(checker);
            work.appendChild(name_h2);
            work.appendChild(date_h2);
            work.appendChild(b_delete);
            container.appendChild(work);
        }
    }
    const works = document.getElementById("works");
    organization(works);
}

function organization(works){
    let hours_c = works.querySelectorAll("#hour");
    let hours = [];
    for (var x = 0; x < hours_c.length ; x++){
        hours.push([hours_c[x].textContent, works.children[x]])
    }
    hours.sort(compararPorHora);
    for (var x = 0; x < works.length ; x++){
        works[x].remove();
    }
    hours.forEach((contain) => {
        let new_div = contain[1]
        works.appendChild(new_div)
    })
}

function compararPorHora(a, b) {
    const hour_1 = a[0];
    const hour_2 = b[0];
    if (hour_1 < hour_2) {
        return -1;
    }
    if (hour_1 > hour_2) {
        return 1;
    }
}

function validation (name, date){
    let confirm = false;
    const works = document.querySelectorAll("#works h2")
    works.forEach((work) => {
        if (work.textContent == name || work.textContent == date){
            confirm = true;
        }
    })
    return confirm
}

function remove(delete_b){
    let father = delete_b.parentElement;
    father.remove();
}

function check_checkbox(check){
    let father = check.parentElement;
    let texts = father.querySelectorAll("h2");
    if (check.checked) {
        texts.forEach((text) => {
            text.style = "text-decoration : line-through; color: gray;";
        });
    } else {
        texts.forEach((text) => {
            text.style = "text-decoration : none; color: white;";
        });
    }
}

const create_b = document.getElementById("create");
create_b.addEventListener("click", create);
