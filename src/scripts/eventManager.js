import DOMManager from "./DOMManager.js";

const eventManager = {
    // Submit Button event listener (button id="submit-plea")
    submitPleaEvent() {
        document.getElementById("submit-plea").addEventListener("click", () => DOMManager.displayPleas(false));
    },
    randomNumber() {
        document.getElementById("random-number").addEventListener("click", () => DOMManager.displayPleas(true));
    },
    numberArrowEvent() {
        const numSel = document.getElementById("repeat-select");
        const upArrow = this.getArrow("up-arrow");
        const downArrow = this.getArrow("down-arrow");

        upArrow.addEventListener("click", () => {
                const numSelVal = document.getElementById("repeat-select").value;

                if(numSelVal > 98){
                    numSel.value++;
                    upArrow.classList.add("disabled");
                }else if(numSelVal < 100){
                    numSel.value++;
                    downArrow.classList.remove("disabled");
                }
            });

            downArrow.addEventListener("click", () => {
                const numSelVal = document.getElementById("repeat-select").value;

                if (numSelVal < 3 && numSelVal != 3){
                    numSel.value--;
                    downArrow.classList.add("disabled");
                }else if(numSelVal > 1){
                    numSel.value--;
                    upArrow.classList.remove("disabled");
                }  
            });
    },
    getArrow(id) {
        return document.getElementById(`${id}`);
    }
};

export default eventManager;