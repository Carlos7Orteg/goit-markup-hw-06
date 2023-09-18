document.addEventListener('DOMContentLoaded', function () {
  const subscribeButton = document.getElementById('subscribe-button');
  const emailInput = document.getElementById('mail-subscribe');

  subscribeButton.addEventListener('click', function () {
    // Realizar el registro aquí (agregar según la lógica funcional)

    // Después del registro, restablece el input a vacío
    emailInput.value = '';
  });
});
