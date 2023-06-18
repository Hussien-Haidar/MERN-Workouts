import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;