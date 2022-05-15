import React, { useState } from "react";

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const Form = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoObject = {
      TodoValue: todoValue,
    };
    setTodos([...todos, todoObject]);
    setTodoValue("");
  };
  return (
    <>
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
      {todos.length > 0 && (
        <>
          {todos.map((individualTodo, index) => (
            <div
              className="todo d-flex justify-content-between align-items-center pb-2 my-2 border-bottom"
              key={index}
            >
              <div>
                <input className="checkbox" type="checkbox" />
                <span className="mx-3 fs-5">{individualTodo.TodoValue}</span>
              </div>
              <div className="edit-and-delete d-flex">
                <div className="mx-2" onClick={() => ""}>
                  <FaEdit className="icons fa-edit text-white p-2 rounded" />
                </div>
                <div onClick={() => ""}>
                  <FaTrashAlt className="icons fa-trash text-white p-2 rounded" />
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end">
            <button className="delete-all p-2 fs-4 rounded mt-2 text-white fw-bolder border-0">
              Delete All
            </button>
          </div>
        </>
      )}
    </>
  );
};
