// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// Клас Key
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random(); // Генеруємо випадкову сигнатуру
    }

    getSignature(): number {
        return this.signature; // Повертаємо сигнатуру
    }
}

// Клас Person
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key; // Зберігаємо переданий ключ
    }

    getKey(): Key {
        return this.key; // Повертаємо ключ
    }
}

// Абстрактний клас House
abstract class House {
    protected door: boolean = false; // Стан дверей (закрито за замовчуванням)
    protected key: Key; // Ключ, який відкриває будинок
    protected tenants: Person[] = []; // Список мешканців

    constructor(key: Key) {
        this.key = key; // Зберігаємо ключ
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person); // Додаємо людину до мешканців
            console.log(`${person.getKey()} entered the house.`);
        } else {
            console.log('The door is closed. Cannot enter.');
        }
    }

    abstract openDoor(key: Key): void; // Абстрактний метод відкриття дверей
}

// Клас MyHouse
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true; // Відчиняємо двері, якщо ключ підходить
            console.log('The door is now open.');
        } else {
            console.log('Wrong key. The door remains closed.');
        }
    }
}

// --- Тестування ---
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // Відчиняємо двері
house.comeIn(person); // Людина заходить у будинок

export {};
