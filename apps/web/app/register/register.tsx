"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Register = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerButton = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(username, password, email);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: username,
                email: email,
                password: password
            })
        };
        try {
            const data = await fetch("http://localhost:8000/register", requestOptions);
            const response = await data.json();
            console.log(response);
            if (response.status === 200) {
                console.log("success");
                router.push("/");
            } else {
                console.log("failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                    {/* <div className="square" style={{ "--i": 0 }}></div>
                    <div className="square" style={{ "--i": 1 }}></div>
                    <div className="square" style={{ "--i": 2 }}></div>
                    <div className="square" style={{ "--i": 3 }}></div>
                    <div className="square" style={{ "--i": 4 }}></div> */}
                    <div className="container">
                        <div className="form">
                            <h2>Sign Up</h2>
                            <form onSubmit={registerButton}>
                                <div className="inputBox">
                                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Sign Up" />
                                </div>
                                <p className="forget">
                                    Already have an account ? <a href="/login">Sign In</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;