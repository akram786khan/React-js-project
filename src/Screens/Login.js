import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
function Login() {
    const LoginCall = () => {

    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
                <div style={{ border: '1px solid grey', width: '33%', height: "40vh", padding: "10px", borderRadius: "20px", boxShadow: '7px 7px #e3e1e1' }}>
                    <Input placeholder='Enter the Name' textColor={'redColor'} />
                    <Input placeholder='Enter the Email' textColor={'blackColor'} />
                    <Input placeholder='Enter the Number' textColor={'redColor'} />

                    <Button title={'Login'} onClick={LoginCall} />


                </div>
            </div>
        </div>
    )
}

export default Login
