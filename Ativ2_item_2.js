//Atividade 2 - Item 2 - Calculadora - POO
class calculadora{
    resultado = 0
    memoria = []
    zerar(){
        this.resultado = 0
        this.memoria = []
    }
    desfazer(){
        this.resultado = this.memoria[0]
    }
    getResultado(){
        return this.resultado
    }
    soma(n1, n2){
        this.resultado = n1 + n2
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }
    }
    subtracao(n1, n2){
        this.resultado = n1 - n2
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }

    }
    multiplicacao(n1, n2){
        this.resultado = n1 * n2
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }

    }
    divisao(n1, n2){
        this.resultado = n1 / n2
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }

    }
    potencia(n1, n2){
        this.resultado = n1 ** n2
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }

    }
    raiz(n1){
        this.resultado = Math.sqrt(n1)
        if (this.memoria.length > 0){
            this.memoria.pop()
            this.memoria.push(this.resultado)
        }
        else{
            this.memoria.push(this.resultado)
        }

    }
}

var calc = new calculadora()
calc.soma(10, 20)
console.log(`Soma: ${calc.getResultado()}`);
calc.subtracao(10, 20)
console.log(`Subtração: ${calc.getResultado()}`);
calc.multiplicacao(10, 20)
console.log(`Multiplicação: ${calc.getResultado()}`);
calc.divisao(10, 20)
console.log(`Divisão: ${calc.getResultado()}`);
calc.potencia(10, 20)
console.log(`Potencia: ${calc.getResultado()}`);
calc.raiz(10)
console.log(`Raiz Quadrada: ${calc.getResultado()}`);
calc.desfazer()
console.log(calc.getResultado());
calc.zerar()
console.log(calc.getResultado());
console.log(calc.memoria)
