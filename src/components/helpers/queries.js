//archivo que ayuda a las consultas de mi api (json server)

const URL= 'http://localhost:3004/recetas';

//peticion GET que trae todos los productos
export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaRecetas = await respuesta.json()
        //console.log(listaRecetas)
    return  listaRecetas
        
}catch(error){
    console.log(error);
}
}