document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("stage-title");
    const titleText = "Pegue a moeda dourada e acabe com a pobreza!";
    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Tempo entre cada letra (ajustável)
        }
    }

    typeWriter();
});


  
document.addEventListener("DOMContentLoaded", () => {
    // Criar elemento da mão
  

    // Identificar a posição dos botões de comandos
    const firstCommandButton = document.querySelector(".command-btn");
    if (!firstCommandButton) return;

    const rect = firstCommandButton.getBoundingClientRect();
    const offsetX = -140; // Distância da mão para os botões
    const offsetY = 15;  // Ajuste vertical

    handPointer.style.top = `${rect.top + window.scrollY + offsetY}px`;
    handPointer.style.left = `${rect.right + window.scrollX + offsetX}px`;

    document.body.appendChild(handPointer);

   
});


document.addEventListener("DOMContentLoaded", function () {
    const instructions = document.getElementById("instructions");
    const commandButtons = document.querySelectorAll(".command-btn");
    const executeBtn = document.getElementById("execute-btn");
    const character = document.getElementById("character");
    const target = document.getElementById("target");

    

    let stepIndex = 0; // Índice do passo atual do tutorial

    const tutorialSteps = [
    
        // A última mensagem será exibida somente quando o personagem pegar a moeda.
    ];

    // Exibir a primeira instrução ao carregar a página
    instructions.textContent = tutorialSteps[stepIndex];

    // Atualizar instruções conforme o usuário clica nos botões
    commandButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (stepIndex < tutorialSteps.length - 1) {
                stepIndex++; // Avança para o próximo passo
                instructions.textContent = tutorialSteps[stepIndex]; // Atualiza o texto na tela
            }
        });
    });

    // Atualiza o texto ao clicar no botão "Executar"
    executeBtn.addEventListener("click", () => {
        if (stepIndex < tutorialSteps.length - 1) {
            stepIndex++;
            instructions.textContent = tutorialSteps[stepIndex];
        }
    });

    // Verifica se o personagem pegou a moeda
    function checkCharacterPosition() {
        const characterTop = parseInt(character.style.top, 10);
        const characterLeft = parseInt(character.style.left, 10);
        const targetTop = parseInt(target.style.top, 10);
        const targetLeft = parseInt(target.style.left, 10);

        if (characterTop === targetTop && characterLeft === targetLeft) {
            instructions.textContent = "";

            setTimeout(() => {
                window.location.href = "ods2.html";
            }, 2000);
        }
    }


    

    // Monitorar a posição do personagem a cada movimento
    const observer = new MutationObserver(checkCharacterPosition);
    observer.observe(character, { attributes: true, attributeFilter: ["style"] });
});

