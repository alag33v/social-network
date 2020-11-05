import React from 'react'
import style from './FormsControls.module.css'
import {Field} from 'redux-form'

const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error

  return (
    <div className={style.container}>
      <div className={hasError ? style.error : ''}>
        {children}
      </div>
      {hasError && <div className={style.errorText}>{error}</div>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (component, name, placeholder, validators, props = {}, text = '') => {
  return (
    <div>
      <Field className={style.validate} type="text" component={component} name={name} placeholder={placeholder}
             validate={validators}{...props} />
      <span className={style.validate__text}>{text}</span>

    </div>
  )
}