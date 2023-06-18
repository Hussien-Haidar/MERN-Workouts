import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setWorkouts } from '../redux/slices/workoutSlice';

// components
import WorkoutDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

    const { workouts } = useSelector(state => state.workout);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch(setWorkouts(json));
            }
        }

        fetchWorkouts();
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;