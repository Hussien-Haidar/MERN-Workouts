import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const { user } = useSelector(state => state.user)
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
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;