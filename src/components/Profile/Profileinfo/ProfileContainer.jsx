import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
// import s from './Profile.module.css';
import Profile from '../Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
  
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11772;
    }
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        debugger;
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProsp = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProsp, { setUserProfile })(WithUrlDataContainerComponent);