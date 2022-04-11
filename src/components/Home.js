import { DisplayTable } from "./DisplayTable";
import "../App.css";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { customersData } from "./Constant.js";

export function Home() {

    const navigate = useNavigate();

    return (
        <>
            <Button variant="contained" className="add-button" onClick={() => navigate("/add")}> Add New Customer </Button>
            {customersData.length > 0 ?
                <TableContainer className="table" component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Employment Status</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customersData.map(
                                (dt) => (<DisplayTable
                                    key={dt.id}
                                    id={dt.id}
                                    name={dt.name}
                                    age={dt.age}
                                    gender={dt.gender}
                                    city={dt.city}
                                    employmentStatus={dt.employmentStatus}
                                />))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : "No Data Found"}
        </>
    );
}