// Породжуючі патерни

// Level 1

// Інтерфейс для створення об'єктів

interface Product {
  operation(): void;
}

// Конкретна реалізація продукту
class ConcreteProduct implements Product {
  public operation(): void {
    console.log("Викликано операцію ConcreteProduct");
  }
}

// Абстрактний клас фабрики
abstract class Creator {
  // Фабричний метод, що повертає об'єкт Product
  abstract factoryMethod(): Product;

  // Бізнес-логіка, що використовує фабричний метод
  public someOperation(): void {
    const product = this.factoryMethod();
    product.operation();
  }
}

// Конкретна реалізація фабрики
class ConcreteCreator extends Creator {
  // Реалізація фабричного методу, що створює об'єкт ConcreteProduct
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

// Використання
const creator: Creator = new ConcreteCreator();
creator.someOperation();

/* У цьому прикладі ми маємо інтерфейс Product, який описує метод operation(), 
який реалізований класом ConcreteProduct. Абстрактний клас Creator містить фабричний метод factoryMethod(), 
який ми реалізуємо в підкласах. Конкретна реалізація ConcreteCreator перевизначає factoryMethod() так, 
щоб вона повертала екземпляр ConcreteProduct. У методі someOperation() ми викликаємо фабричний метод для 
створення об'єкта Product і викликаємо його операцію.

Така структура дозволяє динамічно змінювати тип створеного об'єкта, 
забезпечуючи відокремлення клієнта від конкретних реалізацій продукту. */

// Level 2

/* Технічне завдання
Назва проєкту: Система керування замовленнями в інтернет-магазині
Опис проєкту:
Система керування замовленнями в інтернет-магазині - це програмне забезпечення, яке дозволяє ефективно керувати процесом замовлення товарів у 
інтернет-магазині, від прийому замовлення до його виконання та доставки.

Функціональні вимоги:
1. Реєстрація користувачів:
- Користувачі можуть реєструватися в системі, вказуючи електронну пошту та пароль.
- Підтвердженням реєстрації є відправлення підтвердження на вказану електронну пошту.
2. Додавання товарів до кошика:
- Користувачі можуть додавати товари до кошика, вказуючи кількість товарів для кожного.
- Система має вести облік вмісту кошика для кожного користувача.
3. Оформлення замовлення:
- Користувачі можуть оформляти замовлення з товарами зі свого кошика.
- Система має створювати замовлення та зберігати його в базі даних, зберігаючи інформацію про товари, кількість та адресу доставки.
4. Обробка замовлення:
- Адміністратор має можливість переглядати та обробляти непідтверджені замовлення.
- Після обробки замовлення система має відправляти підтвердження на вказану електронну пошту користувача.

Нереалізовані вимоги:
1. Фабричний метод (Factory Method):
- Використовувати паттерн Фабричний метод для створення різних типів доставок (наприклад, кур'єрська доставка, самовивіз з магазину, поштова доставка).
- Клас DeliveryFactory буде містити абстрактний метод createDelivery, який підкласи будуть реалізовувати для створення конкретних типів доставок
 (наприклад, CourierDelivery, StorePickup, PostalDelivery).
- Забезпечити можливість легко додавати нові типи доставок без зміни основного класу системи.

Технічні обмеження:
Мова програмування: TypeScript
Використання бази даних для збереження інформації про користувачів, товари, замовлення тощо.
Веб-інтерфейс для користувачів та адміністраторів.
Застосовані технології:
Frontend: HTML, CSS, JavaScript (або фреймворк, наприклад, React або Angular)
Backend: Node.js (або інший серверний JavaScript-фреймворк, наприклад, Express.js)
База даних: MongoDB (або інша NoSQL або SQL база даних, наприклад, PostgreSQL або MySQL) */
