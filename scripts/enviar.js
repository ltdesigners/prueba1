async function openData(){
    
    let name = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let fecha = document.getElementById('fecha').value;
    let lenguaje = document.getElementById('lenguaje').value;
    
    console.log(name);
    console.log(edad);
    console.log(fecha);
    console.log(lenguaje)

    const apiUrlPost ='http://localhost:3001/user';

    try{
        const response = await fetch(apiUrlPost, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({nombre: name, edad, fecha, lenguaje})
        });
        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    }catch(error){
        console.log("error al guardar los datos" + error)
    }

};
