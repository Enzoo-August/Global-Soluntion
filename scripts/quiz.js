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
        });

        submitButton.addEventListener("mousedown", function() {
            submitButton.classList.add("down");
        });
        submitButton.addEventListener("mouseup", function() {
            submitButton.classList.remove("down");
        });
        submitButton.addEventListener("mouseleave", function() {
            submitButton.classList.remove("down");
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function(event) {
            event.preventDefault();
            limparRespostas();
        });

        resetButton.addEventListener("mousedown", function() {
            resetButton.classList.add("down");
        });
        resetButton.addEventListener("mouseup", function() {
            resetButton.classList.remove("down");
        });
        resetButton.addEventListener("mouseleave", function() {
            resetButton.classList.remove("down");
        });
    }
});

function pegaRespostas() {
    let respostas = [];

    for (let i = 1; i <= 10; i++) {
        let resposta = null;
        for (let letra of ["a", "b", "c", "d"]) {
            const input = document.getElementById(`q${i}${letra}`);
            if (input && input.checked) {
                resposta = input.value;
                break;
            }
        }
        respostas.push(resposta);
    }
    console.log("Respostas:", respostas);
    return respostas;
}

function checkAcertos(respostas) {
    let acertos = [];
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] === respostasCorretas[i]) {
            acertos.push(i + 1);
        }
    }
    return acertos;
}

function colorRespostas(acertos) {
    for (let i = 1; i <= 10; i++) {
        const divP = document.getElementById(`p${i}`);
        if (acertos.includes(i)) {
            divP.style.backgroundColor = "rgba(0, 230, 118, 0.4)";
        } else {
            divP.style.backgroundColor = "rgba(255, 23, 68, 0.4)";
        }
    }
}

function limparRespostas() {
    for (let i = 1; i <= 10; i++) {
        const divP = document.getElementById(`p${i}`);
        divP.style.backgroundColor = "";

        for (let letra of ["a", "b", "c", "d"]) {
            const input = document.getElementById(`q${i}${letra}`);
            if (input) {
                input.checked = false;
            }
        }
    }
}
