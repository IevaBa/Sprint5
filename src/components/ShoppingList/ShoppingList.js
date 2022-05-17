import React from "react";
import { Form } from "./Form";

const ShoppingList = () => {
  return (
    <div className="wrapper">
      <h2 className="text-center text-secondary p-4 fw-bolder">
        Grocery Shopping List
      </h2>
      <div className="form-and-todo-box d-flex flex-column px-4 py-3 bg-white m-auto w-50 mb-5">
        <Form />
      </div>
    </div>
  );
};

export default ShoppingList;
