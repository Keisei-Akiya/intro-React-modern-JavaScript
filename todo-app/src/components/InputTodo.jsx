const style = {
  border: "2px solid blue",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="add TODO" value={todoText} onChange={onChange} />
      <button onClick={onClick}>add</button>
    </div>
  );
};
