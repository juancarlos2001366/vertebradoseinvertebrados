window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

 document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let vertebradoFavorito = event.target.vertebradoFavorito.value;
    let invertebradoFavorito = event.target.invertebradoFavorito.value;
    let patasInsecto = event.target.patasInsecto.value;
    let habitatPeces = event.target.habitatPeces.value;
    let tipoArana = event.target.tipoArana.value;

    let resultText = `
        <p><strong>Animal vertebrado favorito:</strong> ${vertebradoFavorito}</p>
        <p><strong>Animal invertebrado favorito:</strong> ${invertebradoFavorito}</p>
        <p><strong>Número de patas de un insecto:</strong> ${patasInsecto}</p>
        <p><strong>Hábitat principal de los peces:</strong> ${habitatPeces}</p>
        <p><strong>Tipo de animal es una araña:</strong> ${tipoArana}</p>
    `;

    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('results').classList.remove('hidden');
    
    // Mostrar la alerta
    alert('Gracias por responder el formulario, ojala hayas aprendido sobre los invertebrados y vertebrados');
});
