import inputManager from "./inputManager.js";
import validateInput from "./validateInput.js"
import eventManager from "./eventManager.js";

const DOMManager = {
    // Display text on dom as many times as the dropdown says (<div id="display-plea")
    displayPleas(isRandom) {
        let dropNum = inputManager.getDropInput();
        const pleaStr = inputManager.getTextBoxInput();
        let pleaContainer = document.getElementById("display-plea");
        pleaContainer.innerHTML = "";

        if (/\S/.test(pleaStr)) {
            if (isRandom) {
                dropNum = Math.floor(Math.random() * 100) + 1;
                const numSel = document.getElementById("repeat-select");
                numSel.value = dropNum;
                const upArrow = eventManager.getArrow("up-arrow");
                const downArrow = eventManager.getArrow("down-arrow");

                if (dropNum == 1){
                    downArrow.classList.add("disabled");
                    
                } else if (dropNum == 100){
                    console.log(dropNum);
                    upArrow.classList.add("disabled");

                }else if (dropNum != 1 || dropNum != 100) {
                    downArrow.classList.remove("disabled");
                    upArrow.classList.remove("disabled");
                } 

            }

            // Display random pleas in upper case.
            for (let i = 1; i <= dropNum; i++) {
                // Randomly picks from number 0 and 1
                const random = Math.floor(Math.random() * 2);
                if (random == 0) {
                    pleaContainer.innerHTML += `<div class="plea-text"> ${pleaStr.toUpperCase()}</div>`;
                } else {
                    pleaContainer.innerHTML += `<div class="plea-text"> ${pleaStr}</div>`;
                }
            }
        } else {
            $('.ui.modal')
                .modal({
                    blurring: true
                })
                .modal('show');
        }
        // If value == random, choose random number between 1 and 100 for the number of repetitions.


    }
};

export default DOMManager;