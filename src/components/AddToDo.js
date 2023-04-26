import React from "react";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from '@mui/material';

function AddToDo() {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const currentUser1 = auth.currentUser;
  var token = "";
  if (currentUser1 == null) { token = "default" }
  else { token = currentUser1.email; }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, token), {
        title,
        date,
        time,
        completed: false,
      });
      setTitle("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div className='container' style={{ marginTop: "3%", width: "20rem" }}>
      <div className="card" style={{backgroundColor: "#c2cfbe", padding: "5%", boxShadow: "1px 2px 9px #F4AAB9" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ margin: "3%", maxWidth: "250px" }}
          />
          <input
            className="form-control"
            type="date"
            placeholder="Task Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ margin: "3%", maxWidth: "250px" }}
          />
          <input
            className="form-control"
            type="time"
            placeholder="Set Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ margin: "3%", maxWidth: "250px" }}
          />
          <div className="btn_container">
            <button className='btn btn-secondary btn-block' type='submit' style={{ margin: "3%"}}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddToDo;