import React from 'react';
import loader from "../assets/icon/loader.svg"
const Loading = () => {
    return (
        <div className="loader-div">
            <div className="center-screen text-center">
                <img className="loading-img m-auto" src={loader} alt="loading..."/>
            </div>
        </div>
    );
};

export default Loading;