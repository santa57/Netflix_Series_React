import React from 'react';
import { NavLink } from "react-router-dom";



function Cards(props) {
    return (
        <>
            <div className="card" style={{ width: "18rem", margin: "20px 0px", height: "400px" }}>
                <img src={props.imgsrc} className="card-img-top h-75" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <NavLink exact to={`//${props.link}`} target="_blank">
                        <button className='btn btn-primary'>Watch More</button>
                    </NavLink>
                </div>
            </div>
        </>


    );
}

export default Cards;
