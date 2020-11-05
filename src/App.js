import React from 'react'
import {HashRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom'
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
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="main">
        <HeaderContainer/>
        <div className="wave"></div>
        <div className="background">
          <div className="container">
            <div className="wrapper">
              <Navigation/>
              <div className="border">
                <Switch>
                  <Redirect exact from="/" to="/profile"/>
                  <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                  <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                  <Route path="/users" render={() => <UsersContainer/>}/>
                  <Route path="/login" render={() => <Login/>}/>
                </Switch>
              </div>
            </div>
          </div>
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
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </HashRouter>
  )
}

export default SocialApp