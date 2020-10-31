import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={style.textarea} component={Textarea} name={"newPostText"} placeholder='Hello'
             validate={[required, maxLength10]}/>
      <button className={`${style.btn} ${style.first}`}>Add</button>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = React.memo(props => {
  const postsElements = props.posts.map(post =>
    <Post message={post.message} likes={post.likes} key={post.id}/>
  )

  const newPostElement = React.createRef()

  const onAddPost = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <div>
      <p className={style.text}>My Posts</p>
      {postsElements}
      <AddNewPostReduxForm onSubmit={onAddPost}/>
    </div>
  )
});

export default MyPosts