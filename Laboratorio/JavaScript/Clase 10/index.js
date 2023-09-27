//Asincronia
//callback
//promise
//async/await


let ejemplo = () =>{
    alert("hola")
}
//callback, es una funcion que recibe como argumento otra funcion
setTimeout(ejemplo,1000)

const elements = [1,2,3,4,10];

elements.forEach(index => {
    console.log(index);
});

//repetir los numeros aleatorios hasta que de 10. el usuario debe indicar cuantas repeticiones
//repeteciones es la cantidad que le llleva hacer el ciclo, y call back es la funcion
const aleatorios = (repeticiones,callbacks) => {
    let numeros = [];
    for(i=0; i<repeticiones; i++){
        const numAleatorio = Math.floor(Math.random()*repeticiones +1);
        //almacenos los nuemeros en un vector
        numeros.push();
        if(numAleatorio === 10){
            callbacks({error:true, message:"SALIO 10"});
            return
        }
    }
    // como el primer parametro lo uso para el error, le pongo el nulo al principio
    return callbacks(null,{error:false,message:"exitoso"})
}

aleatorios = (10,(error,sucess)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(sucess)
})

//promesas
//si se cumple = resuelta  then(resolve)
// si no se cumple = rechazada  catch(reject)
//indefinida = pendiente
//finally(end)
// then(resolve,reject)

//fetch()

//await, espera que este listo y despues ejecuta la funcion

const resultados = await aleatoriosPromise(14);

// el try siempre va acompañado del catch que es el error por defecto y sino con el trow puedo agregarlo
//para traer bien el dato hay que usar bien el value
