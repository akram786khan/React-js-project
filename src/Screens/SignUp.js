import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { validators } from '../backend/Validation';
import { isValidForm } from '../backend/validForm';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
function SignUp() {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('')
    const [number, setnumber] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('')
    const [txt, settxt] = useState('Armaan khan')
    const [errors, seterrors] = useState('')

    setTimeout(() => {
        settxt('akram khan')
    }, 10000);

    const SignUpCall = async () => {

        let form = {
            // name: validators.checkRequire("Name", name),
            firstName: validators.checkRequire("First Name", firstName),
            lastName: validators.checkRequire("Last Name", lastName),
            number: validators.checkPhoneNumber("Number", number, 10, 11),
            email: validators.checkEmail("Email", email),
            password: validators.checkPassword("Password", password, 8),
            gender: validators.checkRequire("Gender", gender)
        }

        seterrors(form)
        console.log("==========>>", form);
        if (isValidForm(form)) {
            try {
                let body = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "number": number,
                    "email": email,
                    "password": password,
                    "gender": gender
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                };
                let result = await fetch('https://light-pumps-seal.cyclic.app/DreamCoder/api/userAuth/signup', requestOptions)
                // if (result.status == 500) {
                //     toast.error("Invalid Email and Password")
                // }



                let res = await result.json();
                let data = await res;
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.status == true) {
                    toast.success("SignUp Successfuly...")
                    await localStorage.setItem('Token', JSON.stringify(data.token))
                    setTimeout(() => {
                        navigate('/Dashbord')
                    }, 1000);
                }


                console.log("====data====>", data);

            } catch (err) {
                console.log("=====err===", err);
            }

        }
        console.log("======>>>", form)


    }
    return (
        <div>
            <h1>{txt}</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
                <ToastContainer />
                <div style={{ border: '1px solid grey', width: '33%', height: "80vh", padding: "10px", borderRadius: "20px", boxShadow: '7px 7px #e3e1e1' }}>
                    <Input placeholder='Enter the First Name' placeholderColor={'redColor'} onChnage={(e) => setfirstName(e)} error={errors?.firstName} />
                    <Input placeholder='Enter the Last Name' placeholderColor={'blackColor'} onChnage={(e) => setlastName(e)} error={errors?.lastName} />
                    <Input placeholder='Enter the Number' placeholderColor={'redColor'} onChnage={(e) => setnumber(e)} error={errors?.number} />
                    <Input placeholder='Enter the Email' placeholderColor={'redColor'} onChnage={(e) => setemail(e)} error={errors?.email} />
                    <Input placeholder='Enter the Password' placeholderColor={'redColor'} onChnage={(e) => setpassword(e)} error={errors?.password} />
                    {/* <Input placeholder='Enter the Email' placeholderColor={'redColor'} /> */}
                    <div style={{ width: "98%", padding: "10px" }}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={(e) => setgender(e.target.value)}
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <p style={{ color: "red" }}>{errors?.gender}</p>
                    </div>


                    <Button title={'SignUP'} onClick={SignUpCall} />


                </div>
            </div>
        </div>
    )
}

export default SignUp
