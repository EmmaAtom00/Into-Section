import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from './Navbar';
import Section1 from './Section1';
import './index.css'


function Intro() {
    return (
        <>
        <Navbar />
        <Section1 className = 'section'/>
        </>
    )
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Intro />);
