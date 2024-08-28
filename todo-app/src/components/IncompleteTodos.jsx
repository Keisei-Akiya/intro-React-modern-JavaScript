const style = {
  border: "2px solid blue",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">Incompleted TODO</p>
      <ul>
        {todos.map((todo, index) => (
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
  );
};
