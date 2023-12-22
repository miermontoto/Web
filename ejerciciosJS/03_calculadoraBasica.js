class Calculadora {
    constructor() {
        this.currentValue = '';
        this.memory = 0;
        this.operator = null;
        this.clear();
    }

    clear() {
        this.currentValue = '0';
        this.updateDisplay();
    }

    addToCurrentValue(digit) {
        if (this.currentValue === '0') this.currentValue = '';
        this.currentValue += digit;
        this.updateDisplay();
    }

    addOperator(operator) {
        if (this.operator) this.calculate();
        this.memory = parseFloat(this.currentValue);
        this.operator = operator;
        this.currentValue = '';
    }

    calculate() {
        let result;
        switch (this.operator) {
            case '+': result = this.memory + parseFloat(this.currentValue); break;
            case '-': result = this.memory - parseFloat(this.currentValue); break;
            case '*': result = this.memory * parseFloat(this.currentValue); break;
            case '/': result = this.memory / parseFloat(this.currentValue); break;
            default: return;
        }
        this.currentValue = result.toString();
        this.operator = null;
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('salida').innerText = this.currentValue;
    }
}

var calculadora = new Calculadora();

window.onload = () => {
    document.querySelectorAll('.entrada').forEach(element => {
        element.addEventListener('click', () => {
            calculadora.addToCurrentValue(element.innerText);
        });
    });

    document.querySelectorAll('.operacion').forEach(element => {
        element.addEventListener('click', () => {
            if (element.innerText === 'C') {
                calculadora.clear();
            } else if (element.innerText === '=') {
                calculadora.calculate();
            } else {
                calculadora.addOperator(element.innerText);
            }
        });
    });
};
