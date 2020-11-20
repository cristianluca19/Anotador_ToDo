import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import * as action from "../../actions/index";


export default function Todos({el, clase}) {
  const dispatch = useDispatch();
  let estado = ''
  if (el.status=='todo'){
    estado = 'Mover a Revisar'
  }
  if (el.status=='reviews'){
    estado = 'Mover a Completo'
  }
  function handleEdit(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title:'<h1>'+ el.title+ '</h1>',  
      html:'<h3>'+el.description+'</h3>' + '<br>'+
      '<h6> Categoria: ' + el.place + ', con un puntaje de : '+ el.point +'</h6>',
      footer:'Creado por:  ' + el.created + ' el dia: '+ el.init_date.getDate()+'/'+el.init_date.getMonth()+'/'+el.init_date.getYear(),

      showCancelButton: true,
      confirmButtonText: estado + ' <i class="fa fa-arrow-right"></i>',
      cancelButtonText: 'Eliminar',
      reverseButtons: true
    }).then((result) => {
      if(el.status==='todo'){
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Movido!',
          'Tu nota se envio a Revision.',
          'success'
        )
        dispatch(action.reviews(el))
      }
    }
      if(el.status==='reviews'){
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Movido!', 
            'Tu nota se envio a Completo.',
            'success'
          )
          dispatch(action.complete(el))
        }
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'Tu nota ha sido eliminada',
          'error'
        )
        dispatch(action.remove(el.id))
      }
    })
  }
  return (
    <div >
      <div  >
      <button type="button" className={clase} onClick={()=>handleEdit()}>
        {el.title}
      </button>
      </div>
    </div>
  );
}

