import "./TodoItem.css";
const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">할일</div>
      <div className="date">날짜</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
