
const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');
const copiar = document.querySelector('copiar')
const imagem = document.querySelector('.mensagem-box')


function btnCriptografar() {
    const textoCriptografado = criptografar(inputTexto.value);
    mensagem.value = textoCriptografado
    if (inputTexto.value == "") {
        imagem.style.backgroundImage;
    } else {
        imagem.style.backgroundImage = "none";
    }
}


function criptografar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }
    return stringEncriptada;

}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(inputTexto.value);
    mensagem.value = textoDescriptografado
    if (inputTexto.value == "") {
        imagem.style.backgroundImage;
    } else {
        imagem.style.backgroundImage = "none";
    }
}

function descriptografar(stringDesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringDesencriptada.includes(matrizcodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value);
}
