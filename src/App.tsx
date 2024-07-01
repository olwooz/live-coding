type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const API_ENDPOINT = 'http://localhost:3000/todos';

function App() {
  return (
    <div>
      <h1>TO-DO</h1>
      <input type='text' />
      <button>Add To-do</button>
      <ul>
        <li>
          <input type='checkbox' />
          <span>todo 1</span>
          <button>Delete</button>
        </li>
        <li>
          <input type='checkbox' />
          <span>todo 2</span>
          <button>Delete</button>
        </li>
        <li>
          <input type='checkbox' />
          <span>todo 3</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
