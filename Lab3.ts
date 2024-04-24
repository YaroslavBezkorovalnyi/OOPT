// level 1

// Інтерфейс стратегії
interface PaymentStrategy {
  pay(amount: number): void;
}

// Конкретна стратегія для оплати кредитною карткою
class CreditCardPaymentStrategy implements PaymentStrategy {
  private cardNumber: string;
  private expiryDate: string;
  private cvv: string;

  constructor(cardNumber: string, expiryDate: string, cvv: string) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  pay(amount: number): void {
    console.log(`Оплата ${amount} грн кредитною карткою ${this.cardNumber}`);
  }
}

// Конкретна стратегія для оплати через PayPal
class PayPalPaymentStrategy implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(
      `Оплата ${amount} грн через PayPal за допомогою електронної пошти ${this.email}`
    );
  }
}

// Клас контексту, який використовує стратегію
class PaymentContext {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  executePayment(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Використання
const creditCardPaymentStrategy = new CreditCardPaymentStrategy(
  "1234 5678 9012 3456",
  "12/25",
  "123"
);
const paypalPaymentStrategy = new PayPalPaymentStrategy("example@example.com");

const paymentContext = new PaymentContext(creditCardPaymentStrategy);
paymentContext.executePayment(1000); // Оплата 1000 грн кредитною карткою 1234 5678 9012 3456

paymentContext.setPaymentStrategy(paypalPaymentStrategy);
paymentContext.executePayment(500); // Оплата 500 грн через PayPal за допомогою електронної пошти example@example.com

/* У цьому прикладі ми маємо інтерфейс PaymentStrategy, який описує метод pay(amount). Класи CreditCardPaymentStrategy і 
PayPalPaymentStrategy реалізують цей інтерфейс, надаючи конкретні способи оплати.

Клас PaymentContext представляє контекст використання стратегії. 
Його метод executePayment(amount) викликає метод pay(amount) відповідної стратегії.

Користувач може вибрати потрібний спосіб оплати, передаючи відповідну стратегію у конструктор PaymentContext або використовуючи метод setPaymentStrategy(). 
Після цього можна викликати метод executePayment(amount) для здійснення оплати за допомогою вибраного способу. */

// Level 2

/* Назва проєкту: Система моніторингу за температурою
Опис проєкту:
Система моніторингу за температурою - це програмне забезпечення, яке дозволяє вимірювати та відслідковувати зміни температури у різних середовищах. 
Система має можливість сповіщати користувачів про зміни температури та зберігати історію вимірювань.

Функціональні вимоги:
1. Вимірювання температури:
- Система має здійснювати вимірювання температури в різних точках і записувати отримані дані.
2. Сповіщення про зміни температури:
- Система має забезпечувати можливість підписки на сповіщення про зміни температури в певних точках.
- При зміні температури користувачі, які підписалися на сповіщення, отримують повідомлення.
3. Візуалізація даних:
- Система має забезпечувати можливість візуалізації даних про температуру у вигляді графіків або діаграм.

Нереалізовані вимоги:
1. Стратегія (Strategy):
- Використовувати патерн Стратегія для реалізації різних методів вимірювання температури (наприклад, використання датчиків різних типів).
- Клас TemperatureMeasurementStrategy буде містити метод measure(), який реалізовуватиметься в конкретних стратегіях вимірювання температури (наприклад, 
  ThermocoupleMeasurementStrategy, InfraredSensorMeasurementStrategy).
- Забезпечити можливість легко додавати нові методи вимірювання температури без зміни основного класу системи.
2. Спостерігач (Observer):
- Використовувати патерн Спостерігач для реалізації механізму підписки на сповіщення про зміни температури.
- Клас TemperatureSensor буде виступати як спостеріганий об'єкт, а класи, які підписуються на сповіщення, будуть виступати як спостерігачі.
- При зміні температури спостережені об'єкти будуть отримувати сповіщення про цю зміну.

Технічні обмеження:
Мова програмування: TypeScript
Використання сенсорів та інших пристроїв для вимірювання температури.
Веб-інтерфейс для візуалізації даних та підписки на сповіщення.

Застосовані технології:
Frontend: HTML, CSS, JavaScript (або фреймворк, наприклад, React або Angular)
Backend: Node.js (або інший серверний JavaScript-фреймворк, наприклад, Express.js)
База даних: MongoDB (або інша NoSQL або SQL база даних, наприклад, PostgreSQL або MySQL) */
