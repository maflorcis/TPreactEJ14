import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultarAPI } from "../../helpers/queries";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar la receta",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //realizar la consulta a la api
        borrarRecetaAPI(receta.id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actualizar el state recetas o la tabla
            consultarAPI().then((respuesta)=>{
              console.log(respuesta)
              setRecetas(respuesta)
            })

            Swal.fire(
              "Receta eliminada",
              "La receta fue correctamente borrado",
              "success"
            );
          }else{
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operacion mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      {/* <td>{props.receta.id}</td> */}
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>${receta.duracion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${receta.id}`}>Editar</Link>
        <Button variant="danger" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;