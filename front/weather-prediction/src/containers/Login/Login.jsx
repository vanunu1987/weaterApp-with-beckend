import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import * as userAction from '../../store/action/users'
import classes from './Login.module.scss'
import userService from '../../services/userService'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import BackDrop from '../../components/UI/Backdrop/Backdrop'

class login extends Component {
    state = { 
        login : false,
        show: false,
        credentials: {
            name: null,
            pass: null,
            phone: null
        },
        errorText: null
    }
    
    handleLoginSignUp = () => {
        this.setState(prevState => {
            let login = !prevState.login
            return {login}
        })
    }

    handleInputs = (ev,val)=>{
        this.setState(prevState => {
            let credentials = {...prevState.credentials}
            credentials[val] =  ev
            return {credentials}

        })
     }

    handleSubmitLogin = async (ev) => {
        ev.preventDefault()
        let res = await this.props.onLoginUser(this.state.credentials)
        console.log(res);
        
        if (res){
            console.log('res',res);
            this.props.history.push("/");
        } else {
            this.props.history.push("/login");
        }
    }

    handleSubmitSignUp  = async (ev) => {
        ev.preventDefault()
        let res = await this.props.onSignUpUser(this.state.credentials)
        console.log(res);
        
        if (res){
            console.log('res',res);
            
            this.props.history.push("/");
        } else {
            this.props.history.push("/login");
        }
    }
    handleBackdropClicked = () =>{
        console.log('cliked....');
        
        this.props.history.push("/");
    }

    render() { 
        let login = (  !this.state.login &&

        <SignIn classes={classes} 
                submitLogin={this.handleSubmitLogin} 
                inputChange={this.handleInputs}/>
        )

        let signup = ( this.state.login &&

        <SignUp classes={classes} 
                submitSignUp={this.handleSubmitSignUp} 
                inputChange={this.handleInputs}/>

        ) 
        let errMsg = this.state.errorText &&<div className={classes['error-container']}> <p className={classes['error']}>{this.state.errorText}</p>  </div> 
        let msg = (this.state.login) ? 
                <span>Already have an account?&nbsp;</span> :
                <span>Don't have an account?&nbsp;</span>;
        let loginSignUp = <span className={classes.signupLink}
                                onClick={this.handleLoginSignUp}>
                                {this.state.login ? ' Login' : ' Sign up'} 
                         </span>
        let body = this.props.show && 
        <div className={classes.loginContainer}>
            <BackDrop clicked={this.handleBackdropClicked}  show={this.props.show} />
            <section className={classes.formContainer}>
                {login}
                {signup}
                {msg}
                {loginSignUp}
            </section>
        </div>


        return <>  {body} </>

    }

}
const mapStateToProps = state => {
    return {
        userName: state.user.userName,
        isLogedIn: state.user.isLogedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUpUser: (userCardentials)=> dispatch(userAction.userSignUp(userCardentials)),
        onLoginUser: (userCardentials)=> dispatch(userAction.userLogin(userCardentials))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(login));