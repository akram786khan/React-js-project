import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
function SignUp() {
    const SignUpCall = () => {

    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
                <div style={{ border: '1px solid grey', width: '33%', height: "50vh", padding: "10px", borderRadius: "20px", boxShadow: '7px 7px #e3e1e1' }}>
                    <Input placeholder='Enter the First Name' placeholderColor={'redColor'} />
                    <Input placeholder='Enter the Last Name' placeholderColor={'blackColor'} />
                    <Input placeholder='Enter the Number' placeholderColor={'redColor'} />
                    <Input placeholder='Enter the Email' placeholderColor={'redColor'} />
                    <Button title={'SignUP'} onClick={SignUpCall} />


                </div>
            </div>
        </div>
    )
}

export default SignUp
