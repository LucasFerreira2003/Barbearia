document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-agendamento');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const hora = document.getElementById('hora').value;
  
      if (nome && hora) {
        alert(`Agendamento confirmado para ${nome} às ${hora}!`);
        form.reset();
  
        // Efeito de destaque temporário
        form.style.border = '2px solid green';
        setTimeout(() => {
          form.style.border = 'none';
        }, 2000);
      }
    });
  });
  