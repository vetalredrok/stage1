//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animal {
    constructor(name) {
        this.name = name;
    }
    move () {
        console.log(`${this.name} is moving`);
    }
}

class Cat extends Animal{
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const animal = new Animal('snake');
animal.move();

const cat = new Cat('Barsik', 2);
cat.move();