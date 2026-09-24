import {useState} from 'react'
import {login} from "../../api/client";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await login(username, password);
            return res.json()
        } catch (error) {
            console.log(`An error ocuured ${error}`)
        }
    }


    return(
        <div>
            <div>
                <form onSubmit={onLogin}>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />

                <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;