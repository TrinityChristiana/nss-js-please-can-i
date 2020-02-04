import eventManager from "./eventManager.js";

const validateInput = {
    checkNumber() {
        const upArrow = eventManager.getArrow("up-arrow");
        const downArrow = eventManager.getArrow("down-arrow");
        const repeatSelect = document.getElementById("repeat-select");
        console.log(repeatSelect);
        repeatSelect.addEventListener("keyup", (e) => {
            const numVal = repeatSelect.value;

            this.toggleArrowDisable(numVal, downArrow, upArrow);

            if (numVal > 100 && e.keyCode !== 46 /* keycode for delete */ && e.keyCode !== 8  /* keycode for backspace */
            ) {
                e.preventDefault();
                repeatSelect.value = 100;
            } else if (numVal < 1 && e.keyCode !== 46 /* keycode for delete */ && e.keyCode !== 8  /* keycode for backspace */){

                repeatSelect.value = 1;
            }

        });
    },
    toggleArrowDisable(numVal, downArrow, upArrow){
        if(numVal > 98){
            upArrow.classList.add("disabled");

        }else if(numVal < 100){
            downArrow.classList.remove("disabled");
        }

        if (numVal < 3 && numVal != 1){
            downArrow.classList.add("disabled");

        }else if(numVal < 100){
            upArrow.classList.remove("disabled");
        } 
    }
};

export default validateInput;