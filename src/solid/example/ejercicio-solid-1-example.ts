// interface Animal {
//   makeSound(): string;
//   getName(): string | null;
// }

// interface Pet extends Animal {
//   getNumberOfTeeths(): number;
// }

// interface Bird extends Animal {
//   flightDistance(): number;
// }

// abstract class BaseAnimal implements Animal {
//   protected name: string | null;

//   constructor(name: string | null) {
//     this.name = name;
//   }

//   abstract makeSound(): string;

//   getName(): string | null {
//     return this.name;
//   }
// }

// abstract class BasePet extends BaseAnimal implements Pet {
//   constructor(name: string | null) {
//     super(name);
//   }

//   abstract getNumberOfTeeths(): number;
// }

// abstract class BaseBird extends BaseAnimal implements Bird {
//   constructor(name: string | null) {
//     super(name);
//   }

//   abstract flightDistance(): number;
// }

// export class Dog extends BasePet {
//   makeSound(): string {
//     return "Woof! Woof!";
//   }

//   getNumberOfTeeths(): number {
//     return 30;
//   }
// }

// export class Cat extends BasePet {
//   makeSound(): string {
//     return "Meow!";
//   }

//   getNumberOfTeeths(): number {
//     return 24;
//   }
// }

// export class Chicken extends BaseAnimal {
//   makeSound(): string {
//     return "Cluck Cluck!";
//   }
// }

// export class Duck extends BaseBird {
//   makeSound(): string {
//     return "Quack Quack!";
//   }

//   flightDistance(): number {
//     return 5000;
//   }
// }

// export class AnimalInfoPrinter {
//   printAnimalInfo(animal: BaseAnimal): void {
//     console.log(`Animal Name: ${animal.getName()}`);
//     console.log(`Sound: ${animal.makeSound()}`);
//   }

//   printAnimalTotalTeeth(animal: BasePet): void {
//     console.log(`Animal Name: ${animal.getName()}`);
//     console.log(`Teeth: ${animal.getNumberOfTeeths()}`);
//   }

//   printAnimalFlightDistance(animal: BaseBird): void {
//     console.log(`Animal Name: ${animal.getName()}`);
//     console.log(`Flight Meters: ${animal.flightDistance()}`);
//   }
// }

/*
  Responsabilidad Única (Single Responsibility Principle): Cada clase tiene una única responsabilidad. 
  Dog, Cat, Duck... tienen la responsabilidad de representar un tipo específico de animal y proporcionar el sonido correspondiente. 
  AnimalInfoPrinter tiene la responsabilidad de imprimir información de animales.
  
  Principio de Open/Closed (Open/Closed Principle): Las clases Dog, Cat, Chicken y Duck son cerradas para modificaciones pero abiertas para extensiones. 
  Puedes agregar nuevos tipos de animales (extensiones) sin modificar las clases existentes.

  Principio de Sustitución de Liskov (Liskov Substitution Principle): Las clases Cat y Dog son subtipos de Pet. 
  Pueden ser usadas indistintamente donde se espera un objeto de tipo Pet.

  Principio de Segregacion de interfaz (Interface Segregation Principle): Al crear Bird y Pet de Animal abstraemos a la clase Chicken de implementar métodos que no va a utilizar,
  de la misma manera que ni Bird ni Pet.
  
  Principio de Inversión de Dependencia (Dependency Inversion Principle): La clase AnimalInfoPrinter depende de la interfaz BasePet por ejemplo, que es una abstracción. 
  La implementación concreta de los pet (Dog y Cat) no está directamente acoplada a AnimalInfoPrinter.
*/

// Descomentar y pegar en index.ts para probar.

// import {
//   Cat,
//   Dog,
//   Duck,
//   Chicken,
//   AnimalInfoPrinter,
// } from "./solid/example/ejercicio-solid-1-example";

// const cat = new Cat("Salem");
// const dog = new Dog("Mimi");
// const duck = new Duck("Donald");
// const chicken = new Chicken("Kentuky");
// const infoPrinter = new AnimalInfoPrinter();

// infoPrinter.printAnimalFlightDistance(duck);
// infoPrinter.printAnimalInfo(cat);
// infoPrinter.printAnimalTotalTeeth(cat);
// infoPrinter.printAnimalInfo(dog);
// infoPrinter.printAnimalTotalTeeth(dog);
// infoPrinter.printAnimalInfo(chicken);
