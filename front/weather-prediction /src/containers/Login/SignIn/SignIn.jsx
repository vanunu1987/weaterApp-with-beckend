import React from 'react'

const signIn = props => (
    <form className={props.classes.loginForm} onSubmit={(ev) => props.submitLogin(ev)}>
            <header>
                <h1>Login</h1>
                <div>
                    <input className={props.classes.carId} type="text" placeholder="User Name" 
                    onChange={(event)=>props.inputChange(event.target.value,'name')}/>
                    <i className="fas fa-user"></i>
                    </div>
                    <div>
                    <input className={props.classes.carPass} type="password" placeholder="Password"
                    onChange={(event)=>props.inputChange(event.target.value,'pass')}/>
                    <i className="fas fa-lock"></i>
                    </div>
                </header>
            <button type="submit">Log in </button>
    </form>
)

export default signIn