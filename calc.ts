class CalculatorState {

	public displayValue: string;

	constructor(displayValue: string) {
		this.displayValue = displayValue;
		document.getElementById("display").innerHTML = this.displayValue; 
	}

}

class Calculator {

	private leftOperand:number;
	private currentNumber:string;
	private currentOperator:string;

	constructor() {
		this.currentNumber = '';
	}

	public addDigit(digit: string): CalculatorState {
		this.currentNumber = this.currentNumber + digit;
		return new CalculatorState(this.currentNumber);
	}

	public addOperator(operator: string): CalculatorState {
		this.calculateSubTotal();
		this.currentOperator = operator;
		this.currentNumber = '';

		return new CalculatorState(this.leftOperand + ' ' + this.currentOperator);
	}

	public showResult(): void {
		this.calculateSubTotal();
		console.log("Hello");
		console.log(new CalculatorState(this.leftOperand+''));
	}

	private calculateSubTotal() : void {
		var value = parseInt(this.currentNumber, 10);
		if(this.leftOperand) {
			this.leftOperand = this.calculate(this.leftOperand, this.currentOperator, value);
		}
		else {
			this.leftOperand = value;
		}
	}

	private calculate(left: number, operator: string, right: number) : number {
		switch(operator) {
			case '+': return left + right;
			case '-': return left - right;
			case '/': return left / right;
			case '*': return left * right;
		}
	}
}

var calc = new Calculator();