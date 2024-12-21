import {useEffect, useState} from 'react'
import './App.css'
import { db } from './firebase.js'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import {Form} from "./component/form/Form.jsx";
import {useNavigate} from "react-router-dom";

function App() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, 'users');
    const navigate = useNavigate();
    
    
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        const dataUsers = getData(data);
        setUsers(dataUsers);
    }
    
    const getData = (data) =>{
       return data.docs.map((doc)=>{
            return {...doc.data(), id: doc.id};
            
        })
    }
    
    const viewUser = (id) =>{
        navigate('/view-user/'+id)
    }
    const deleteUser = async (id) => {
        const userRef = doc(db, "users", id)
        await deleteDoc(userRef);
        
        alert("User deleted successfully");
        window.location.reload();
    }
    
    useEffect(() => {
        getUsers();
    },[])
    
  return (
    <>
        <Form/>
        <table border={2}>
            <thead>
            <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>

            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td>
                        <button onClick={()=>viewUser(user.id)}>View</button>
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    </td>

                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

export default App
