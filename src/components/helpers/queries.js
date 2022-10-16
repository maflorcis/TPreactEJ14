//archivo que nos siver para hacer las consultas a la api (json-server)

const URL ='http://localhost:3004/recetas';

// peticion GET que trae todos las recetas
//peticion POST, crear una receta, login / guardar
// petición DELETE, petición para borrar 
//petición PUT, pide modificar una receta


export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaRecetas = await respuesta.json()
        // console.log(listaRecetas)
        return listaRecetas;
    }catch(error){
        console.log(error);
    }
}

export const crearRecetaAPI = async(receta)=>{
    try{
        const respuesta = await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        const listaRecetas = await respuesta.json()
        // console.log(listaRecetas)
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const editarRecetaAPI = async(receta) =>{
    try{
        const respuesta = await fetch (URL, {
            method: "PUT", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        const listaRecetas = await respuesta.json();
        // console.log(listaRecetas)
        return listaRecetas
    }catch(error){
        console.log(error)
    }
}

export const borrarRecetaAPI = async(id)=>{
    try{
        const respuesta = await fetch(`${URL}/${id}`,{
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const obtenerRecetaAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+'/'+id);
        const recetaBuscado = await respuesta.json()
        // console.log(listaProdutos)
        return recetaBuscado;
    }catch(error){
        console.log(error);
    }
}

const URLusuarios = 'http://localhost:3004/usuarios';
// tipos de peticiones 
// petición GET que trae todos los usuarios o un usuario  
// petición POST, crear un usuario, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un usuario

// peticion GET que trae todos los usuarios


// petición GET que trae todos los productos
export const consultarUsuarioAPI = async() =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios);
        const listaUsuarios = await respuestaUsuarios.json();
        // console.log(listaProductos)
        return listaUsuarios
    }catch(error){
        console.log(error)
    }
}

export const creaUsuarioAPI = async(usuario) =>{
    try{
        const respuestaUsuarios = await fetch (URLusuarios, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}

export const borrarUsuarioAPI = async(id) =>{
    try{
        const respuestaUsuarios = await fetch (`${URLusuarios}/${id}`, {
            method: "DELETE", 
         
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}


export const obtenerUsuarioAPI = async(id) =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios+'/'+id);
        const usuarioBuscado = await respuestaUsuarios.json();
        // console.log(listaUsuarios)
        return usuarioBuscado
    }catch(error){
        console.log(error)
    }
}