import { useState, useEffect } from "react"

export default function AuthModal({ onClose, onRegister, mode }) {
    const [isLogin, setIsLogin] = useState(mode === 'login')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setIsLogin(mode === 'login')
    }, [mode])

    const handleRegister = () => {
        const userData = { username, name, email, password }
        const users = JSON.parse(localStorage.getItem('users')) || [] // Get users
        users.push(userData)
        localStorage.setItem('users', JSON.stringify(users)) // Saving in localStorage.
        onRegister(userData)
        onClose()
    }

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [] // Get users from localStorage.
        const foundUser = users.find(
            user => user.username === username && user.password === password)

        if (foundUser) {
            onRegister(foundUser)
            onClose()
        } else {
            alert('Invalid user or password')
        }
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative'>
                <h2 className='text-2xl font-bold mb-4'>{isLogin ? "Login" : "Register"}</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={ (e) => setUsername(e.target.value) }
                    className='w-full mb-2 p-2 border rounded'
                />

                {!isLogin && (
                    <>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={ (e) => setName(e.target.value) }
                            className='w-full mb-2 p-2 border rounded'
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                            className='w-full mb-2 p-2 border rounded'
                        />
                    </>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    className='w-full mb-2 p-2 border rounded'
                />

                <div className='flex justify-between items-center'>
                    <button
                        onClick={ isLogin ? handleLogin : handleRegister }
                        className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                    >
                        { isLogin ? "Login" : "Register" }
                    </button>

                    <button
                        onClick={ () => setIsLogin(!isLogin) }
                        className='text-blue-500 hover:underline'
                    >
                        { isLogin ? "Create an Account" : "Back to Login" }
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
                >
                    ✖️
                </button>

            </div>
        </div>
    )

}
