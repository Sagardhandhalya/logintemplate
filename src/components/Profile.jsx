import React from 'react'

import { auth } from './../firebase'

function Profile() {

    const logout = () => {
        auth.signOut().then(() => {
            console.log('sign out success');
            localStorage.removeItem('user')
        }).catch((error) => {
            console.log(error);
        });
    }
    

    return (
        auth.currentUser ?
            <div className="card-container">
                <div className="card">

                    <h1>Profile InFormation </h1>
                    <img src={ auth.currentUser.photo} alt="photo"  />
                    <h4>Email : { auth.currentUseremail}</h4>
                    <h4>Display name : { auth.currentUser.name}</h4>
                    <button className="btn red" onClick={logout}>Logout</button>
                </div>
            </div>
            : <h1>Lodding...</h1>
    )
}

export default Profile
