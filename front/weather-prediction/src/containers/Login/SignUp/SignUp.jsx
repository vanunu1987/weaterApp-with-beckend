import React from 'react'

const signUp = props => (
    <form className={props.classes.loginForm} onSubmit={(ev)=>props.submitSignUp(ev)}>
                <header>
                    <h1>Sign Up</h1>
                    <div>
                        <input className={props.classes.carId} type="text" placeholder="User Name"
                        onChange={(event) => props.inputChange(event.target.value,'name')}/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <input className={props.classes.carPass} type="password" placeholder="password"
                        onChange={(event) => props.inputChange(event.target.value,'pass')}/>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div>
                        <input className={props.classes.carId} type="tel" placeholder="Phone Number"
                        onChange={(event) => props.inputChange(event.target.value,'phone')}/>
                        <i className="fas fa-phone"></i>
                    </div>
                </header>
            <button type="submit">Sign up</button>
    </form>
)

export default signUp