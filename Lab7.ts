// level 1
// Реєстр автомобілів, де можна здійснювати додавання та видалення записів, а також відновлення попереднього стану.

// Originator - клас, який створює та відновлює стан зберігача
class CarRegistry {
  private cars: string[] = [];

  addCar(car: string): void {
    this.cars.push(car);
  }

  removeCar(index: number): void {
    if (index >= 0 && index < this.cars.length) {
      this.cars.splice(index, 1);
    }
  }

  getCars(): string[] {
    return this.cars.slice(); // Повертаємо копію масиву
  }

  // Створення зберігача
  createMemento(): Memento {
    return new Memento(this.cars.slice()); // Передаємо копію масиву
  }

  // Відновлення стану зберігача
  restoreMemento(memento: Memento): void {
    this.cars = memento.getState().slice(); // Перезаписуємо масив з копії збереженого стану
  }
}

// Memento - клас, який зберігає стан
class Memento {
  private state: string[];

  constructor(state: string[]) {
    this.state = state;
  }

  getState(): string[] {
    return this.state.slice(); // Повертаємо копію масиву
  }
}

// Caretaker - клас, який зберігає та відновлює стан зберігача
class RegistryHistory {
  private mementos: Memento[] = [];

  // Додавання зберігача до історії
  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  // Отримання останнього зберігача з історії
  getLastMemento(): Memento | undefined {
    return this.mementos.pop();
  }
}

// Приклад використання
const carRegistry = new CarRegistry();
const registryHistory = new RegistryHistory(); // Змінено ім'я змінної на registryHistory

// Додаємо автомобілі до реєстру
carRegistry.addCar("Toyota");
carRegistry.addCar("Honda");
registryHistory.addMemento(carRegistry.createMemento());

// Потім видаляємо один автомобіль
carRegistry.removeCar(0);
registryHistory.addMemento(carRegistry.createMemento());

// Тепер відновлюємо попередній стан
const lastMemento = registryHistory.getLastMemento();
if (lastMemento) {
  carRegistry.restoreMemento(lastMemento);
}

console.log(carRegistry.getCars()); // Output: ["Toyota", "Honda"]

/* CarRegistry є "Originator", який створює та відновлює стан за допомогою об'єктів Memento. 
RegistryHistory виступає в ролі "Caretaker", який зберігає та надає доступ до збережених станів. */
