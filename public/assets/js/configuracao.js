function id(id) {
    return document.getElementById(id);
}

function name(name) {
    return document.getElementsByName(name);
}

function minMax(idDiv) {
    let displayDiv = id(idDiv);
    if (displayDiv.style.display == "flex" || displayDiv.style.display == "") {
        return displayDiv.style.display = "none"
    }
    else {
        return displayDiv.style.display = "flex"
    }
}

function acionamento() {
    return minMax("acionamento")
}

function calculos() {
    return minMax("calculos")
}

function acoplamentos() {
    return minMax("acoplamentos")
}

function confAdicionais() {
    return minMax("confAdicionais")
}

function itensCompativeis() {
    return minMax("itensCompativeis")
}

function fator() {
    let radioFator = name("tipoFator");
    for (let i = 0; i < radioFator.length; i++) {
        if ((radioFator[i].checked && radioFator[i].value == "calcular") == true) {
            id("calcularFatorServico").style.display = "flex";
            id("informarFatorServico").style.display = "none";
        }
        else if (radioFator[i].checked && radioFator[i].value == "informar") {
            id("calcularFatorServico").style.display = "none";
            id("informarFatorServico").style.display = "flex";
        }
    }
}

function acoplamentoEntrada() {
    let radioAcEntrada = name("entrada");
    for (let i = 0; i < radioAcEntrada.length; i++) {
        if ((radioAcEntrada[i].checked && radioAcEntrada[i].value == "não") == true) {
            id("acEntrada").style.display = "none"
        }
        else if (radioAcEntrada[i].checked && radioAcEntrada[i].value == "sim") {
            id("acEntrada").style.display = "grid"
        }
    }
}

function acoplamentoSaida() {
    let radioAcSaida = name("saida");
    for (let i = 0; i < radioAcSaida.length; i++) {
        if ((radioAcSaida[i].checked && radioAcSaida[i].value == "não") == true) {
            id("acSaida").style.display = "none"
        }
        else if (radioAcSaida[i].checked && radioAcSaida[i].value == "sim") {
            id("acSaida").style.display = "grid"
        }
    }
}

function tolerancia() {
    id("tolerancia").style.display = "flex";
}

function rpmSaida() {
    let entrada = id("rotacaoEntrada").value;
    let reducao = id("reducao").value;
    let rpmSaida = entrada / reducao;
    id("rotacaoSaida").value = rpmSaida.toFixed(2); 
}

function rpmEntrada() {
    let saida = id("rotacaoSaida").value;
    let reducao = id("reducao").value;
    let rpmEntrada = saida * reducao;
    id("rotacaoEntrada").value = rpmEntrada.toFixed(2); 
}

function torque() {
    let rpmSaida = id("rotacaoSaida").value;
    let potencia = id("potencia").value;
    let torque = potencia * 9550 / rpmSaida;
    id("torque").value = torque.toFixed(2); 
}

function potencia() {
    let rpmSaida = id("rotacaoSaida").value;
    let torque = id("torque").value;
    let potencia = torque / 9550 / rpmSaida;
    id("potencia").value = potencia.toFixed(2); 
}