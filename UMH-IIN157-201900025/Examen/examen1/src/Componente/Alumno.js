import react from "react";

export default function Nota (props) {
    console.log(props); 

    

    return (
      <div> 
        <h2> Notas</h2>
        <table class="table table-hover">
        <tbody>
        <tr><td>Identidad</td><td>{props.identidad}</td></tr>
        <tr><td>Nombre</td> <td>{props.nombre}</td></tr>
        <tr><td>Nacimiento</td> <td>{props.nacimiento}</td></tr>
        <tr><td>Nota</td><td>{props.nota}</td></tr>
            
        </tbody>
        </table>
      </div>
    )
}