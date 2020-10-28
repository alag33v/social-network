import React, {useEffect, useState} from 'react'

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
    <div>
      {editMode
        ? <input type="text" onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus/>
        : <p onDoubleClick={activateEditMode}>{props.status || '---'}</p>}
    </div>
  )
}

export default PersonStatusWithHooks