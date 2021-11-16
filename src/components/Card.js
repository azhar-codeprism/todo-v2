function Card({ task, deleteHandler, completeHandler }) {
  return (
    <>
      <span> {task.title} </span>
      <button onClick={deleteHandler}> Del </button>
      <button onClick={completeHandler}> Done</button>
    </>
  );
}
export default Card;
