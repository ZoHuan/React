import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  // 从localStorage加载数据
  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("加载待办事项数据失败:", error);
      }
    }
  }, []);

  // 保存数据到localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() !== "") {
      setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, text: editText.trim() } : todo)));
      setEditingId(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const getFilteredTodos = () => {
    if (filter === "incomplete") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  const getFilteredCount = () => {
    if (filter === "incomplete") {
      return todos.filter((todo) => !todo.completed).length;
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed).length;
    }
    return todos.length;
  };

  const getFilterName = () => {
    if (filter === "incomplete") return "未完成";
    if (filter === "completed") return "已完成";
    return "全部";
  };

  const filteredTodos = getFilteredTodos();
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div className={styles["todo-app"]}>
      <div className={styles["todo-list"]}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <i className={`${styles.icon} fas fa-check-circle`}></i>TodoList
            <span className={styles.decoration}></span>
          </h1>
          <p className={styles.description}>简单高效的任务管理工具</p>
        </header>

        <main className={styles.main}>
          <div className={styles["input-container"]}>
            <input type='text' value={inputValue} className={styles["input-field"]} placeholder='添加新的待办事项...' onChange={handleInputChange} />
            <button className={styles["add-button"]} onClick={addTodo}>
              <i className={`${styles["button-icon"]} fas fa-plus`}></i>添加
            </button>
          </div>

          {filteredTodos.length > 0 ? (
            <div className={styles["list-container"]}>
              {filteredTodos.map((todo) => (
                <div key={todo.id} className={`${styles["todo-item"]} ${todo.completed ? styles.completed : ""}`}>
                  <div className={styles["item-content"]}>
                    <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} className={styles.checkbox} />
                    {editingId === todo.id ? (
                      <input type='text' value={editText} onChange={handleEditTextChange} className={styles["edit-input"]} autoFocus />
                    ) : (
                      <span className={styles["item-text"]}>{todo.text}</span>
                    )}
                  </div>

                  {!todo.completed ? (
                    <div className={styles["item-actions"]}>
                      {editingId === todo.id ? (
                        <>
                          <button onClick={() => saveEdit(todo.id)} className={styles["save-button"]}>
                            <i className='fas fa-check'></i>
                          </button>
                          <button onClick={cancelEdit} className={styles["cancel-button"]}>
                            <i className='fas fa-times'></i>
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEdit(todo.id, todo.text)} className={styles["edit-button"]}>
                            <i className='fas fa-edit'></i>
                          </button>
                          <button onClick={() => deleteTodo(todo.id)} className={styles["delete-button"]}>
                            <i className='fas fa-trash-alt'></i>
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className={styles["completed-badge"]}>
                      <i className={`${styles["check-icon"]} fas fa-check-circle`}></i>已完成
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles["empty-state"]}>
              <i className={`${styles["empty-icon"]} fas fa-check-circle`}></i>
              <p className={styles["empty-text"]}>{todos.length === 0 ? "暂无待办事项，添加一个开始吧！" : `暂无${getFilterName()}的待办事项`}</p>
            </div>
          )}

          <div className={styles.divider}></div>

          <div className={styles["controls-container"]}>
            <div className={styles.counter}>
              {getFilteredCount()} 个{getFilterName()}待办事项
            </div>
            <div className={styles.filters}>
              <button className={`${styles["filter-button"]} ${filter === "all" ? styles.active : ""}`} onClick={() => handleFilterClick("all")}>
                全部
              </button>
              <button
                className={`${styles["filter-button"]} ${filter === "incomplete" ? styles.active : ""}`}
                onClick={() => handleFilterClick("incomplete")}
              >
                未完成
              </button>
              <button
                className={`${styles["filter-button"]} ${filter === "completed" ? styles.active : ""}`}
                onClick={() => handleFilterClick("completed")}
              >
                已完成
              </button>
            </div>
            <button className={styles["clear-button"]} onClick={clearCompleted} disabled={!hasCompletedTodos}>
              清除已完成
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TodoList;
