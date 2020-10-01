import React from 'react';
import s from './users.module.css';
import photoUser from '../../img/user.png'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.fon}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selctedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small !== null ? u.photos.small : photoUser} alt='avatar' className={s.usersPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "bae2b8eb-c691-4d18-80ac-e53b2760473b"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "bae2b8eb-c691-4d18-80ac-e53b2760473b"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });


                                }} >Follow</button>}
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


export default Users;