async function saveChanges() {
    const id = document.getElementById('registro-id').value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const fecha = document.getElementById('fecha').value;
    const lenguaje = document.getElementById('lenguaje').value;
  
    const apiUrlPut = `http://localhost:3001/user/${id}`;
  
    try {
      const response = await fetch(apiUrlPut, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, edad, fecha, lenguaje }),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar el registro: ${response.status}`);
      }
  
      console.log('Registro actualizado correctamente');
      // Opcional: Recargar la tabla
      fetchAndRenderTable();
  
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  }