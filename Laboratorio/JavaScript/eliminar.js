let dataPersona = [] ;

const addDataPersona = (firstName,lastName,birthay,adress,estatus,dni,orientatio=true) => {

    let person = {
        firstName,
        lastName,
        birthay,
        adress,
        estatus,
        dni,
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
    let dni = document.getElementById("dni")} 

    if(findDni(dni.value) == -1){
        addDataPersona(firstName.value,lastName.value,birthay.value,adress.value,estatus.value,dni.value);
        document.getElementById("formPersona").reset();
        dni.focus();
        document.getElementById("listadoPersonas").innerHTML= listPerson(dataPersona);
        mensajeAlerta("Datos guardados correctamente");
        console.table(dataPersona);
    }

    else{
        dni.focus();
        mensajeAlerta("ERROR, ESE DNI YA SE ENCUENTRA REGISTRADO");
    }

const listPerson = (dataPersona) =>{
    let list = '';
    dataPersona.forEach((person)=>{
        list +=`<tr>
                <td>${person.firstName} ${person.lastName}</td>
                <td>${person.birthay}</td>
                <td>${person.adress}</td>
                <td>${person.estatus}</td>
                <td>${person.dni}</td>
                </tr>`;
    
    });
    return list;
} 

const findDni = (dni)=>{
    return dataPersona.findIndex( (person)=>{
        return person.dni == parseInt(dni)
    })
}
const mensajeAlerta = (title,icon='success') => {
Swal.fire({
    position: 'top-center',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 900})} 











    addDataPersona(firstName.value,lastName.value,birthay.value,adress.value,estatus.value);
    
    firstName.value= "";
    lastName.value= "";
    birthay.value= "";
    adress.value= "";
    estatus.value= "";

    document.getElementById("listadoPersonas").innerHTML= listPerson(dataPersona);;
    mensajeAlerta("Datos guardados correctamente");
    console.table(dataPersona);
    