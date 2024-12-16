const deliveries = {
  '12345': {
    status: 'En camino',
    location: { lat: 40.7128, lon: -74.0060 },
    estimatedArrival: '2024-12-16T14:30:00'
  },
  '67890': {
    status: 'Entregado',
    location: { lat: 40.730610, lon: -73.935242 },
    estimatedArrival: '2024-12-15T10:00:00'
  },
};

// Función para obtener el seguimiento
function obtenerSeguimiento() {
  const id = document.getElementById('numeroSeguimiento').value.trim();

  // Limpiar el campo de resultados antes de mostrar un nuevo resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'none';

  if (!id) {
    alert("Por favor, ingresa un número de seguimiento.");
    return;
  }

  const delivery = deliveries[id];

  if (delivery) {
    document.getElementById('estado').innerText = `Estado: ${delivery.status}`;
    document.getElementById('ubicacion').innerText = `Ubicación: Lat ${delivery.location.lat}, Lon ${delivery.location.lon}`;
    document.getElementById('horaEstimada').innerText = `Hora estimada: ${new Date(delivery.estimatedArrival).toLocaleString()}`;

    resultadoDiv.style.display = 'block';
  } else {
    alert("Pedido no encontrado. Verifique el número de seguimiento.");
  }
}

