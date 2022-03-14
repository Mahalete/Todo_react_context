import React, { useState } from "react";
import "./Filter.module.css";
import { NotesContext } from "../store/todoStore";
const Filter = () => {
  const [hideDone, setHideDone] = useState(false);
  return (
    <div className="filter">
      <button onClick={() => setHideDone(!hideDone)}>
        {hideDone ? "Show All" : "Hide Done"}
      </button>
    </div>
  );
};

export default Filter;
