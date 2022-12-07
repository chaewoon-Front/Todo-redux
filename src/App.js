import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todos";

import "./App.css";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

const Todo = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });
  console.log(todos);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [id, setId] = useState(3);

  // const [todo, setTodo] = useState([
  //   { id: 1, title: "제목입니다", content: "내용입니다.", isDone: false },
  //   { id: 2, title: "리액트", content: "리액트를 배우자!", isDone: false },
  // ]);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    setId(id + 1);
    dispatch(
      addTodo({
        id: id,
        title: title,
        content: content,
        isDone: false,
      })
    );
  };

  return (
    <div>
      <div className="container">
        <div>My Todo list</div>
        <div>React</div>
      </div>
      <div className="header">
        <label>제목</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label>내용</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        <button className="add_btn" onClick={onSubmitHandler}>
          추가하기
        </button>
      </div>
      <div className="content">
        <h2>Working...</h2>
        <div className="working">
          {todos.map((td) =>
            td.isDone === false ? (
              <div className="working-box">
                <h2>{td.title}</h2>
                <p>{td.content}</p>
                <div style={{ display: "flex" }}>
                  <button className="working-btn1">삭제하기</button>
                  <button className="working-btn2">완료</button>
                </div>
              </div>
            ) : null
          )}
        </div>
        <h2>Done...!</h2>
        <div className="done">
          {todos.map((td) =>
            td.isDone === true ? (
              <div className="working-box">
                <h2>{td.title}</h2>
                <p>{td.content}</p>
                <div style={{ display: "flex" }}>
                  <button className="working-btn1">삭제하기</button>
                  <button className="working-btn2">취소</button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
