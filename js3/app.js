
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    //llamada para que haga las funciones
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    //tdd para detectar si coge bien los nombre dados a la función
    // console.log(this.name);

    // tdd funcion que hace
    // console.log(this.dataset);

    // tdd valor
    // console.log(this.value);
}

//le dicen la función que deben realizar
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));