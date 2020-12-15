import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import TodoContainer from '../todoContainer/todoContainer.component'
import TodoIllustration from '../todoIllustration/todoIllustration.component';
import './todoSection.styles.scss';

const TodoSection = () => (
    <div className="todo-section">
        <div className="left_todo">
            <Button id="get-started">
                <Link to="/start">Get Started</Link>
            </Button>
            <Button id="view-code">
                <Link to="/start">View Code</Link>
            </Button>
        </div>
        <div className="right_todo">
            {/* <TodoContainer /> */}
            <TodoIllustration />
        </div>
    </div>
);

export default TodoSection;