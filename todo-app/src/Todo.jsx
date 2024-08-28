import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState(["TODO-1", "TODO-2"]);

  const [completeTodos, setCompleteTodos] = useState(["TODO-3", "TODO-4"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="add TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incompleted TODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>done</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Completed TODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>return</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
