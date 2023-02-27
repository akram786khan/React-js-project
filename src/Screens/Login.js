import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import { validators } from '../backend/Validation'
import { isValidForm } from '../backend/validForm'
function Login() {
    const navigate = useNavigate();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, seterrors] = useState({});
    const [loginRes, setloginRes] = useState({})
    const LoginCall = async () => {
        let form = {
            // name: validators.checkRequire("Name", name),
            email: validators.checkEmail("Email", email),
            password: validators.checkPassword("Password", password, 8)
        }

        seterrors(form)
        console.log("==========>>", form);
        if (isValidForm(form)) {
            let body = {
                "email": email,
                "password": password
            }
            // let result = await fetch('https://light-pumps-seal.cyclic.app/api/userAuth/login', {
            //     method: 'post',
            //     body: body,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // 'Authorization': 'Basic YWRtaW46YWRtaW4='
            //     }
            // })
            // console.log('res---->', await result.json());
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
            const result = fetch('https://light-pumps-seal.cyclic.app/DreamCoder/api/userAuth/login', requestOptions)
                .then(response => response.json())
                .then(data => {

                    if (data) {
                        setloginRes(data)
                    }

                });


            setloginRes(result);
            console.log("====datsss===loginRes=>", loginRes);
        }
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
                <div style={{ border: '1px solid grey', width: '33%', height: "46vh", padding: "10px", borderRadius: "20px", boxShadow: '7px 7px #e3e1e1' }}>
                    {/* <Input placeholder='Enter the Name' placeholderColor={'redColor'} onChnage={setname} error={errors?.name} /> */}
                    <Input placeholder='Enter the Email' placeholderColor={'blackColor'} onChnage={setemail} error={errors?.email} />
                    <Input placeholder='Enter the Password' placeholderColor={'redColor'} onChnage={setpassword} error={errors?.password} />
                    <div><p style={{ color: "blue", textAlign: "end" }} onClick={() => navigate('/SignUp')}>SignUp</p></div>
                    <Button title={'Login'} onClick={LoginCall} />


                </div>
            </div>
        </div>
    )
}

export default Login
