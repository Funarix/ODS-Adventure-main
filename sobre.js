document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("stage-title");

    const titleText = 
        "Vamos aprender o que são os ODS – \n\nObjetivos de Desenvolvimento Sustentável," +
        " \n\n e como podemos ajudar a cuidar do mundo!\n\n" +
        "Vamos jogar e aprender juntos!";

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


  
  

