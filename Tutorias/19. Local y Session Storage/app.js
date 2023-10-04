// Obtener elementos HTML
const estiloSelector = document.getElementById('estiloSelector');
const guardarEstilo = document.getElementById('guardarEstilo');
const estilos = document.getElementById('estilos');

// Evento para guardar el estilo en Local Storage
guardarEstilo.addEventListener('click', function () {
    const estiloSeleccionado = estiloSelector.value;

    if (estiloSeleccionado) {
        // Guardar el estilo en Local Storage
        localStorage.setItem('estilo', estiloSeleccionado);

        // Aplicar el estilo seleccionado
        estilos.setAttribute('href', estiloSeleccionado + '.css');
    }
});

// Verificar si hay un estilo almacenado en Local Storage al cargar la página
window.addEventListener('load', function () {
    const estiloAlmacenado = localStorage.getItem('estilo');

    if (estiloAlmacenado) {
        // Aplicar el estilo almacenado
        estilos.setAttribute('href', estiloAlmacenado + '.css');
        estiloSelector.value = estiloAlmacenado;
    }
});
