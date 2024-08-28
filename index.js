function encriptar() {
    let msg = document.querySelector("#input-msg").value;
    let check = msg.toLowerCase();
    if (msg !== check) return alert("EL MENSAJE NO DEBE CONTENER MAYUSCULAS")
    else if (!msg.split('').every(el => {
        let code = el.charCodeAt(0);
        return (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122); // a-z
    })) {
        return alert("EL MENSAJE NO DEBE CONTENER CARACTERES ESPECIALES");
    }
    let output = ""

    msg.split("").map(el => {
        switch (el) {
            case 'a':
                output += "ai";
                break;
            case 'e':
                output += "enter";
                break;
            case 'i':
                output += "imes";
                break;
            case 'o':
                output += "ober"
                break;
            case 'u':
                output += "ufat";
                break;
            default:
                output += el;
        }
    })

    console.log(output)
    document.querySelector("#output-msg").value = output;
}

let btn1 = document.querySelector("#btn-encriptar");
btn1.onclick = encriptar;

function desencriptar() {
    let msg = document.querySelector("#input-msg").value;
    console.log(msg);

    let output = msg.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector("#output-msg").value = output;
}

let btn2 = document.querySelector("#btn-desencriptar");
btn2.onclick = desencriptar;

function copiar() {
    let input = document.querySelector("#input-msg")
    let output = document.querySelector("#output-msg")

    input.value = output.value
    output.value = ""
}
let btn3 = document.querySelector("#btn-copiar");
btn3.onclick = copiar;