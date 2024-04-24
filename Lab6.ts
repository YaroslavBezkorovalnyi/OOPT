// level 1

// Інтерфейс виразу
interface Expression {
  interpret(context: Context): number;
}

// Контекст
class Context {
  private variables: { [key: string]: number };

  constructor() {
    this.variables = {};
  }

  public setVariable(name: string, value: number): void {
    this.variables[name] = value;
  }

  public getVariable(name: string): number {
    return this.variables[name];
  }
}

// Конкретний вираз для числа
class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(context: Context): number {
    return this.number;
  }
}

// Конкретний вираз для змінної
class VariableExpression implements Expression {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  interpret(context: Context): number {
    return context.getVariable(this.name);
  }
}

// Конкретний вираз для додавання
class AddExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(leftExpression: Expression, rightExpression: Expression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret(context: Context): number {
    return (
      this.leftExpression.interpret(context) +
      this.rightExpression.interpret(context)
    );
  }
}

// Використання
const context = new Context();
context.setVariable("x", 10);
context.setVariable("y", 5);

const expression = new AddExpression(
  new VariableExpression("x"),
  new NumberExpression(20)
);

const result = expression.interpret(context);
console.log("Result:", result); // Виведе: Result: 30

/* У цьому прикладі ми створили простий інтерпретатор, який може обчислювати арифметичні вирази, 
такі як додавання чисел та використання змінних. Кожен вид виразу реалізує 
інтерфейс Expression, що вимагає методу interpret, який обчислює значення виразу в контексті. 
Клас Context використовується для збереження значень змінних. */
