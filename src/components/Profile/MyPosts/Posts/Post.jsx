import s from './Post.module.css'
// eslint-disable-next-line no-unused-vars
import React from "react";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhzzwkRPld0j9YjlFLsZznGWOtDwb6Xe1JQ&usqp=CAU"
                alt=""/>

            {/* eslint-disable-next-line react/prop-types */}
            {props.message}
        </div>
    )
}

export default Post