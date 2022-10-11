export default class Controller {
    initialize(model,view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(animal) {
        return `
        <div class="card">
        <div class="container">
            <h class="cardHeader">${animal.getSpeciesName()}</h>
            <p class="cardText">${animal.getGender()}</p>
            <p class="cardText">${animal.getColor()}</p>
            <p class="cardText">${animal.getHabitat()}</p>
            <p class="cardText">${animal.getObservationDate()}</p>
            <button type="button" id="${animal.getSpeciesName()}" class="button">Delete</button>
        </div>
        </div>`;
    }

    speciesSearch(speciesName) {
        const animal = this.model.animalList.getAnimal(speciesName);
        let template ="";

        if (animal !== null) {
            template = this.buildTemplate(animal);
        } else {
            template = `
            <div class="container">
            <h>Invalid species name</h>
            </div>`;
        }
        this.view.message(template);
    }

    search(searchAnimal) {
        const animal = this.model.animalList.search(searchAnimal);
        let template ="";

        if (animal !== null) {
            template = this.buildTemplate(animal);
        } else {
            template = `
            <div class="container">
            <h>Invalid species name</h>
            </div>`;
        }
        this.view.message(template);
    }

    showAllAnimals () {
        let template = "";
        for (const animal of this.model.animalList.allAnimals()) {
            template += this.buildTemplate(animal);
        }
        this.view.message(template);
    }

    newAnimal(animal) {
        const doesAnimalAlreadyExist = this.model.animalList.getAnimal(animal.speciesName);

        if (doesAnimalAlreadyExist === null) {
            this.model.animalList.addAnimal(animal.speciesName, animal.gender, animal.color, animal.habitat, animal.observationDate);
            this.view.snackbar("The animal was saved");
            this.showAllAnimals();
        } else {
            this.view.snackbar("The animal already exist");
        }
    }

    deleteAnimal(species) {
        this.model.animalList.deleteAnimal(species);
        this.view.snackbar("The animal was deleted");
    }
}