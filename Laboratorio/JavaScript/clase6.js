let dataPersona = [] ;

const addDataPersona = (firstName,lastName,birthay,adress,estatus,orientatio=true) => {

    let person = {
        firstName,
        lastName,
        birthay,
        adress,
        estatus
    };
    if (orientatio){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}

const addFormPersona = () =>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let birthay = document.getElementById("birthay")
    let adress = document.getElementById("adress")
    let estatus = document.getElementById("estatus")
    
    addDataPersona(firstName.value,lastName.value,birthay.value,adress.value,estatus.value);
    
    firstName.value= "";
    lastName.value= "";
    birthay.value= "";
    adress.value= "";
    estatus.value= "";

    console.table(dataPersona);
    
}

// Hacer required el formulario//

//Hacer que no se repita la info//