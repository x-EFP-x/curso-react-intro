import React from 'react';
import './App.css'
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton'
import { Header } from './Header';

const defaultToDos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso de React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Reir con el payaso', completed: true},
  {text: 'Tomar curso de manipulacion de arrays', completed: false},
  {text: 'Tomar curso de EcmaScript', completed: false},
  {text: 'Entender manipulacion de strings', completed: false}
]
//Solo los componentes empiezan en mayusculas
function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState(''); //eL ESTADO es inmutable. Se puede definir un valor inicial, en este caso es ''

  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter(
    (toDo) => toDo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeToDo = (text) => {
    const newToDos= [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = !(newToDos[toDoIndex].completed);
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);//splice pide una posicion para quitar el indice que se pida, y cuantos elementos se van a quitar
    setToDos(newToDos);
  }

  return (
    <>
    <div className='header'>
      <Header/>
    </div>
    <div className='container'>
      <div className='toDoList'>
          <ToDoCounter total={totalToDos} completed={completedToDos} />
          <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />

          <ToDoList>

            {searchedToDos.map(todo => (
              <ToDoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToDo(todo.text)}
                onDelete={() => deleteToDo(todo.text)}
              />
            ))}

          </ToDoList>
      </div>
      <div className='createToDo'>
        <CreateToDoButton />
      </div>



    </div>

    </>

  );
}

export default App;
