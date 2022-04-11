import { createContext } from "react";

export const customersData = [
    {
        "id": 1,
        "name": "Shankar",
        "age": 29,
        "gender": "Male",
        "city": "Chennai",
        "employmentStatus": "Salaried"
    },
    {
        "id": 2,
        "name": "Sowmiya",
        "age": 29,
        "gender": "Female",
        "city": "Chennai",
        "employmentStatus": "Salaried"
    }
];

export const DataContext = createContext(customersData);