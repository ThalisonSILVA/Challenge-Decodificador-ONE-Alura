const mensagem =  document.querySelector(".mensagem");
 const textArea = document.querySelector(".text-area");
 const notification = document.querySelector(".notification");
 const btnCopy = document.querySelector(".btn-copy");
 textArea.focus();


function encriptar(stringEncriptada) {
   
    let matriz = [["e", "enter"],  ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matriz.length; i++) {
        if(stringEncriptada.includes(matriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptada;
}

function descriptar(stringDescriptada) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
        if(stringDescriptada.includes(matriz[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringDescriptada;
}

function handlerBtnDescriptarClick() {

    const text = descriptar(textArea.value);

    if(text != "") {
        mensagem.value = text;

        notification.style.display = "none";
        mensagem.style.backgroundImage = "none";
        btnCopy.style.display = "block";
        
    }
    else {
        window.alert("Não há texto para descriptografar");

        notification.style.display = "block";
        mensagem.style.backgroundImage = "url('../assets/imageBoneco.svg')";
        btnCopy.style.display = "none";
        textArea.focus();
    }
}

function handlerBtnEncriptarClick() {


    const text = encriptar(textArea.value);

    if(text != "") {
        mensagem.value = text;

    
        notification.style.display = "none";
        mensagem.style.backgroundImage = "none";
        btnCopy.style.display = "block";
    }
    else {
        window.alert("Precisa digitar um texto antes de criptografar.");
        textArea.focus();
    }

}

function handlerBtnCopyonKeyDown() {
    
    mensagem.select();
    document.execCommand('copy');
    mensagem.value = "";
    window.alert("Texto copiado com sucesso, use o atalho CTRL+V no campo \"Digite seu texto\" ");

    notification.style.display = "block";
    mensagem.style.backgroundImage = "url('../assets/imageBoneco.svg')";
    btnCopy.style.display = "none";
    textArea.value = "";
    textArea.focus();
}