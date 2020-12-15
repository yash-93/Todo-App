import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './progressCircle.styles.scss';

const ProgressCircle = () => {
    const [percentage,setPercentage] = useState(90);

    return (
        <div>
            <CircularProgressbar
                value={90}
                text={`${percentage}%`}
                strokeWidth={15}
                styles={buildStyles({
                    textColor: "white",
                    pathColor: "white",
                    trailColor: "blue"
                  })}
            />
        </div>
    );
}

export default ProgressCircle;