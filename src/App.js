import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddCustomer } from "./components/AddCustomer";
import { EditCustomer } from "./components/EditCustomer";
import { DataContext, customersData } from "./components/Constant";

export default function App() {

    return (
        <DataContext.Provider value={customersData}>
            <h2 className="heading"> Customers Data</h2>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/add" element={<AddCustomer />}></Route>
                <Route path="/edit/:id" element={<EditCustomer />}></Route>
            </Routes>
        </DataContext.Provider>
    )
}