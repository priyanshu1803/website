import React from 'react';
import './index.css';
import Common from './Common';

const About=()=>{
    return (
        <>
            <Common 
            name="Welcome to About Page "
            imgsrc=" https://cdn-media-1.freecodecamp.org/images/1*hOT8TIpiXVDCK02sQkvhDQ.jpeg" id="pic" 
            visit="/contact" 
            btname="Contact now" />
         </>
    );
};
export {About};