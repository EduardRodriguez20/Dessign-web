let courses = [];
let horaries = [];
let students = [];

class course {
    constructor(code, name, speciality, duration, credits){
        this.code = code;
        this.name = name;
        this.speciality = speciality;
        this.duration = duration;
        this.credits = credits
    }

    modify(attribute, change){
    }

    delete(confirm){
    }

}

class student {
    constructor(code, name, career, course){
        this.code = code;
        this.name = name;
        this.career = career;
        this.course = [course];
    }
}

class horary {
    constructor(code_course, code_student, day, hour_init, hour_finish){
        this.code_course = code_course;
        this.code_student = code_student;
        this.day = day;
        this.hour_init = hour_init;
        this.hour_finish = hour_finish
    }
}

let my_course = new course(123, "curso 1", "especialidad", 25, 5)
courses.push(my_course)

let new_student = new student(321, "Pepito Perez", "Psicologia", 123)
students.push(new_student)

let new_horary = new horary(123, 321, 4, "12:00", "14:00")
horaries.push(new_horary)

function save_course(){
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let speciality = document.getElementById("speciality").value;
    let duration = document.getElementById("duration").value;
    let credits = document.getElementById("credits").value;

    let my_course = new course(code, name, speciality, duration, credits);
    courses.push(my_course);
    show_courses();
}

function show_courses(){
    let contain = document.getElementById("show_courses");
    contain.innerHTML = "";
    for (let i = 0; i < courses.length; i++){
        contain.innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#course${i}" aria-expanded="false" aria-controls="flush-collapseOne">
                    ${courses[i].name}
                </button>
            </h2>
            <div id="course${i}" class="accordion-collapse collapse" data-bs-parent="#show_courses">
                <div class="accordion-body">
                    <div>
                        <p>Codigo: ${courses[i].code}</p>
                        <p>Especialidad: ${courses[i].speciality}</p>
                        <p>Duracion: ${courses[i].duration}</p>
                        <p>Creditos: ${courses[i].credits}</p>
                    </div>
                    <button onclick="show_students(${courses[i].code}, ${i})">Ver inscritos</button>
                    <button onclick="window.modal${i}.showModal()">Inscribir Estudiante</button>
                    <dialog class="modal_student" id="modal${i}">
                        <h2>Inscribir Estudiante</h2>
                        <label for="">Codigo</label>
                        <input type="number" id="code_student">
                        <label for="">Nombre</label>
                        <input type="text" id="name_student">
                        <button onclick="add_student(${courses[i].code});">Guardar</button>
                        <button onclick="window.modal${i}.close();">Cerrar</button>
                    </dialog>
                    
                    <div id="students${courses[i].code}">
                        <div class="info_students" id="header${i}"></div>
                        <div class="info_students" id="content${i}"></div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

function add_student(code_career){
    let code = document.getElementById("code_student").value;
    let name = document.getElementById("name_student").value;
    
    let new_student = new student(code, name, "Psicologia", code_career)
    students.push(new_student);
}

function show_students(code, contain_id){
    let header = document.getElementById("header" + contain_id)
    let contain = document.getElementById("content" + contain_id)
    header.innerHTML = `
    <p>Estudiantes</p>
    <p>Lunes</p>
    <p>Martes</p>
    <p>Miercoles</p>
    <p>Jueves</p>
    <p>Viernes</p>
    <p>Sabado</p>
    <p>Domingo</p>
    `

    for (let i = 0; i < students.length; i++){
        if(students[i].course.includes(code)){
            contain.innerHTML += `
            <p>${students[i].name}</p>
            <div class="1">
                <a onclick="add_horary(${i}, ${contain_id}, 1)">Añadir horario</a>
            </div>
            <div class="2">
                <a onclick="add_horary(${i}, ${contain_id}, 2)">Añadir horario</a>
            </div>
            <div class="3">
                <a onclick="add_horary(${i}, ${contain_id}, 3)">Añadir horario</a>
            </div>
            <div class="4">
                <a onclick="add_horary(${i}, ${contain_id}, 4)">Añadir horario</a>
            </div>
            <div class="5">
                <a onclick="add_horary(${i}, ${contain_id}, 5)">Añadir horario</a>
            </div>
            <div class="6">
                <a onclick="add_horary(${i}, ${contain_id}, 6)">Añadir horario</a>
            </div>
            <div class="7">
                <a onclick="add_horary(${i}, ${contain_id}, 7)">Añadir horario</a>
            </div>
            `
        }
    }
}

function add_horary(i_student, course, day){
    let modal = document.getElementById("modal_horary")
    modal.showModal();
    let name = modal.querySelector("h3")
    name.textContent = students[i_student].name

    let hour_init = modal.querySelector("#hour_init").value
    let hour_finish = modal.querySelector("#hour_finish").value
    let new_horary = new horary(courses[course].code, students[i_student].code, day, hour_init, hour_finish) 
    horaries.push(new_horary);
    show_horaries()
}

function show_horaries(){
    
}

window.addEventListener("load", function (){
    show_courses()
})

