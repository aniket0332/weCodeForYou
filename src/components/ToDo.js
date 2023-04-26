import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import "../pages/css/homepage.css";
import { Box } from "@mui/material";

function ToDo({ todo, toggleComplete, handleDelete }) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newTime, setNewTime] = React.useState(todo.time);
  const [newDate, setNewDate] = React.useState(todo.date);

  const handleChange = (e) => {
    e.preventDefault();

  };
  return (
    <body>
    <div className="todo">
      <Box sx={{ boxShadow: "1px 2px 9px #F4AAB9", borderRadius: "20px" ,flexGrow: 1, margin:"10%", marginTop: "2%", marginBottom: "2%"}}>
        <input
        style={{ margin: "1%", border: "1px", fontSize: "1.5rem",textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
            <input
        style={{ backgroundColor: "#cce3d8", margin: "1%", border: "1px", fontSize: "1.5rem",textDecoration: todo.completed && "line-through" }}
        value={todo.time === "" ? newTime : todo.time}
        className="list"
        onChange={handleChange}
      />
          <input
        style={{ backgroundColor: "#cce3d8", margin: "1%", border: "1px", fontSize: "1.5rem",textDecoration: todo.completed && "line-through" }}
        value={todo.date === "" ? newDate : todo.date}
        className="list"
        onChange={handleChange}
      />
        <button
          className="button-complete"
          style={{border: "1px", backgroundColor: "#2cf22c",paddingRight: "0.3%",paddingLeft: "0.3%",borderRadius: "5px",margin: "2%",borderColor: "#f56349"}}
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button className="button-delete" 
                  style={{border: "1px", marginLeft: "3%", backgroundColor: "#f56349",borderRadius: "5px"}}
        onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>

    </Box>
    </div>
    </body>
  );
}

export default ToDo;