import { useState } from "react";
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { customersData } from "./Constant";
import { useNavigate } from "react-router-dom";

export function AddCustomer() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");

    const navigate = useNavigate();

    const addData = () => {

        const newData = {
            id: id,
            name: name,
            age: age,
            gender: gender,
            city: city,
            employmentStatus: employmentStatus
        }

        customersData.push(newData);

        navigate("/");

    }

    return (
        <div className="add-container">
            <div className="add-form-container">
                <FormControl>
                    <InputLabel htmlFor="id">Enter ID</InputLabel>
                    <Input name="id" type="number" value={id} onChange={(event) => setId(event.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input name="name" value={name} onChange={(event) => setName(event.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="age">Enter Age</InputLabel>
                    <Input name="age" value={age} onChange={(event) => setAge(event.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="gender">Enter Gender</InputLabel>
                    <Input name="gender" value={gender} onChange={(event) => setGender(event.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="city">Enter City</InputLabel>
                    <Input name="city" value={city} onChange={(event) => setCity(event.target.value)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="employmentStatus">Enter Employment Status</InputLabel>
                    <Input name="employmentStatus" value={employmentStatus} onChange={(event) => setEmploymentStatus(event.target.value)}></Input>
                </FormControl>
                <Button variant="contained" onClick={addData}>SUBMIT</Button>
            </div>
        </div>
    );
}