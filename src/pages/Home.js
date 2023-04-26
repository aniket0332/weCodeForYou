import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from '../firebase';
import AddToDo from "../components/AddToDo";
import ToDo from "../components/ToDo";
import { auth } from '../firebase';
import Header from './../components/Header';
const Home = () => {
 
  const { loading, currentUser } = useSelector((state) => state.user);
  
  const user = auth.currentUser;
  var token ="";
  if(user==null)
  {token="default"}
  else{ token =user.email;}

  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const q = query(collection(db,token));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);


  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, token, todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, token, id));
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }

  }, [currentUser, navigate]);

  return (loading ? <CircularProgress />
    :
    <div style={{backgroundColor: "rgba(46, 196, 30, 0.08)", paddingBottom: "1%"}}>
      <Header/>
      <div>
        <AddToDo />

        <div className="todo_container">
          {todos.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
