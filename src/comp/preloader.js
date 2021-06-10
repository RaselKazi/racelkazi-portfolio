import React from 'react';

const preloader = (props) => {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;

};

export default preloader;