import React, {useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginInitiate } from '../redux/actions';
import { CircularProgress } from "@mui/material";

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const { email, password } = state;
    
    const { currentUser, loading } = useSelector((state) => state.user);

    const navigate = useNavigate();
 
   useEffect(()=>{
     if(currentUser){
       navigate("/");
     }
 
   }, [currentUser, navigate]);
 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!email || !password) {
        return;
      }
      dispatch(loginInitiate(email, password));
      setState({email: "", password: ""});
    };

    const handleChange = (e) => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    return (loading? <div style={{marginTop: "10rem"}}><CircularProgress/></div>
    :
    <div style={{marginTop:"0%", padding: "3%" }}>
      <div className='card' style={{boxShadow:'1px 2px 9px #F4AAB9', maxWidth: "405px", textAlign: "center", marginLeft: "auto",
          marginRight: "auto"}}>
           
            <img
            height="210"
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            alt="loading"
          />
      <div id="form">
        <form className='form-signin' onSubmit={handleSubmit} style={{display:'flex',flexDirection: 'column', alignItems: "center"}} >
            <h1 className='h3 mb-3 font-weight-normal' style={{padding: "3%"}}>
             Sign In
            </h1>
            <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value = {email}
            required
            style={{margin: "3%",maxWidth: "355px",marginBottom: "8%"}}
            />
            <input
            type="password"
            id="inputpassword"
            className="form-control"
            placeholder='Password'
            name="password"
            onChange={handleChange}
            value={password}
            required
            style={{margin: "3%",maxWidth: "355px"}}
            />

            <button className='btn btn-secondary btn-block' type='submit' style={{margin: "3%"}}>
             SignIn
            </button>
            <hr style={{margin: "3%"}}/>
         <p> Don't have an account </p>
         <Link to="/register">
            <button style={{marginBottom: "10%"}} className='btn btn-primary btn-block' type='button' id='btn-signup'>
            <i className='fas fa-user-plus'></i> Sign up New Account
            </button>
         </Link>
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default Login
