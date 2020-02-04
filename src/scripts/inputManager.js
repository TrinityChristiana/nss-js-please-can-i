const inputManager = {
    // Get text box info (Child Plea Input: id="plea-input")
    getTextBoxInput(){
        return document.getElementById("plea-input").value.toLowerCase();
    },
    // Get dropdown number (<input id="repeat-select")
    getDropInput(){
        return document.getElementById("repeat-select").value.toLowerCase();
    }
};

export default inputManager;