import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import { customersData } from './Constant';

export function DisplayTable({ id, name, age, gender, city, employmentStatus }) {

    const navigate = useNavigate();

    const deleteData = (id) => {
        const index = customersData.findIndex((data) => data.id === id);
        customersData.splice(index, 1);
        navigate("/");
    }

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{age}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{city}</TableCell>
            <TableCell>{employmentStatus}</TableCell>
            <TableCell onClick={() => navigate("/edit/" + id)}>✍</TableCell>
            <TableCell onClick={() => deleteData(id)}>❌</TableCell>
        </TableRow>
    );
}