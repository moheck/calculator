var CalculatorState = (function () {
    function CalculatorState(displayValue) {
        this.displayValue = displayValue;
    }
    return CalculatorState;
}());
var Calculator = (function () {
    function Calculator() {
        this.currentNumber = '';
    }
    Calculator.prototype.addDigit = function (digit) {
        this.currentNumber = this.currentNumber + digit;
        return new CalculatorState(this.currentNumber);
    };
    Calculator.prototype.addOperator = function (operator) {
        this.calculateSubTotal();
        this.currentOperator = operator;
        this.currentNumber = '';
        return new CalculatorState(this.leftOperand + ' ' + this.currentOperator);
    };
    Calculator.prototype.showResult = function () {
        this.calculateSubTotal();
        console.log("Hello");
        console.log(new CalculatorState(this.leftOperand + ''));
    };
    Calculator.prototype.calculateSubTotal = function () {
        var value = parseInt(this.currentNumber, 10);
        if (this.leftOperand) {
            this.leftOperand = this.calculate(this.leftOperand, this.currentOperator, value);
        }
        else {
            this.leftOperand = value;
        }
    };
    Calculator.prototype.calculate = function (left, operator, right) {
        switch (operator) {
            case '+': return left + right;
            case '-': return left - right;
            case '/': return left / right;
            case '*': return left * right;
        }
    };
    return Calculator;
}());
