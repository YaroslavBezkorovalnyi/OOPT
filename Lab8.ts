// level 1

// Decorator, Патерн "Декоратор" дозволяє динамічно додавати нові обов'язки або змінювати функціональність існуючих об'єктів.

// Інтерфейс компонента
interface Component {
  operation(): string;
}

// Реалізація компонента
class ConcreteComponent implements Component {
  operation(): string {
    return "ConcreteComponent: виконано операцію";
  }
}

// Базовий декоратор
abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

// Конкретний декоратор 1
class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

// Конкретний декоратор 2
class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

// Клієнтський код
function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

// Використання
const simple = new ConcreteComponent();
console.log("Client: Якщо компонент без декораторів:");
clientCode(simple);

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("\nClient: Тепер якщо до компонента додати декоратори:");
clientCode(decorator2);

/* У цьому прикладі ми маємо компонент ConcreteComponent, який реалізує інтерфейс Component. 
Потім ми маємо абстрактний клас Decorator, який реалізує той самий інтерфейс та містить посилання на об'єкт типу Component. 
Конкретні декоратори, які розширюють Decorator, можуть додавати функціональність до базового компонента. */

// Adapter, Патерн "Адаптер" дозволяє об'єктам з різним інтерфейсом працювати разом.

// Адаптований клас
class Adaptee {
  specificRequest(): string {
    return "Adaptee: специфічний запит";
  }
}

// Інтерфейс клієнта
interface Target {
  request(): string;
}

// Реалізація адаптера
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return `Adapter: (TRANSLATED) ${this.adaptee.specificRequest()}`;
  }
}

// Клієнтський код
function clientCodeTarget(target: Target) {
  console.log(target.request());
}

// Використання
const adaptee = new Adaptee();
console.log("Client: Якщо адаптований клас має непідходящий інтерфейс:");
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("\nClient: Але користувач сподівається на інтерфейс Target:");
const adapter = new Adapter(adaptee);
clientCodeTarget(adapter);

/* У цьому прикладі Adaptee має специфічний інтерфейс, який не підходить для використання клієнтським кодом. Ми створюємо клас Adapter,
 який реалізує інтерфейс Target та містить посилання на об'єкт типу Adaptee.
 Тепер клієнт може використовувати Adapter для взаємодії з Adaptee через інтерфейс Target. */
