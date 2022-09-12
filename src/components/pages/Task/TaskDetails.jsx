import React from 'react';
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h3>Task Details : {id}</h3>
        </div>
    );
}

export default TaskDetails;
