import './ToDoItem.css'
import { MdCheckCircle } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

function ToDoItem(props) {
  return (
    <li>
      {/* Si se recibe completed, se muestra la clase */}
      <button 
      className={`li_button ${props.completed && "li_completed"}`}
      onClick={props.onComplete}
      ><MdCheckCircle size="2em" /></button>
      <button
       className='li_button'
       onClick={props.onDelete}>
        <MdOutlineCancel size="2em" /></button>

     <p className={`${props.completed && "p--complete"}`}>{props.text}</p>
     
    </li>
  );
}

export { ToDoItem };