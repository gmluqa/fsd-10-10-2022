let caja1 = document.getElementById("1")
let caja2 = document.getElementById("2")
let caja3 = document.getElementById("3")

let interruptor = false;

interruptor = !interruptor

// call back, takes function as a param
caja1.addEventListener("click", () => {

    // what happens after click happens here
    console.log('me has pulsao')

});

//functinons + methods in lowercase

const marcarCasilla = id => {

    switch (id) {
        case '1':
            if (!interruptor) {
                caja1.innerHTML = 'x'
            } else {
                caja1.innerHTML = 'o'
            }
            break;

        case '2':
            caja2.innerHTML = "o"
            break;
        case '3':
            caja3.innerHTML = "x"
            break;
    }
}



