import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setWorkouts } from '../redux/slices/workoutSlice';

// components
import WorkoutDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const { workouts } = useSelector(state => state.workout)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (json.length === 0) {
                setEmpty(true)
            } else {
                setEmpty(false)
            }

            if (response.ok) {
                dispatch(setWorkouts(json));
            }
        }

        if (user) {
            fetchWorkouts()
        }
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
                {!workouts && <div><span style={{ color: 'grey' }}>Retrieving Data...</span></div>}
                {empty && <div>no workouts found</div>}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;