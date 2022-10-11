import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.animalList = new Inventory;
        this.animalList.addAnimal("Giant Panda", "Female", "Black & White", "China (Sichuan province)", "2022-04-30");
        this.animalList.addAnimal("Wild Bactrian Camel", "Female", "White", "Kazakhstan", "1994-09-22");
        this.animalList.addAnimal("Kakapo", "Male", "Green", "New Zealand", "2003-07-14");
        this.animalList.addAnimal("Vaquita", "Female", "Grey", "Gulf of California", "2012-11-05");
        this.animalList.addAnimal("Cheetah", "Male", "Yellow & Brown", "Southwestern Asia", "2000-06-23");
    }
}