const style = {
  border: "2px solid blue",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">Completed TODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>return</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
