function inverteString(str) {
    let result = ""; // variável que irá armazenar o resultado

    // loop que percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]; // adiciona cada caractere ao resultado
    }

    return result; // retorna o resultado
}