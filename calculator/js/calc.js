(function () {
    let flag = 1;
    let screen = document.querySelector("#Input");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".clear");
    let equals = document.querySelector(".equals");
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            text = button.innerText
            value = "" + screen.value
            console.log("button pressed", button.value, text);


            switch (text) {
                case 'C':
                    screen.value = ""; break;
                case 'Del':
                    screen.value = value.slice(0, value.length - 1); break;
                case '=':
                    screen.value = eval(value); break;




                default:
                    screen.value = screen.value + button.value;

            }


        })

    })

    let mode = document.querySelector(".Mode");
    mode.addEventListener('click', function () {

        if (flag != 0) {
            mode.innerHTML = "<h1>&#127770</h1>";
            flag=0;
        }
        else
        {flag=1;
            mode.innerHTML = "<h1>&#127774</h1>";
        }
        // mode.classList.toggle('nightlow');

        document.querySelector(".calculator").classList.toggle('nightlow');
        document.querySelector(".text").classList.toggle('night');
        document.querySelector(".container").classList.toggle('nightlow');
        document.querySelector(".equals").classList.toggle('night');
        document.querySelector(".style").classList.toggle('night');
        document.querySelector(".style1").classList.toggle('night');
        document.querySelector(".wrap").classList.toggle('nightlight');
        document.querySelector(".one").classList.toggle('nightlight');
        document.querySelector(".two").classList.toggle('nightlight');
        document.querySelector(".three").classList.toggle('nightlight');
    })



})();

