const respostasCorretas = ["a", "c", "c", "a", "c", "a", "a", "b", "b", "a"];

document.addEventListener("DOMContentLoaded", function() {

    const submitButton = document.getElementById("btnSubmit");
    const resetButton = document.getElementById("btnReset");

    if (submitButton) {

        submitButton.addEventListener("click", function(event) {
            event.preventDefault();
            let respostas = pegaRespostas();
            let acertos = checkAcertos(respostas);
            colorRespostas(acertos);
            // alert removido
        });
    
    if (resetButton){
        resetButton.addEventListener("click", function(event) {
            event.preventDefault();
            limparRespostas();
        });
    }
}});

function pegaRespostas() {
    let respostas = [];

    for (let i = 1; i <= 10; i++) {
        let resposta = null;
        for (let letra of ['a', 'b', 'c', 'd']) {
            const input = document.getElementById(`q${i}${letra}`);
            if (input && input.checked) {
                resposta = input.value;
                break;
            }
        }
        respostas.push(resposta);
    }

    // alert removido
    console.log("Respostas:", respostas);
    return respostas;
}
function checkAcertos(respostas) {
    let acertos = []
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == respostasCorretas[i]){
            acertos.push(i+1)
        }
    }
    return acertos;
}

function colorRespostas(acertos) {
    let respostasA = acertos
    
    for (let i = 1 ; i <= 10; i++) {
        const divP = document.getElementById(`p${i}`)        
        if(respostasA.includes(i)) {
            divP.style.backgroundColor = "#4CAF5077";
        }else{
            divP.style.backgroundColor = "#F4433677";
        }
    }
}

function limparRespostas(){
    for (let i = 1; i <= 10; i++) {
        const divP = document.getElementById(`p${i}`);
        divP.style.backgroundColor = "";

        for (let letra of ['a', 'b', 'c', 'd']) {
            const input = document.getElementById(`q${i}${letra}`);
            if (input) {
                input.checked = false;
            }
        }
    }
    alert("Quiz reiniciado!");
}
