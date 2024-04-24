// level 1

// Інтерфейс команди
interface Command {
  execute(): void;
}

// Клас кав'ярні
class CoffeeShop {
  // Метод для виготовлення кави
  makeCoffee(): void {
    console.log("Зробити каву");
  }

  // Метод для виготовлення чаю
  makeTea(): void {
    console.log("Зробити чай");
  }

  // Метод для приготування соку
  makeJuice(): void {
    console.log("Приготувати сік");
  }
}

// Конкретні команди для різних напоїв
class MakeCoffeeCommand implements Command {
  private coffeeShop: CoffeeShop;

  constructor(coffeeShop: CoffeeShop) {
    this.coffeeShop = coffeeShop;
  }

  execute(): void {
    this.coffeeShop.makeCoffee();
  }
}

class MakeTeaCommand implements Command {
  private coffeeShop: CoffeeShop;

  constructor(coffeeShop: CoffeeShop) {
    this.coffeeShop = coffeeShop;
  }

  execute(): void {
    this.coffeeShop.makeTea();
  }
}

class MakeJuiceCommand implements Command {
  private coffeeShop: CoffeeShop;

  constructor(coffeeShop: CoffeeShop) {
    this.coffeeShop = coffeeShop;
  }

  execute(): void {
    this.coffeeShop.makeJuice();
  }
}

// Клас макрокоманди, яка об'єднує декілька команд в одну
class OrderCommand implements Command {
  private commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    console.log("Починаємо виготовлення замовлення:");
    this.commands.forEach((command) => {
      command.execute();
    });
    console.log("Замовлення готове!");
  }
}

// Використання
const coffeeShop = new CoffeeShop();
const makeCoffeeCommand = new MakeCoffeeCommand(coffeeShop);
const makeTeaCommand = new MakeTeaCommand(coffeeShop);
const makeJuiceCommand = new MakeJuiceCommand(coffeeShop);

// Створення макрокоманди для замовлення
const orderCommand = new OrderCommand([
  makeCoffeeCommand,
  makeTeaCommand,
  makeJuiceCommand,
]);

// Виконання замовлення
orderCommand.execute();

/* У цьому прикладі патерн Макрокоманди використовується для об'єднання різних команд в одне замовлення. 
Класи команд відповідають за виготовлення конкретних напоїв (кави, чаю, соку),
 а клас OrderCommand об'єднує їх для виконання замовлення. Коли викликається метод execute() у макрокоманди, 
 він виконує всі команди в порядку їх додавання до макрокоманди. */

// Level 2

/* Технічне завдання
Назва проєкту: Система управління фінансами
Опис проєкту:
Система управління фінансами - це програмне забезпечення, яке дозволяє користувачам керувати своїми фінансовими операціями, 
включаючи додавання, редагування та видалення транзакцій, створення звітів та встановлення бюджетів.

Функціональні вимоги:
1. Додавання транзакцій:
- Користувачі можуть додавати нові транзакції, вказуючи суму, категорію, дату та опис операції.
2. Редагування транзакцій:
- Користувачі можуть редагувати існуючі транзакції, змінюючи будь-яку інформацію про них.
3. Видалення транзакцій:
- Користувачі можуть видаляти існуючі транзакції з системи.
4. Створення звітів:
- Система має забезпечувати можливість генерації звітів за певний період, що включає загальну суму витрат, доходів за категоріями, діаграми тощо.
5. Встановлення бюджетів:
Користувачі можуть встановлювати бюджети для певних категорій транзакцій та отримувати сповіщення, коли витрати перевищують встановлений ліміт.

Нереалізовані вимоги:
1. Макрокоманди:
- Використовувати патерн Макрокоманди для об'єднання декількох операцій (додавання, редагування, видалення транзакцій) в одну макрокоманду.
- Клас MacroCommand буде містити список команд (додавання, редагування, видалення), які будуть виконуватися послідовно при виклику методу execute().

Технічні обмеження:
Мова програмування: TypeScript
Frontend: HTML, CSS, JavaScript (або фреймворк, наприклад, React або Angular)
Backend: Node.js (або інший серверний JavaScript-фреймворк, наприклад, Express.js)
База даних: MongoDB (або інша NoSQL або SQL база даних, наприклад, PostgreSQL або MySQL)
Застосовані технології:
Frontend: HTML, CSS, JavaScript (або фреймворк, наприклад, React або Angular)
Backend: Node.js (або інший серверний JavaScript-фреймворк, наприклад, Express.js)
База даних: MongoDB (або інша NoSQL або SQL база даних, наприклад, PostgreSQL або MySQL)

Це технічне завдання описує систему управління фінансами з використанням патерну Макрокоманди для об'єднання операцій з транзакціями в одну 
макрокоманду для ефективного виконання дій з даними. */
