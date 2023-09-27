const leerJson = () =>{
    //fetcjh es la promesa, then hace referencia a la promesa resulta
    fetch("./ejemplo.json")
    .then((res)=>{
        res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}
leerJson();