document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("stage-title");

    const titleText = 
        "Os ODS são metas da ONU para cuidar do planeta.\n\n Tratando de temas como saúde, educação e igualdade." +
        " \n\n No jogo, você aprenderá sobre cada um deles se divertindo!\n\n" +
        "Cada fase representa um dos ODS!";

    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            const char = titleText.charAt(index);
            if (char === "\n") {
                titleElement.innerHTML += "<br>";
            } else {
                titleElement.innerHTML += char;
            }
            index++;
            setTimeout(typeWriter, 30); // Velocidade de digitação
        }
    }

    typeWriter();
});


  
  

