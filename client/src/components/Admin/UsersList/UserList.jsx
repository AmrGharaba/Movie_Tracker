import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserList = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/users')
            .then(response => {
                setUsers(response.data.Users);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [users]);



    return(
        <div className="mt-5">
            <h2 className="text-center mb-3">Users List</h2>
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th>User</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        users.map((user, index) => {
                            return  <tr key={index}>
                                        <td style={{ color: "#9349f5" }}>{user.firstName} {user.lastName}</td>
                                        <td style={{ color: "#9349f5" }}>{user.email}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;