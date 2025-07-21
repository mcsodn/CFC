import { useReducer, useState } from 'react';

const initialTasks = [
  { id: 0, text: 'Learn HTML+CSS' },
  { id: 1, text: 'Learn JS' },
  { id: 2, text: 'Learn React' }
];
let nextId = 3;

function taskReducer(tasks,action) {
   switch (action.type) {
    case 'added':
      return [...tasks, {
        id: action.id,
        text: action.text
      }];
    case 'deleted':
      return tasks.filter(task => task.id !== action.id)

    default:{
      throw Error('Unknown action: ' + action.type);
    }
   }
}

const TodoList = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [inputTaskText, setInputTaskText] = useState('')
  
  const addTask = (text) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    });
  }

  const deleteTask = (taskId) => {
    dispatch ({
      type: 'deleted',
      id: taskId
    });
  }

  const checkLength = (e) => {
    setInputTaskText(e.target.value.length <= 20 ? e.target.value : e.target.value.slice(0,20));
  }
  
  return (
    <div>
      <h1>ToDo list</h1>
      <div>
        <input type="text" name="add task" id="add_task" value={inputTaskText} onChange={(e) => checkLength(e)} />
        <input type="button" value="Add task" onClick={() => {addTask(inputTaskText)}} />
      </div>
      <div>
        <ul>
          {tasks.map(task => {
            return <li key={task.id}>
              {task.text+' '}
              <input type="button" value="Delete" onClick={() => deleteTask(task.id)}/>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;