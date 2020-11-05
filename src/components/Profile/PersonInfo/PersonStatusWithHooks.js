import React, {useEffect, useState} from 'react'
import style from './PersonInfo.module.css'

const PersonStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() =>{
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={style.status}>
      {editMode
        ? <input type="text" onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus/>
        : <div>
          <span>Status: </span>
          <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
        </div>}
    </div>
  )
}

export default PersonStatusWithHooks