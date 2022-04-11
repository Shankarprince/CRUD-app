import { useState } from "react";
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { customersData } from "./Constant";
import { useNavigate, useParams } from "react-router-dom";

export function EditCustomer() {

    const { id } = useParams();
    console.log(id);

    const customerData = customersData.filter( (fl) => fl.id === id );

    console.log(customersData[id]);

    return (
        <>
            < UpdateCustomer customerData={customerData} />
        </>
    );
}

export function UpdateCustomer({customerData}) {

    console.log(customersData);
    console.log(customerData);

    const [id, setId] = useState(customerData.id);
    const [name, setName] = useState(customerData.name);
    const [age, setAge] = useState(customerData.age);
    const [gender, setGender] = useState(customerData.gender);
    const [city, setCity] = useState(customerData.city);
    const [employmentStatus, setEmploymentStatus] = useState(customerData.employmentStatus);

    const navigate = useNavigate();

    const updateCustomer = () => {

        const updatedCustomer = {
            id: id,
            name: name,
            age: age,
            gender: gender,
            city: city,
            employmentStatus: employmentStatus
        }

        const newUpdatedData = customersData.map( obj => {
            if(obj.id === id ){
                return { ...obj, updatedCustomer };
            }

            return obj;
        })


        console.log(newUpdatedData);

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
                <Button variant="contained" onClick={updateCustomer}>SUBMIT</Button>
            </div>
        </div>
    );
}