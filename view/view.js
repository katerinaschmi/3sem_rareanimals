import Animal from "../utils/animalClass.js"

export default class View {
    constructor(controller) {
        const self = this;
        const animalSearchForm = document.getElementById("animalSearchForm");
        const speciesField = document.getElementById("speciesField");
        const panelText = document.getElementById("panelText")
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const gender = document.getElementById("gender");
        const color = document.getElementById("color");
        const habitat = document.getElementById("habitat");
        const observationDate = document.getElementById("observationDate");
        const showAllAnimalsButton = document.getElementById("showAllAnimalsButton");
        const animalDialogForm = document.getElementById("animalDialogForm");
        const addAnimalButton = document.getElementById("addAnimalButton");
        const animalDialog = document.getElementById("animalDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSpeciesField = document.getElementById("hiddenSpeciesField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllAnimalsButton.onclick = function () {
            self.controller.showAllAnimals ();
        }

        animalSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.speciesSearch(speciesField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalAnimal = new Animal ("", gender.value, color.value, habitat.value, observationDate.value);
            self.controller.search(optimalAnimal);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim")
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim")
        }

        //Dialog eventhandler
        addAnimalButton.onclick = function () {
            animalDialogForm.reset();
            animalDialog.showModal();
        }

        cancelButton.onclick = function () {
            animalDialog.close();
        }

        animalDialogForm.onsubmit = function () {
            self.controller.newAnimal({
                speciesName: document.getElementById("speciesfield").value,
                gender: document.getElementById("genderfield").value,
                color: document.getElementById("colorfield").value,
                habitat: document.getElementById("habitatfield").value,
                observationDate: document.getElementById("observationfield").value,
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenSpeciesField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteAnimal(hiddenSpeciesField.value);
            self.controller.showAllAnimals();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function (){
            snackbar.className=snackbar.className.replace("show","");
        }, 3000);
    }
}