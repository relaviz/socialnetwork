import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/Profileinfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

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
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <NewsContainer />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
