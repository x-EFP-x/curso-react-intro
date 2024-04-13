import './ToDoCounter.css';

// const estilos = {
//   backgroundColor: 'red'
// }

function ToDoCounter({total, completed}){
    return(
      // <h1 style={{
      //   fontSize: '24px',
      //   textAlign: 'center',
      //   margin: 0,
      //   padding: '48px'
      // }}>
      <h1 className='ToDocounter'>
        Has completado  <span>{completed}</span>  de  <span> {total} </span>  ToDo's
      </h1>
    );
  }

  export {ToDoCounter};