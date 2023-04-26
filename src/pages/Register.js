import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { registerInitiate } from '../redux/actions';
import { CircularProgress } from '@mui/material';

const Register = () => {

    const [state, setState] = useState({
        displayname: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    
   const { currentUser, loading } = useSelector((state) => state.user);

   const navigate = useNavigate();

  useEffect(()=>{
    if(currentUser){
      navigate("/weCodeForYou");
    }

  }, [currentUser, navigate]);

    const dispatch = useDispatch();



    const { email, password, displayName, passwordConfirm } = state;

    const handleSubmit = (e) => {
       e.preventDefault();
       if(password !== passwordConfirm) {
        alert("both passwords should be same");
        return;
       }
       dispatch(registerInitiate(email, password, displayName));
       setState({ email: "", displayName: "", password: "", passwordConfirm: ""});
      };

    const handleChange = (e) => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    return (loading ? <CircularProgress style={{marginTop: "10rem"}}/>
    :
    <div>
    <div style={{marginTop:"0%", padding: "3%" , backgroundColor: "rgba(46, 196, 30, 0.08)"}}>
      <div className='card' style={{ borderRadius: "1.5rem",boxShadow:'1px 2px 9px #F4AAB9', maxWidth: "405px", textAlign: "center", marginLeft: "auto",
          marginRight: "auto"}}>
           
            <img
            height="210"
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            alt="loading"
            style={{borderTopLeftRadius: "1.5rem",borderTopRightRadius: "1.5rem"}}
          />
      <div id="register-form">
        <form className='form-signin' onSubmit={handleSubmit} style={{display:'flex',flexDirection: 'column', alignItems: "center"}}>
            <h1 className='h3 mb-3 font-weight-normal' style={{textAlign: "center", padding: "3%", paddingBottom: "0%"}}>
             Sign Up
            </h1>
            <input
            type="text"
            id="displayname"
            className="form-control"
            placeholder="Full name"
            name="displayName"
            onChange={handleChange}
            value = {displayName}
            required
            style={{margin: "3%",maxWidth: "355px"}}
            />
            <input
            type="email"
            id="userEmail"
            className="form-control"
            placeholder='Email Address'
            name="email"
            onChange={handleChange}
            value = {email}
            required
            style={{margin: "3%",maxWidth: "355px"}}
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
            <input
            type="password"
            id="confirmpassword"
            className="form-control"
            placeholder="ConfirmPassword"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
            style={{margin: "3%",maxWidth: "355px"}}
            />

            <button className='btn btn-secondary btn-block' type='submit'>
             SignUp
            </button>
            <hr />
            <p> Already have an account </p>
         <Link to="/weCodeForYou/login" style={{padding: "3%"}}>
            Login
         </Link>
        </form>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Register
