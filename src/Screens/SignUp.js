import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function SignUp() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('')
    const [number, setnumber] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('')




    const SignUpCall = () => {
        let form = {
            firstName: firstName,
            lastName: lastName,
            number: number,
            email: email,
            password: password,
            gender: gender
        }
        console.log("======>>>", form)


    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
                <div style={{ border: '1px solid grey', width: '33%', height: "70vh", padding: "10px", borderRadius: "20px", boxShadow: '7px 7px #e3e1e1' }}>
                    <Input placeholder='Enter the First Name' placeholderColor={'redColor'} onChnage={(e) => setfirstName(e)} />
                    <Input placeholder='Enter the Last Name' placeholderColor={'blackColor'} onChnage={(e) => setlastName(e)} />
                    <Input placeholder='Enter the Number' placeholderColor={'redColor'} onChnage={(e) => setnumber(e)} />
                    <Input placeholder='Enter the Email' placeholderColor={'redColor'} onChnage={(e) => setemail(e)} />
                    <Input placeholder='Enter the Password' placeholderColor={'redColor'} onChnage={(e) => setpassword(e)} />
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
                                    <MenuItem value={'10'}>Male</MenuItem>
                                    <MenuItem value={'20'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>


                    <Button title={'SignUP'} onClick={SignUpCall} />


                </div>
            </div>
        </div>
    )
}

export default SignUp
