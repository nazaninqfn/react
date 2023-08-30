import React, { Component } from 'react'
// import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHeart} from '@fortawesome/free-solid-svg-icons';


// FontAsome 4.7////////////////this not working just training
const Like = (props) => {

    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";

    return (
        <>
            {/* <FontAwesomeIcon icon={faHeart}/> */}
            <i
                onClick={props.onLikeToggle}
                style={{ cursor: "pointer" }}
                className={classes} aria-hidden="true"
            />
        </>

    );
};

export default Like;


