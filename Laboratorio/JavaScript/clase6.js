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

    document.getElementById("listadoPersonas").innerHTML= listPerson(dataPersona);
    mensajeAlerta("Datos guardados correctamente");
    console.table(dataPersona);
    
}

const listPerson = (dataPersona) =>{
    let list = '';
    dataPersona.forEach((person,index)=>{
        list +=`<tr>
                <td>${person.firstName} ${person.lastName}</td>
                <td>${person.birthay}</td>
                <td>${person.adress}</td>
                <td>${person.estatus}</td>
                <td><button type="button" onclick="deleteRegistroPersona(${index})">Eliminar</button></td>
                </tr>`;
    
    });
    return list;
} 

const searchInput = () =>{
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    let filterData = filterDataPersona(search);
    document.getElementById("listadoPersonas").innerHTML= listPerson(filterData);
    console.log(search)
}

const filterDataPersona = (search) => {
    return dataPersona.filter ((person)=>{
        return person.firstName.toLowerCase().includes(search)
    })
}

const deleteRegistroPersona = (position) =>{
    dataPersona.splice(position,1);
    document.getElementById("listadoPersonas").innerHTML= listPerson(dataPersona);
}

const mensajeAlerta = (title,icon='success') => {
Swal.fire({
    position: 'top-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 900})} 

// Hacer required el formulario//

//Hacer que no se repita la info//