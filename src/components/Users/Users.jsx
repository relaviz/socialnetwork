import React from 'react';
import s from './users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {

    return (
        <div className={s.fon}>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {props.users.map(u => <User key={u.id} user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow} />)}

        </div>
    )
}


export default Users;