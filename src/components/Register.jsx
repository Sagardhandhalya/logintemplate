import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './../firebase'
import { useSnackbar } from 'react-simple-snackbar'


function Register() {

    const errorOptions = {
        position: 'top-center',
        style: {
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            textAlign: 'center',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            fontWeight: '400'
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }

    const successOptions = {
        position: 'top-center',
        style: {
            backgroundColor: '#50AF51',
            color: 'white',
            border: 'none',
            textAlign: 'center',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            fontWeight: '400'
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openSnackbar] = useSnackbar(errorOptions)
    const [openSuccessSnackbar] = useSnackbar(successOptions)
    const handleSubmit = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                openSuccessSnackbar('Registration Successful you can login now !!:)')
            })
            .catch((error) => {

                console.log(error)
                openSnackbar(error.message)
            }

            )

    }

    return (
        <div className="card-container">
            <form className="card">
                <h1>Register</h1>
                <div className="field">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="btn success" onClick={handleSubmit}>Register</button>
                </div>
<Link to="/">Login...</Link>
            </form>


        </div>

    )
}

export default Register
