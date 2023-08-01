/*const num = "hola"
console.log(typeof num);*/

const prompt=require("prompt-sync")({sigint:true});

/*let num1 = prompt("Ingrese un valor:");

console.log(num1);
console.log()*/


/* Actividad Array */ 

let Arraypersonas = []


/* Funcion Flecha*/
const personas = (nombre,lastname,edad,direccion,status,orientacion) => {
    let person = {
        nombre,
        lastname,
        edad,
        direccion,
        status
    };
    if(orientacion){
        Arraypersonas.push(person);
    }
    else{
        Arraypersonas.unshift(person);
    }
}
/* Funcion*/
personas("Carolina", "Briguez", 21, "MDP",true,true) 

/*for(i=1; i <=2;i++){
    let nombre = prompt("Ingrese el Nombre");
    let lastname = prompt("Ingrese el Apellido");
    let edad = parseInt(prompt("Ingrese la edad"));
    let direccion = prompt("Ingrese la direccion");
    let status = prompt("Ingrese su Status");
    personas(nombre,lastname,edad,direccion,status,true)
    console.log("**************");
}*/
/*Filter*/ 
let DatapersonasFilter = Arraypersonas.filter((person) =>{
    return person.edad > 15;
});


console.log(DatapersonasFilter)
console.log("**************");
console.log(Arraypersonas)

/* MAP*/

let datapersonaEdad = Arraypersonas.map((element)=>{ 
    if(element.edad < 18){
        return "Menor de Edad";
    }
    else{
        return "Mayor de edad";
    }
})
/*ORDENA DE MANERA ASCENDENTE O DESCENDENTE LA EDAD, se hizo la funcion felcha en el mismo console */
console.table(Arraypersonas.sort((a,b)=> {
    return a.edad - b.edad
}))

console.table (Arraypersonas.sort((a,b)=>{
    return b.edad - a.edad
}))

/* Include = ver si esta incluido ese valor, devuelve true o false*/
Arraypersonas.includes("Carolina");