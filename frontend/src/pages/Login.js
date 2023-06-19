import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            console.log(json.error)
        }
        if (response.ok) {
            setIsLoading(false)
            setError(null)

            //save the user to local storage
            localStorage.setItem('user', JSON.stringify({ json }))

            // save/dispatch the auth to the store
            dispatch(login(json))
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            {!isLoading && <button>Login</button>}
            {isLoading && <button disabled style={{ backgroundColor: '#1aac83a4' }}>Logging in...</button>}
            {error && <div className='error'>{error}</div>}
        </form>
    );
}
 
export default Login;