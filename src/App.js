import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/Profileinfo/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components//login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/news' render={withSuspense(NewsContainer)} />
          <Route path='/music' render={withSuspense(Music)}/>
          <Route path='/settings' render={withSuspense(Settings)}/>
          <Route path='/users' render={withSuspense(UsersContainer)}/>
          <Route path='/login' render={withSuspense(Login)} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;