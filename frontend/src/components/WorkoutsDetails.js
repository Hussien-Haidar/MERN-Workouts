import { useState } from 'react'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        setDeleting(true);

        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (!response.ok) {
            setDeleting(false);
            setError(json.error)
            console.log(error);
        }
        if (response.ok) {
            setDeleting(false);
            setError(null)
            console.log('workout deleted')
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (Kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            {!deleting && <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
            {deleting && <span className="material-symbols-outlined" style={{ color: 'grey', backgroundColor: 'whitesmoke' }}>delete</span>}
        </div>
    );
}

export default WorkoutDetails;