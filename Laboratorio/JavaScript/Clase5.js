/*Agregar 10 onjetos personas con diferentes datos.

1)Filtrado por Nombre(Coincidencia)(Solicitar al usuario el nombre a buscar)
2)Mostrar el promedio de las edades
*/

const prompt=require("prompt-sync")({sigint:true});

let palabra = prompt("Ingrese el criterio a buscar")
let Arraypersonas = []
const personas = (nombre,lastname,edad,direccion,status,orientacion) => {
    let person = {
        nombre,
        lastname,
        edad,
        direccion,
        status};
    if(orientacion){
        Arraypersonas.push(person);
    }
    else{
        Arraypersonas.unshift(person);
    }}

personas("Carolina", "Briguez", 21, "MDP",true,true)
personas("Camila", "Zarlenga", 18, "MDP",true,true)
personas("Cata", "Martinez", 16, "MDP",true,true)
personas("Lucia", "Santamaria", 20, "MDP",true,true)
personas("Sofia", "Sancehz", 22, "MDP",true,true)
personas("Martina", "Sarasola", 21, "MDP",true,true)
personas("Julieta", "Gomez", 19, "MDP",true,true)
personas("Candela", "Gimenez", 25, "MDP",true,true)
personas("Sol", "Lopez", 14, "MDP",true,true)
personas("Maria", "Perez", 15, "MDP",true,true)

/* 1)*/
let DatapersonasFilter = Arraypersonas.filter((personas) =>{ 
    return personas.nombre === "Carolina"
});


console.table(DatapersonasFilter)
console.log("**************");
console.log("**************");
console.log(Arraypersonas)

/* 2) */

const promedioEdades =() =>{
    let suma = 0;
    Arraypersonas.forEach((element)=>{
        suma = suma + edad;
    });
}

promedioEdades = suma / Arraypersonas.length;
return promedioEdades