import React from 'react'
import './index.css'
import { getPortPromise } from 'portfinder';

const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Backdrop;