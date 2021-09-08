import React from 'react';
import { NavLink } from 'react-router-dom';
import {Sdata} from './Sdata'


const Card=(props)=>{
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" >
                <img src={props.imgsrc} class="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title" font-weight-bold>{props.title}</h5>
                    <p className="card-text">Good to see you back. I hope you are doing well?</p>
                    <NavLink to="#" className="btn btn-primary">Let's go!</NavLink>
                </div>
                </div>
            </div>        
        </>
    );
};

export {Card};