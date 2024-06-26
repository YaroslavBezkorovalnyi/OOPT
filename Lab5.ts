// level 1

// Інтерфейс ітератора
interface Iterator<T> {
  hasNext(): boolean;
  next(): IteratorResult<T, any>;
}

// Клас колекції
class Collection<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  // Метод, який повертає ітератор
  iterator(): Iterator<T> {
    return new CollectionIterator(this);
  }

  // Метод для отримання елементів колекції
  getItems(): T[] {
    return this.items;
  }
}

// Клас конкретного ітератора
class CollectionIterator<T> implements Iterator<T> {
  private collection: Collection<T>;
  private index: number;

  constructor(collection: Collection<T>) {
    this.collection = collection;
    this.index = 0;
  }

  // Перевірка наявності наступного елемента
  hasNext(): boolean {
    return this.index < this.collection.getItems().length;
  }

  // Повертає наступний елемент
  next(): IteratorResult<T, any> {
    if (this.hasNext()) {
      return {
        done: false,
        value: this.collection.getItems()[this.index++],
      };
    } else {
      return { done: true, value: undefined };
    }
  }
}

// Використання
const collection = new Collection<number>([1, 2, 3, 4, 5]);
const iterator = collection.iterator();

while (iterator.hasNext()) {
  const result = iterator.next();
  if (!result.done) {
    console.log(result.value);
  }
}

/* У цьому прикладі ми маємо інтерфейс Iterator, який описує методи hasNext() (перевіряє, чи є наступний елемент) та next() (повертає наступний елемент). 
Клас Collection представляє колекцію, яка містить елементи. Метод iterator() цього класу повертає конкретний ітератор - об'єкт класу CollectionIterator.
 Клас CollectionIterator реалізує методи інтерфейсу Iterator для ітерації через елементи колекції.*/

// level 2

/* Технічне завдання: Керування інвентарем магазину
Огляд
Наш магазин продає різноманітні товари, і нам потрібно програмне забезпечення для керування інвентарем. Ми хочемо мати можливість додавати, 
видаляти та переглядати товари, а також проводити різноманітні операції з ними.

Функціональні вимоги
1. Додавання товару:
- Має бути можливість додавати нові товари до інвентарю магазину.
- Кожен товар має мати унікальний ідентифікатор, назву, ціну та кількість на складі.
2. Видалення товару:
- Має бути можливість видаляти товари з інвентарю за їхнім ідентифікатором.
3. Перегляд товарів:
- Користувач може переглядати список усіх товарів у магазині разом з їхніми характеристиками (ідентифікатор, назва, ціна, кількість).
4. Проведення операцій з товаром:
- Користувач може здійснювати операції з товаром, такі як зміна ціни чи кількості.

Декомпозиція
1. Модуль управління інвентарем:
- Клас Inventory буде відповідати за управління інвентарем магазину. Він буде мати методи для додавання, видалення та перегляду товарів.
- Паттерн Ітератор буде використаний для перегляду товарів у магазині.
2. Модуль управління станом товару:
- Клас Product буде відповідати за представлення окремого товару в інвентарі. Він буде мати властивості для зберігання інформації про товар.
- Паттерн Стан буде використаний для визначення стану товару, такого як ціна та кількість.

Реалізація
1. Модуль управління інвентарем:
- Клас Inventory буде містити методи addProduct, removeProduct та getProducts, які відповідатимуть за додавання, видалення та отримання списку товарів відповідно.
- Клас Inventory також буде містити приватне поле для зберігання списку товарів.
2. Модуль управління станом товару:
- Клас Product буде містити властивості для зберігання назви, ціни та кількості товару.
- Паттерн Стан буде використаний для визначення стану кожного товару, що дозволить змінювати ціну та кількість товару. */
