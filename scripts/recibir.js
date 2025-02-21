/*const submitBtn = document.getElementById('submitBtn');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const result = document.getElementById('result');

submitBtn.addEventListener('click', function() {
// Obtenemos los valores de los campos de entrada
const password = passwordInput.value;
const username = usernameInput.value;

});*/
const apiUrl = "http://localhost:3001/users";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) { // Corrige la lógica: se lanza error si NO es OK
            throw new Error(`Error en la petición: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        getData(data);
    })
    .catch(error => {
        console.error('Error', error);
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });

const tableBody = document.querySelector("#data-table");
const getData = data =>{
    data.forEach(item =>{
    // Crear una nueva fila
        const row = document.createElement("tr");
        
        // Crear las celdas y agregar el contenido
        const celdaId = document.createElement("td");
        celdaId.textContent = item.id;

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = item.nombre;

        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = item.edad;

        const celdaFecha = document.createElement("td");
        celdaFecha.textContent = item.fecha;

        const celdalenguaje = document.createElement("td");
        celdalenguaje.textContent = item.lenguaje;

        // Agregar los datos o celdas a la fila
        row.appendChild(celdaId);
        row.appendChild(celdaNombre);
        row.appendChild(celdaEdad);
        row.appendChild(celdaFecha);
        row.appendChild(celdalenguaje)

        // Agregar toda la fila al body de la tabla
        tableBody.appendChild(row);

});
}