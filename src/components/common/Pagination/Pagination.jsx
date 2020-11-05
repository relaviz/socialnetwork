import React from 'react';
import s from '../../Users/users.module.css';



let Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selctedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })
            }
        </div>
    )
}


export default Pagination;