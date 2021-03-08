import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../context/auth_context'
import {auth , gprovider} from './../firebase'
import { useSnackbar } from 'react-simple-snackbar'

function Login() {
    const options = {
        position: 'top-center',
        style: {
          backgroundColor: '#ED4234',
          color:'white',
          border: 'none',
          textAlign: 'center',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
          fontWeight :'400'
        },
        closeStyle: {
          color: 'white',
          fontSize: '16px',
        },
      }
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openSnackbar] = useSnackbar(options)

    const googleSignIn =(e)=>{

        auth.signInWithPopup(gprovider).then(res => {
            console.log(res);
        })
        .catch(
            error =>  openSnackbar(error.message ,[ 1000])
        )
    }

    const handleSubmit =(e) =>{
            e.preventDefault()
            auth.signInWithEmailAndPassword(email , password)
            .then(res =>{
              console.log(res);
               
            })
            .catch((error) =>{
                openSnackbar(error.message)
            } )

            }
    return (

    
        <div className="card-container">
            <form className="card" >
                
                <button className="btn" type="button" onClick={googleSignIn}>SignIn With Google</button>
            <div className="field">
                <label  htmlFor="email">Email : </label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button className="btn success" type="submit" onClick={handleSubmit}>Login</button>
            </div>

           <span> Do not have Account?  <Link to="/register"> create a account </Link> </span>

            </form>
        </div>
    )
}

export default Login
