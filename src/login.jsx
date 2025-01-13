import './App.css';
import { useState } from 'react';
import './style.css';

function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

return (
    <div>
    <h1>Login</h1>
    <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
    />
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
    />
    <button type="submit">Login</button>
    </div>
);
}

export default Login;
