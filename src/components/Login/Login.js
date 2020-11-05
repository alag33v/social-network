import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.login__input}>{createField(Input, "email", "Email", [required])}</div>
      <div className={style.login__input}>
        {createField(Input, "password", "Password", [required], {type: "password"})}
      </div>
      <div className={style.login__checkbox}>
        {createField(Input, "rememberMe", null, null, {type: "checkbox"}, "Remember Me")}
      </div>
      {captchaUrl && <img className={style.captcha} src={captchaUrl} alt=""/>}
      <div className={style.captcha__text}>{captchaUrl && createField(Input, "captcha", "Symbols", [required])}</div>

      {error && <div className={style.formError}>{error}</div>}
      <button className={style.btnSubmit}>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div className={style.login}>
      <h2 className={style.login__title}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login)