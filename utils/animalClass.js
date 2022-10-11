export default class Animal {
    constructor(speciesName, gender, color, habitat, observationDate) {
        this.speciesName = speciesName;
        this.gender = gender;
        this.color = color;
        this.habitat = habitat;
        this.observationDate = observationDate;
    }

    getSpeciesName() {
        return this.speciesName;
    }

    getGender() {
        return this.gender;
    }

    getColor() {
        return this.color;
    }

    getHabitat() {
        return this.habitat;
    }

    getObservationDate() {
        return this.observationDate;
    }
}