import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, toggleTask } from "./store/slices/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const isPending = useSelector((state) => state.todoReducer.isPending);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  const handleCheckBox = (id, toggle) => {
    if (!isPending) {
      dispatch(toggleTask({ id, toggle: !toggle }));
    }
  };
  return (
    <section>
      <h1>TO DO</h1>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}>
            <span>{el.title}</span>
            <input
              type="checkbox"
              checked={el.completed}
              disabled={isPending}
              onChange={() => handleCheckBox(el.id, el.completed)}
            />
          </li>
        ))}
      </ul>
      {isPending && <div className="loading">Veuillez patienter...</div>}
    </section>
  );
};

export default App;
