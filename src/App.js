import React from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Navigation from './components/Navigation/Navigation'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'
import {withSuspense} from './hoc/withSuspense'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="container">
        <HeaderContainer/>
        <div className="wrapper">
          <Navigation/>
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/login" render={() => <Login/>}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

export const SocialApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer/>
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  )
}

export default SocialApp