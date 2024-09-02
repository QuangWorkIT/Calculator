document.addEventListener("DOMContentLoaded", function() {
    // this code is for switch mode
    // which will save the previous mode to
    // the local storage
    let darkMode = localStorage.getItem("darkmode");
    const themeSwitch = document.getElementById("theme-swtich");
    
    const enableDarkMode = () => {
        document.documentElement.classList.add("darkmode");
        localStorage.setItem("darkmode", "active");
    }

    const disableDarkMode = () => { 
        document.documentElement.classList.remove("darkmode");
        localStorage.setItem("darkmode", null);
    }

    if(darkMode === "active") enableDarkMode();
    
    themeSwitch.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkmode");
        darkMode !== "active" ? enableDarkMode() : disableDarkMode();
    })
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".button");
    const erbutton =  document.querySelector(".er");
    let currentInput = "";
    // this code is for displaying number 
    // to the screen when buttons clicked
    function updateScreen(value){
        screen.textContent = value;
        if (document.body.classList.contains("darkmode")) {
            screen.style.color = "black"; // Light text for dark mode
        }
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