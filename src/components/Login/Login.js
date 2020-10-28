import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", "Email", [required])}
      {createField(Input, "password", "Password", [required], {type: "password"})}
      {createField(Input, "rememberMe", null, null, {type: "checkbox"}, "Remember Me")}
      {error && <div className={style.formError}>
        {error}
      </div>}
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login)