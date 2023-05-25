function codificar() {
    var input = document.getElementById("inputText").value;
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i);
        var encodedCharCode = charCode + 1; // Modifica o código do caractere (neste caso, adiciona 1)

        var encodedChar = String.fromCharCode(encodedCharCode);
        output += encodedChar;
        }

        document.getElementById("outputText").textContent = output;
}

function decodificar() {
    var encodedInput = document.getElementById("encodedText").value;
    var decodedOutput = "";

    for (var i = 0; i < encodedInput.length; i++) {
        var encodedCharCode = encodedInput.charCodeAt(i);
        var charCode = encodedCharCode - 1; // Inverte a modificação feita na codificação

        var decodedChar = String.fromCharCode(charCode);
        decodedOutput += decodedChar;
    }

    document.getElementById("decodedText").textContent = decodedOutput;
}