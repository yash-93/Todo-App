import React from 'react';
import TodoContainer from '../todoContainer/todoContainer.component';

import Illustration from '../../assets/todo-illustration.svg';
import './todoIllustration.styles.scss';

const TodoIllustration = () => (
    <div className="todo-illustration">
        <img src={Illustration} />
    </div>
);

export default TodoIllustration;