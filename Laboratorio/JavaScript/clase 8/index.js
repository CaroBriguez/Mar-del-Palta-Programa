let listElement = document.querySelector(".list");
let inputList = document.getElementById("textItem");

agregarElement = () => {
    /*let list = `<li>${inputList.value}</li>`
    listElement.innerHTML = listElement.innerHTML + list;*/

    let list = document.createElement("li");
        list.textContent = inputList.value;
    listElement.appendChild(list);
    inputList.value = '';
}


//Agregar lista de elementos en un array

let listElementsArray = []

let listadoElemtnos = document.getElementById('listadoElementos');

let addElements = document.getElementById('addElements');
let updateElements = document.getElementById('updateElements');
let positionElement = 0;

let addElementsArray = (elements) => {
    listElementsArray.push(elements);

}

let mostrarElementos = () => {
    let textElement = ''; 
    listElementsArray.forEach((element,position) => {
        textElement += `<tr><td>${element}</td>
                            <td><button type= "button" onclick="deleteButton('${element}')" >Eliminar</button>
                            <button type= "button" onclick="editarButton('${element}')" >Editar</button></td>
                        </tr>`
    })
    listadoElemtnos.innerHTML = textElement;
}

let filterElement = (elementoBuscar) => {
    return listElementsArray.findIndex((element)=> {
        return element == elementoBuscar
    })
}

let addButtonList= () => {
    let listInput =  document.getElementById('listInput');
    let textInput = listInput.value;
    textInput = textInput.trim();
    if(textInput.length > 0 && filterElement(textInput) == -1){
        addElementsArray(textInput);
        listInput.value = ''
        mostrarElementos()
    }
    else{
        alert('ERROR INGRESE TEXTO...')
    }
}

let deleteButton = (position) =>{
    listElementsArray.splice(position,1);
    mostrarElementos();

}

let editarButton = (element) =>{
    let listInput =  document.getElementById('listInput');
    listInput.value = element; 
    positionElement = filterElement(element)
    showButton(2);
}

let showButton=(mostrar) => {
    if(mostrar == 1 ){
        addElements.classList.remove('oculto');
        updateElements.classList.add('oculto');
    }
    else{
        addElements.classList.add('oculto');
        updateElements.classList.remove('oculto');
    }
}

let modificarButton=() =>{
    let listInput =  document.getElementById('listInput');
    let textInput = listInput.value;
    textInput = textInput.trim();
    if(textInput.length > 0 && (filterElement(textInput) == -1 || filterElement(textInput) == positionElement)){
        listElementsArray[positionElement] = textInput;//modificar el elemento//
        listInput.value = ''
        mostrarElementos()
        showButton(1);
        listInput.focus()
    }
    else{
        alert('ERROR INGRESE TEXTO...')
    }
}