let buttons = document.getElementsByTagName("button");
let screenVal = ""
let calVal = ""
for (btn of buttons) {
    btn.addEventListener("click", (e) => {
        let screen = document.getElementById("screen");
        function fact(num) {
            if (num == 1) {
                return 1;
            }
            else {
                return num * fact(num - 1)
            }

        }


        //for Inverse trigonometric functions
        if (e.target.innerText == "sin-1") {
            screenVal += "asin(";
            calVal += "Math.asin(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cos-1") {
            screenVal += "acos(";
            calVal += "Math.acos(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "tan-1") {
            screenVal += "atan(";
            calVal += "Math.atan(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "sec-1") {
            screenVal += "asec(";
            calVal += "Math.asec(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cosec-1") {
            screenVal += "acosec(";
            calVal += "acosec(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cot-1") {
            screenVal += "acot(";
            calVal += "Math.acot(";
            screen.value = screenVal

        }

        //For trigonometric Functions
        else if (e.target.innerText == "sin") {
            screenVal += "sin(";
            calVal += "Math.sin(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "ln") {
            screenVal += "ln(";
            calVal += "Math.log(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "log") {
            screenVal += "log10(";
            calVal += "Math.log10(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cos") {
            screenVal += "cos(";
            calVal += "Math.cos(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "tan") {
            screenVal += "tan(";
            calVal += "Math.tan(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "sec") {
            screenVal += "sec(";
            calVal += "Math.sec(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cosec") {
            screenVal += "cosec(";
            calVal += "Math.cosec(";
            screen.value = screenVal

        }
        else if (e.target.innerText == "cot") {
            screenVal += "cot(";
            calVal += "Math.acot(";
            screen.value = screenVal

        }
        //For some operators and PI
        else if (e.target.innerText == "π") {
            screenVal += "π";
            calVal += "Math.PI";
            screen.value = screenVal

        }
        else if (e.target.innerText == "X") {
            screenVal += "*";
            calVal += "*";
            screen.value = screenVal

        }
        else if (e.target.innerText == "÷") {
            screenVal += "/";
            calVal += "/";
            screen.value = screenVal

        }
        else if (e.target.innerText == "√") {
            screenVal += "sqrt(";
            calVal += "Math.sqrt(";
            screen.value = screenVal

        }

        else if (e.target.innerText == "C") {
            screenVal = ""
            calVal = ""
            screen.value = screenVal

        }
        else if (e.target.innerText == "x!") {
            calVal = screenVal
            screenVal += "!"
            screen.value = screenVal

        }
        else if (e.target.innerText == "Answer") {
            let a = 0;
            let answer = 0;
            if (screenVal.includes("!")) {
                answer = fact(calVal);
            }
            else {
                answer = eval(calVal);
            }
            screen.value = answer.toFixed(3);
            screenVal = ""
            calVal = ""

        }
        else {
            screenVal += e.target.innerText;
            calVal += e.target.innerText;
            screen.value = screenVal
        }

    })
}
