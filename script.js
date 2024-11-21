function calcularResultado() {
    let acertos = 0;
    let totalPerguntas = 3;
  
    // Perguntas e respostas corretas
    const respostasCorretas = {
      q1: "A", // Michael Jackson
      q2: "A", // Thriller
      q3: "B"  // Queen
    };
  
    // Verificar respostas
    for (let i = 1; i <= totalPerguntas; i++) {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta) {
        if (resposta.value === respostasCorretas[`q${i}`]) {
          acertos++;
        }
      } else {
        alert(`Por favor, responda a pergunta ${i}.`);
        return;
      }
    }
  
    // Mostrar resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Você acertou ${acertos} de ${totalPerguntas} perguntas!</h3>`;
  }
  