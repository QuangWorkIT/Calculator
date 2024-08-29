document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".button");
    const erbutton =  document.querySelector(".er");
    let currentInput = "";

    function updateScreen(value){
        screen.textContent = value;
    }

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;

            if(buttonText === "="){
                try {
                    currentInput = math.evaluate(currentInput).toString();
                    if(currentInput === "Infinity" || currentInput === "-Infinity" ){
                        console.log("Error");
                        currentInput = "Hello World";
                    }
                    updateScreen(currentInput);
                } catch (error) {
                    console.log("Error");
                    currentInput = "";
                    updateScreen(currentInput);
                }
            }else{
                currentInput += buttonText;
                updateScreen(currentInput);
            }
        });
    });

    erbutton.addEventListener("click", function() {
        currentInput = "";
        updateScreen(currentInput);
    });
});