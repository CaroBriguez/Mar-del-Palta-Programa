var opciones = ['roca.png','hoja.png','tijera.png'];
//piedra,papel,tijera

const juegoInicial = (minimo, maximo) =>{
    //return Math para hacer el aleatorio. El floor redondea para abajo
    var numero = Math.floor(Math.random()* (maximo - minimo +1) + minimo);
    return numero;

}

const juegoMaquina = () =>{
    let number = juegoInicial(0,2);
    let init = document.querySelector("#init");
    //va a poner la imagen de la posicion que obtuvo
    let imagen = `<img style="width:50px" src="${opciones[number]}">`;
    //creo un div para agregar a la columna
    let createDiv = document.createElement("div");
    createDiv.classList.add("row", "bg-dark", "text-white", "p-2")
    createDiv.innerHTML=`<div class="col-4">${imagen}</div>
                        <div class="col-4"></div>
                        <div class="col-4"></div>`;

//insertar el elemento creado despues del div
    init.after(createDiv)

}