import './CreateToDoButton.css';
import { MdOutlineExposurePlus1 } from "react-icons/md";

function CreateToDoButton() {
    return (
        <div className='divStyle'>
            <input className='newToDo' placeholder='Escribe el nombre de tu ToDo'></input>
            <button className="button" onClick={
                (event) => {
                    console.log('le diste click');
                    console.log(event);
                    console.log(event.target);
                }
            }><MdOutlineExposurePlus1 size="2em" /></button>
            <div className='scene'>
                <div className='cube'>
                    <div className='front'>Prepara tus cosas para mañana y ajusta tu agenda.</div>
                    <div className='back'>Haz una lista de tareas y prioriza basándote en plazos.</div>
                    <div className='left'>Realiza tareas diarias de limpieza y organiza.</div>
                    <div className='right'>Haz ejercicio, planifica comidas saludables y toma suficiente agua.</div>
                    <div className='top'>Comunica con amigos/familia y planea actividades juntos.</div>
                    <div className='bottom'>Reserva tiempo para relajarte, meditar y establecer límites.</div>
                </div>
            </div>
        </div>
    );
}

export { CreateToDoButton };