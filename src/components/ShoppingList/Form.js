import React, { useState, useEffect } from "react";

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

// GETTING ITEMS FROM LS
const getTodosFromLS = () => {
  const data = localStorage.getItem("Shopping list");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Form = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(getTodosFromLS());

  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a unique ID for every todo
    const date = new Date();
    const time = date.getTime();

    let todoObject = {
      ID: time,
      TodoValue: todoValue,
      completed: false,
    };
    setTodos([...todos, todoObject]);
    setTodoValue("");
  };
  // SAVING ITEMS TO LS
  useEffect(() => {
    localStorage.setItem("Shopping list", JSON.stringify(todos));
  }, [todos]);
  // HANDLE DELETE ITEM
  const handleDelete = (id) => {
    const filtered = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filtered);
  };
  // HANDLE CHECKBOX
  const handleCheckbox = (id) => {
    let todoArray = [];
    todos.forEach((todo) => {
      if (todo.ID === id) {
        if (todo.completed === false) {
          todo.completed = true;
        } else if (todo.completed === true) {
          todo.completed = false;
        }
      }
      todoArray.push(todo);
      setTodos(todoArray);
    });
  };
  //EDIT FORM
  const [editForm, setEditForm] = useState(false);
  const [id, setId] = useState();

  const handleEdit = (todo, index) => {
    setEditForm(true);
    setTodoValue(todo.TodoValue);
    setId(index);
  };

  // HANDLE EDIT ITEM
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // copying todos state in items variable
    let items = [...todos];
    // storing the element at a particular index in item variable
    let item = items[id];
    // manipulating the item (object) keys
    item.TodoValue = todoValue;
    item.completed = false;
    // after manipulating item, saving it at the same index in items
    items[id] = item;
    // updating todos with items
    setTodos(items);
    setEditForm(false);
    setTodoValue("");
  };
  return (
    <>
      {editForm === false && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-and-button d-flex bg-white py-3">
              <input
                className="border p-2 fs-4 rounded-start px-3"
                type="text"
                placeholder="Add an item "
                required
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
              />
              <div className="d-flex  ">
                <button
                  className="add-item px-2 fs-4 text-white border-0 fw-bolder rounded-end"
                  type="submit"
                >
                  Add item
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {editForm === true && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleEditSubmit}>
            <div className="input-and-button d-flex bg-white py-3">
              <input
                className="border p-2 fs-4 rounded-start px-3"
                type="text"
                placeholder="Edit your Item"
                required
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
              />
              <div className="d-flex">
                <button
                  className="update-item px-2 fs-4 text-white border-0 fw-bolder rounded-end"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {todos.length > 0 && (
        <>
          {todos.map((individualTodo, index) => (
            <div
              className="todo d-flex justify-content-between align-items-center pb-2 my-2 border-bottom"
              key={individualTodo.ID}
            >
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={individualTodo.completed}
                  onChange={() => handleCheckbox(individualTodo.ID)}
                />
                <span
                  className="mx-3 fs-5"
                  style={
                    individualTodo.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {individualTodo.TodoValue}
                </span>
              </div>
              <div className="edit-and-delete d-flex">
                <div
                  className="mx-2"
                  onClick={() => handleEdit(individualTodo, index)}
                >
                  <FaEdit className="icons fa-edit text-white p-2 rounded" />
                </div>
                <FaTrashAlt
                  className="icons fa-trash text-white p-2 rounded"
                  onClick={() => handleDelete(individualTodo.ID)}
                />
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end">
            <button
              className="delete-all p-2 fs-4 rounded mt-2 text-white fw-bolder border-0"
              onClick={() => setTodos([])}
            >
              Delete All
            </button>
          </div>
        </>
      )}
    </>
  );
};
