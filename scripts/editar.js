async function editRecord(id) {
    const apiUrlGet = `http://localhost:3001/user/${id}`;
  
    try {
      const response = await fetch(apiUrlGet);
      if (!response.ok) {
        throw new Error(`Error al obtener los datos: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Cargar los datos en el formulario
      document.getElementById('nombre').value = data.nombre;
      document.getElementById('edad').value = data.edad;
      document.getElementById('fecha').value = data.fecha;
      document.getElementById('lenguaje').value = data.lenguaje;
  
      // Guardar el ID en un atributo oculto para usarlo al actualizar
      document.getElementById('registro-id').value = id;
  
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }