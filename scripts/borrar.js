async function deleteData() {
    
    const id = document.getElementById('idEliminar').value; 

    if (!id) {
        alert('Por favor, ingresa un ID válido.');
        return;
    }

    const apiUrlDelete = `http://localhost:3001/user/${id}`;

    try {
        const response = await fetch(apiUrlDelete, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el registro: ${response.status}`);
        }

        const result = await response.json();
        alert(result.message);
        console.log(result);
    } catch (error) {
        console.error('Error al eliminar el registro:', error);
    }
}