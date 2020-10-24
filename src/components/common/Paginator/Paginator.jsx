import React from "react";
import styles from "./paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage}
                         onClick={() => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>

}

export default Paginator;