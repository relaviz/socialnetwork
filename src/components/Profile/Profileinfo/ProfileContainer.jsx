import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {

    return (
      <Profile {...this.props}
        // двойное отрицание которое приведет значение  (псевдоистинну) в булевое значение
        // если id присутствует то в конце покажет кнопку загрузить файл 
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} 
        />
    )
  }
}
let mapStateToProsp = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  withRouter,
  connect(mapStateToProsp, { getProfile, getStatus, updateStatus, savePhoto, saveProfile })
)(ProfileContainer)