let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnVal = e.target.textContent;

        if (btnVal === '=') {
            try {
                string = math.evaluate(string).toString(); // use math.evaluate here
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = '';
            }
        } else if (btnVal === 'AC') {
            string = '';
            input.value = string;
        } else if (btnVal === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btnVal;
            input.value = string;
        }
    });
});
