import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { useState } from 'react';



function App() {
  const [todoItems, setTodoItems] = useState([{ todo: 'Pray to god' }, { todo: 'Eat rice' }, { todo: 'Code an app' }])
  const [loading, setLoading] = useState(false);

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems]; const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") { return; }
    else { item.todo = newItem; }
    setTodoItems(newTodoItems);
  };


  const deleteTodoItem = (index) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const newTodoItems = [...todoItems]
      newTodoItems.splice(index, 1)
      setTodoItems(newTodoItems)

    }
  }

  const createTodoItem = (todo) => {
    if (window.confirm("Are you sure you want to create this entry?")) {
      setInterval(() => {
        const newTodoItems = [...todoItems, { todo }];
        setTodoItems(newTodoItems);

        setLoading(false);
      }, 4000);

    }
    setLoading(true);




  };

  return (
    <>

      <div className="App">
        <div>
          <TodoInput createTodoItem={createTodoItem} />
          <div>
            <h1>
              Entries
            </h1>
          </div>
          <ol>
            {todoItems.map((item, index) => (
              <TodoItem key={index} index={index} item={item}
                deleteTodoItem={deleteTodoItem}
                updateTodoItem={updateTodoItem} />
            ))}

          </ol>
        </div>
        {loading && <div><p>Loading...</p></div>}

      </div>

    </>

  );
}

export default App;
