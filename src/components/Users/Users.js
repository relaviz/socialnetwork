import * as axios from 'axios';
import React from 'react';
import s from './users.module.css';
import photoUser from '../../img/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : photoUser} alt='avatar' className={s.usersPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
                            </div>
                        </span>

                        <span>
                            <div> {u.name} </div>
                            <div> {u.status} </div>
                        </span>
                        <span>
                            <div> {"u.location.city"} </div>
                            <div> {"u.location.country"} </div>
                        </span>
                    </div>)
                }
            </div>
        )

    }
}

export default Users;