import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={style.textarea} component={Textarea} name={"newPostText"} placeholder='Hello'
             validate={[required, maxLength50]}/>
      <button className={style.btn}>Add</button>
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

  const onAddPost = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <div className={style.posts}>
      <h3 className={style.posts__title}>My Posts</h3>
      {postsElements}
      <AddNewPostReduxForm onSubmit={onAddPost}/>
    </div>
  )
});

export default MyPosts