 //funcao em js para ver a sequencia de fibonacci num vetor

function fibonacciGenerator(n) {
    var fibo = []
    for (var i = 1; i <= n; i++) {
        if (i == 1) {
            fibo.push(0);
        } else if (i == 2) {
            fibo.push(1);
        } else {
            fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1])
        }
    }
    return fibo;
    //console.log(fibo);
}


 //funcao em js para ver se pertence fibonacci

function pertenceFibo(n) {
    let atual = 1;
    let ant = 1;
    if (n >= 0) {
        if (n === 0 || n === 1) {
            return "pertence";
        } else {
            while (atual < n) {
                let prox = ant + atual;
                ant = atual;
                atual = prox;
            }
            if (atual === n) {
                return "pertence";
            } else
                return "nao pertence";
        }
    } else
        return "nao pertence";
}