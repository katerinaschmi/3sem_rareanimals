import Animal from "./animalClass.js"

export default class Inventory {
    constructor() {
        this.animals = [];
    }

    addAnimal(speciesName, gender, color, habitat, observationDate) {
        const newAnimal = new Animal(speciesName, gender, color, habitat, observationDate);
        this.animals.push(newAnimal);
    }

    getAnimal(speciesName) {
        for (const animal of this.animals) {
            if (speciesName === animal.speciesName) {
                return animal
            }
        }

        // The value null represents the intentional absence of the object value
        return null;
    }

    search(idealAnimal) {
        // Destructuring
        const {speciesName, gender, color, habitat, observationDate} = idealAnimal;

        for (const animal of this.animals) {
            if (animal.gender === gender && animal.color === color && animal.habitat === habitat && animal.observationDate === observationDate) {
                return animal;
            }
        }

        return null;
    }

    allAnimals() {
        return this.animals;
    }

    deleteAnimal(species) {
        const index=this.animals.map(animal => animal.speciesName).indexOf(species);
        this.animals.splice(index, 1); //Removes animal from animal object list
    }
}