import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './button.styles.scss';

const Buttton = ({text}) => {
    return (
        <Button>
            <Link to="/start">{text}</Link>
        </Button>
    );
}

export default Buttton;