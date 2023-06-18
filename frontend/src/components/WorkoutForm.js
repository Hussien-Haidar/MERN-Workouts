import { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [posting, setPosting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPosting(true);
        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setPosting(false);
            setError(json.error)
            console.log(error);
        }
        if (response.ok) {
            setPosting(false);
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added:', json)
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            {posting && <button className='submit-button' disabled style={{ backgroundColor: '#1aac83a4' }}>Adding Workout</button>}
            {!posting && <button className='submit-button'>Add Workout</button>}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm